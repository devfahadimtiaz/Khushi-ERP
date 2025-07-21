module.exports = (db) => {
  const express = require("express");
  const router = express.Router();
  const multer = require("multer");
  const path = require("path");

  //Disk Space
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.mimetype === "application/pdf") {
        cb(null, "uploads/Documents");
      } else {
        cb(null, "uploads/VehicleMedia");
      }
    },
    filename: (req, file, cb) => {
      const { stockNo, make, model, year } = req.body;

      const sanitizedMake = make?.replace(/\s+/g, "-").toLowerCase();
      const sanitizedModel = model?.replace(/\s+/g, "-").toLowerCase();
      const ext = path.extname(file.originalname);

      // Try to extract type from originalname like "auction-sheet.pdf"
      const baseType = path.basename(file.originalname, ext).split("-")[0]; // 'auction' from auction-sheet.pdf
      const docType =
        baseType?.toLowerCase().replace(/\s+/g, "-") || "document";

      const timestamp = Date.now();
      const uniqueSuffix = `${timestamp}-${Math.round(Math.random() * 1e4)}`;
      const fileName = `${docType}-${stockNo}-${sanitizedMake}-${sanitizedModel}-${year}${ext}`;

      cb(null, fileName);
    },
  });

  const upload = multer({ storage: storage });
  const uploadFields = upload.fields([
    { name: "media", maxCount: 20 },
    { name: "documents", maxCount: 20 },
    { name: "photograph", maxCount: 10 },
    { name: "reels", maxCount: 10 },
    { name: "verification", maxCount: 10 },
  ]);
  function getFileType(mimetype) {
    if (mimetype.startsWith("image/")) return "image";
    if (mimetype.startsWith("video/")) return "video";
    if (mimetype === "application/pdf") return "document";
    return "other";
  }

  //Get All Vehicle

  router.get("/vehicles", async (req, res) => {
    try {
      const [vehicles] = await db.execute("SELECT * FROM vehicle");
      res.json(vehicles);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Error fetching vehicles", error: err.message });
    }
  });
  router.get("/vehicles/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [vehicles] = await db.execute(
        "SELECT v.*, s.name FROM vehicle v Join showroom s On v.showroom_id=s.id Where showroom_id = ? OR currentShowroom=? ",
        [id, id]
      );
      res.json(vehicles);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Error fetching vehicles", error: err.message });
    }
  });
  function getFileTypeFromURL(url) {
    const ext = url.split(".").pop().toLowerCase();
    if (ext === "jpg" || ext === "jpeg" || ext === "png") return "image";
    if (ext === "mp4" || ext === "mov") return "video";
    if (ext === "pdf") return "document";
    return "unknown";
  }

  router.get("/allVehiclesDetails/:id", async (req, res) => {
    const connection = await db.getConnection();
    try {
      const [rows] = await connection.query(
        `SELECT  id, vehicle_type, stock_no , make, showroom_id, model, year, variant, mileage, price, vin_no, engine, engine_no, interior, body_type, exterior_color, fuel_type, transmission, drive_type, doors, seats, model_code, auction_grade, registration_no, height, width, length, steering, ground_clearance, status, total_price_after_expense  FROM vehicle WHERE id=?`,
        [req.params.id]
      );
      const [media] = await connection.query(
        `SELECT * FROM vehicleMedia WHERE vehicle_id=? AND (type='image' OR type='video') `,
        [rows[0].id]
      );
      const [documents] = await connection.query(
        `SELECT * FROM vehicleMedia WHERE vehicle_id=?  AND type='document'`,
        [rows[0].id]
      );
      const [expenses] = await connection.query(
        `SELECT * FROM vehicleExpense WHERE vehicle_id=?`,
        [rows[0].id]
      );

      const result = {
        ...rows[0],
        mediaData: media,
        documents: documents,
        expensesData: expenses,
      };

      return res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error", error: err.message });
    }
  });

  // 📦 Get all vehicle inventory wih images = 1

  router.get("/MaxMinVehiclePrice/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [rows] = await db.query(
        `
      SELECT 
        MAX(total_price_after_expense) AS max_price,
        MIN(total_price_after_expense) AS min_price
      FROM vehicle WHERE showroom_id = ?
    `,
        [id]
      );

      res.json(rows[0]); // ✅ Send only the first object from rows array
    } catch (error) {
      console.error("Error fetching max/min prices:", error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  });

  router.get("/inventoryGridView", async (req, res) => {
    try {
      const [rows] = await db.execute(`
     SELECT v.*, vm.url, s.currency
      FROM vehicle AS v 
      LEFT JOIN vehicleMedia AS vm ON v.id = vm.vehicle_id 
      JOIN showroom AS s ON v.showroom_id = s.id
      WHERE vm.type = 'Image'
    `);

      const vehicleMap = {};

      for (const row of rows) {
        if (!vehicleMap[row.id]) {
          // Create vehicle entry
          vehicleMap[row.id] = {
            ...row,
            images: [],
          };
          delete vehicleMap[row.id].url; // Remove duplicate 'url' field
        }

        if (row.url) {
          vehicleMap[row.id].images.push(row.url);
        }
      }

      const vehicles = Object.values(vehicleMap);
      res.json(vehicles);
    } catch (err) {
      res.status(500).json({ message: "Server Error", error: err.message });
    }
  });

  // 📊 Check stock with session validation

  // POST: Add New Vehicle Stock
  router.post("/addStock", uploadFields, async (req, res) => {
    const data = req.body;
    const files = req.files;
    let expenses = [];

    // Parse expenses
    if (data.expense) {
      try {
        expenses = JSON.parse(data.expense);
      } catch (err) {
        console.error("Invalid expense JSON:", err);
      }
    }

    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();

      // Insert vehicle data
      const [vehicleResult] = await connection.query(
        `INSERT INTO vehicle (
        vehicle_type, stock_no, showroom_id, currentShowroom, make, model, year, variant, mileage, 
        price, vin_no, engine, engine_no, interior, body_type, exterior_color, fuel_type, 
        transmission, drive_type, doors, seats, model_code, auction_grade, registration_no, 
        height, width, length, steering, ground_clearance, status, total_price_after_expense, 
        total_usd_price
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          data.vehicleType,
          data.stockNo,
          data.garageId,
          data.currentShowroom,
          data.make,
          data.model,
          data.year,
          data.varient,
          data.mileage,
          data.buyingPrice,
          data.vinNo,
          data.engine,
          data.engineNo,
          data.interior,
          data.bodyType,
          data.exterior,
          data.fuelType,
          data.transmission,
          data.driveType,
          data.doors,
          data.seats,
          data.modelCode,
          data.auctionGrade,
          data.registrationNo,
          data.height,
          data.width,
          data.length,
          data.steering,
          data.groundClearance,
          data.status,
          data.totalPriceAfterExpense,
          data.totalPriceinUSD,
        ]
      );

      const vehicleId = vehicleResult.insertId;

      // Insert media/documents
      for (const fieldName in files) {
        for (const file of files[fieldName]) {
          const type = getFileType(file.mimetype);
          const fileUrl =
            file.mimetype === "application/pdf"
              ? `/uploads/Documents/${file.filename}`
              : `/uploads/VehicleMedia/${file.filename}`;

          await connection.query(
            `INSERT INTO vehiclemedia (vehicle_id, type, url) VALUES (?, ?, ?)`,
            [vehicleId, type, fileUrl]
          );
        }
      }

      // Insert expenses
      for (const expense of expenses) {
        const {
          type,
          amount,
          amountCurrency,
          usdRate,
          kshRate,
          convertedUsd,
          usd,
          convertedKsh,
          currency,
          date,
          description,
        } = expense;

        await connection.query(
          `INSERT INTO vehicleexpense (
          vehicle_id, type, description, amount, amountCurrency, showroomCurrency,
          convertedAmount, currencyRate, usdRate, usdConvertedAmount, USDCurrency, date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            vehicleId,
            type,
            description,
            amount,
            amountCurrency,
            currency,
            convertedKsh,
            kshRate,
            usdRate,
            convertedUsd,
            usd,
            date,
          ]
        );
      }

      await connection.commit();
      res.status(200).json({ message: "Vehicle added successfully" });
    } catch (error) {
      await connection.rollback();
      console.error("Add Vehicle Error:", error);
      res
        .status(500)
        .json({ error: "Transaction failed", details: error.message });
    } finally {
      connection.release();
    }
  });

  router.delete("/documents/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await db.query("DELETE FROM vehiclemedia WHERE id = ?", [id]);

      res.status(200).json({ message: "Document deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error deleting document" });
    }
  });

  router.delete("/delVehicle/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM vehicle WHERE id = ?`;

    try {
      const [results] = await db.query(sql, [id]);
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      res.status(200).json({ message: "Vehicle deleted successfully" });
    } catch (error) {
      console.error("Error deleting vehicle: ", error);
      res
        .status(500)
        .json({ message: "Error deleting vehicle", error: error.message });
    }
  });
  // PUT: Edit Existing Vehicle Stock
  router.put("/editStock/:id", uploadFields, async (req, res) => {
    const vehicleId = req.params.id;
    const data = req.body;
    const files = req.files;
    let expenses = [];

    // Parse expense JSON
    if (data.expense) {
      try {
        expenses = JSON.parse(data.expense);
      } catch (err) {
        console.error("Invalid expense JSON:", err);
      }
    }

    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();

      // Update vehicle data
      await connection.query(
        `UPDATE vehicle SET
        vehicle_type = ?, stock_no = ?, showroom_id = ?, currentShowroom = ?, make = ?, model = ?,
        year = ?, variant = ?, mileage = ?, price = ?, vin_no = ?, engine = ?, engine_no = ?,
        interior = ?, body_type = ?, exterior_color = ?, fuel_type = ?, transmission = ?, 
        drive_type = ?, doors = ?, seats = ?, model_code = ?, auction_grade = ?, registration_no = ?,
        height = ?, width = ?, length = ?, steering = ?, ground_clearance = ?, status = ?, 
        total_price_after_expense = ?, total_usd_price = ?
      WHERE id = ?`,
        [
          data.vehicleType,
          data.stockNo,
          data.garageId,
          data.currentShowroom,
          data.make,
          data.model,
          data.year,
          data.varient,
          data.mileage,
          data.buyingPrice,
          data.vinNo,
          data.engine,
          data.engineNo,
          data.interior,
          data.bodyType,
          data.exterior,
          data.fuelType,
          data.transmission,
          data.driveType,
          data.doors,
          data.seats,
          data.modelCode,
          data.auctionGrade,
          data.registrationNo,
          data.height,
          data.width,
          data.length,
          data.steering,
          data.groundClearance,
          data.status,
          data.totalPriceAfterExpense,
          data.totalPriceinUSD,
          vehicleId,
        ]
      );

      // First delete existing media entries
      await connection.query(`DELETE FROM vehiclemedia WHERE vehicle_id = ?`, [
        vehicleId,
      ]);

      // Re-insert existing media URLs sent from frontend
      if (data.existingMedia && Array.isArray(data.existingMedia)) {
        for (const mediaUrl of data.existingMedia) {
          const type = getFileTypeFromURL(mediaUrl); // Create this function if needed
          await connection.query(
            `INSERT INTO vehiclemedia (vehicle_id, type, url) VALUES (?, ?, ?)`,
            [vehicleId, type, mediaUrl]
          );
        }
      }

      // Insert new uploaded files
      for (const fieldName in files) {
        for (const file of files[fieldName]) {
          const type = getFileType(file.mimetype);
          const fileUrl =
            file.mimetype === "application/pdf"
              ? `/uploads/Documents/${file.filename}`
              : `/uploads/VehicleMedia/${file.filename}`;

          await connection.query(
            `INSERT INTO vehiclemedia (vehicle_id, type, url) VALUES (?, ?, ?)`,
            [vehicleId, type, fileUrl]
          );
        }
      }

      // Delete and re-insert vehicle expenses
      await connection.query(
        `DELETE FROM vehicleexpense WHERE vehicle_id = ?`,
        [vehicleId]
      );

      for (const expense of expenses) {
        const {
          type,
          amount,
          amountCurrency,
          usdRate,
          kshRate,
          convertedUsd,
          usd,
          convertedKsh,
          currency,
          date,
          description,
        } = expense;

        await connection.query(
          `INSERT INTO vehicleexpense (
          vehicle_id, type, description, amount, amountCurrency, showroomCurrency,
          convertedAmount, currencyRate, usdRate, usdConvertedAmount, USDCurrency, date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            vehicleId,
            type,
            description,
            amount,
            amountCurrency,
            currency,
            convertedKsh,
            kshRate,
            usdRate,
            convertedUsd,
            usd,
            date,
          ]
        );
      }

      await connection.commit();
      res.status(200).json({ message: "Vehicle updated successfully" });
    } catch (error) {
      await connection.rollback();
      console.error("Update Vehicle Error:", error);
      res.status(500).json({ error: "Update failed", details: error.message });
    } finally {
      connection.release();
    }
  });

  router.get("/fetchGeneralDetails/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const results = await db.execute(
        "Select v.*, s.name as showroom from vehicle v join showroom s On s.id = v.currentshowroom Where v.id = ?",
        [id]
      );
      res.json(results[0]);
    } catch (error) {
      console.error("Error fetching vehicle details:", error);
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
    }
  });
  router.get("/AllMake", async (req, res) => {
    try {
      const [make] = await db.query("SELECT DISTINCT make FROM vehicle");
      return res.json(make);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error });
    }
  });
  router.get("/SelectedModle/:make/", async (req, res) => {
    const { make } = req.params;
    try {
      const [model] = await db.query(
        "SELECT DISTINCT model FROM vehicle WHERE make = ?",
        [make]
      );
      return res.json(model);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

  router.post("/UpdateGeneralDetails/:id", async (req, res) => {
    const data = req.body; // ✅ Corrected
    const vehicleId = req.params.id;
    try {
      const [results] = await db.execute(
        `UPDATE vehicle SET
        vehicle_type = ?, stock_no = ?, make = ?, model = ?,
        year = ?, variant = ?, mileage = ?, vin_no = ?, engine = ?, engine_no = ?,
        interior = ?, body_type = ?, exterior_color = ?, fuel_type = ?, transmission = ?, 
        drive_type = ?, doors = ?, seats = ?, model_code = ?, auction_grade = ?, registration_no = ?,
        height = ?, width = ?, length = ?, steering = ?, ground_clearance = ?, status = ?
      WHERE id = ?`,
        [
          data.vehicleType,
          data.stockNo,
          data.make,
          data.model,
          data.year,
          data.varient,
          data.mileage,
          data.vinNo,
          data.engine,
          data.engineNo,
          data.interior,
          data.bodyType,
          data.exterior,
          data.fuelType,
          data.transmission,
          data.driveType,
          data.doors,
          data.seats,
          data.modelCode,
          data.auctionGrade,
          data.registrationNo,
          data.height,
          data.width,
          data.length,
          data.steering,
          data.groundClearance,
          data.status,
          vehicleId,
        ]
      );
      res
        .status(200)
        .json({ message: "Vehicle General Details Updated successfully" });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
    }
  });
  router.get("/fetcheMediaDetails/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const results = await db.execute(
        `SELECT * FROM vehicleMedia WHERE vehicle_id=? AND (type='image' OR type='video')`,
        [id]
      );
      res.json(results[0]);
    } catch (error) {
      console.error("Error fetching vehicle details:", error);
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
    }
  });

  router.post(
    "/updateMedia/:id",
    upload.fields([
      { name: "photos", maxCount: 20 },
      { name: "videos", maxCount: 20 },
    ]),
    async (req, res) => {
      const vehicleId = req.params.id;

      const deletedPhotoIds = JSON.parse(req.body.deletedPhotoIds || "[]");
      const deletedVideoIds = JSON.parse(req.body.deletedVideoIds || "[]");

      const photos = req.files["photos"] || [];
      const videos = req.files["videos"] || [];

      const connection = await db.getConnection();
      await connection.beginTransaction();

      try {
        // 1. Delete media records
        if (deletedPhotoIds.length > 0) {
          await connection.query(
            "DELETE FROM vehiclemedia WHERE id IN (?) AND type = 'image'",
            [deletedPhotoIds]
          );
        }

        if (deletedVideoIds.length > 0) {
          await connection.query(
            "DELETE FROM vehiclemedia WHERE id IN (?) AND type = 'video'",
            [deletedVideoIds]
          );
        }

        // 2. Insert new photos
        for (const file of photos) {
          await connection.query(
            "INSERT INTO vehiclemedia (vehicle_id, type, url) VALUES (?, 'image', ?)",
            [vehicleId, `/uploads/VehicleMedia/${file.filename}`]
          );
        }

        // 3. Insert new videos
        for (const file of videos) {
          await connection.query(
            "INSERT INTO vehiclemedia (vehicle_id, type, url) VALUES (?, 'video', ?)",
            [vehicleId, `/uploads/VehicleMedia/${file.filename}`]
          );
        }

        await connection.commit();
        res.json({ message: "Media updated successfully" });
      } catch (error) {
        await connection.rollback();
        console.error("Update Media Error:", error);
        res
          .status(500)
          .json({ error: "Something went wrong while updating media" });
      } finally {
        connection.release();
      }
    }
  );

  router.get("/GetVehicleDocuments/:id", async (req, res) => {
    const vehicleId = req.params.id;
    try {
      const results = await db.execute(
        `SELECT * FROM vehicleMedia WHERE vehicle_id=? AND type='document' `,
        [vehicleId]
      );
      res.json(results[0]);
    } catch (error) {
      console.error("Error fetching vehicle details:", error);
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
    }
  });
  router.post(
    "/editVehicleDocuments/:id",
    upload.array("newDocs"),
    async (req, res) => {
      const vehicleId = req.params.id;
      const files = req.files;
      const types = req.body.types;
      const docTypes = req.body.doc_types;
      const deletedDocIds = JSON.parse(req.body.deletedDocIds || "[]");

      const connection = await db.getConnection();
      try {
        await connection.beginTransaction();

        // Delete removed documents
        if (deletedDocIds.length > 0) {
          await connection.query(
            "DELETE FROM vehiclemedia WHERE id IN (?)",
            [deletedDocIds]
          );
        }

        // Insert new ones
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const type = types[i];
          const doc_type = docTypes[i];
          const url = file.filename;

          await connection.query(
            `INSERT INTO vehiclemedia (vehicle_id, type, doc_type, url) VALUES (?, ?, ?, ?)`,
            [vehicleId, type, doc_type, url]
          );
        }

        await connection.commit();
        res.send({ success: true });
      } catch (err) {
        await connection.rollback();
        res.status(500).send({ error: err.message, });
      } finally {
        connection.release();
      }
    }
  );

  return router;
};
