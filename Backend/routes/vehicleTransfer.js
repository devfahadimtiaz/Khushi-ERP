module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  router.get("/GetTransferableVehicle", async (req, res) => {
    const sql = `Select s.name as showroomname, v.* From vehicle as v Join showroom as s on s.id= v.currentShowroom Where status="Transferable"`;
    try {
      const [result] = await db.query(sql);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });
  router.get("/GetTransferableVehicle/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `Select s.name as showroomname, v.* From vehicle as v Join showroom as s on s.id= v.currentShowroom Where v.status="Transferable" AND v.currentShowroom = ? `;
    try {
      const [result] = await db.query(sql,[id]);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });
  async function generateTransferNumber(connection) {
    const [rows] = await connection.query(
      "SELECT transfer_no FROM vehicleTransfer ORDER BY id DESC LIMIT 1"
    );

    if (!rows || rows.length === 0 || !rows[0].transfer_no) {
      return "TRF-0001"; // first transfer number
    }

    const lastTransferNo = rows[0].transfer_no || "TRF-0000"; // fallback
    const lastNumber = parseInt(lastTransferNo.split("-")[1] || "0");
    const newNumber = lastNumber + 1;
    return `TRF-${String(newNumber).padStart(4, "0")}`;
  }

  router.post("/insertTransfer", async (req, res) => {
    const data = req.body;
    const connection = await db.getConnection();

    if (!data.vehicleId || !data.originShowroom || !data.targetShowroom) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const transferNumber = await generateTransferNumber(connection);
      await connection.beginTransaction();

      await connection.query(
        `INSERT INTO vehicleTransfer 
        (transfer_no, vehicle_id, status, origin_showroom_id, destination_showroom_id, delivery_date, logistics_company, location)
       VALUES (?,?,?,?,?,?,?,?)`,
        [
          transferNumber,
          data.vehicleId,
          data.status,
          data.originShowroom,
          data.targetShowroom,
          data.deliveryDate,
          data.logisticsCompany,
          data.location,
        ]
      );

      const [updateResult] = await connection.query(
        "UPDATE vehicle SET status = 'Transferring' WHERE id = ?",
        [data.vehicleId]
      );
      if (updateResult.affectedRows === 0) {
        throw new Error("Vehicle not found or already transferring");
      }

      await connection.commit();
      res
        .status(200)
        .json({ message: "Vehicle Transfer Successful", transferNumber });
    } catch (error) {
      await connection.rollback();
      console.error(error);
      res.status(400).json({ message: "Database Error", error: error.message });
    } finally {
      connection.release();
    }
  });

  router.get("/getVehicleTransfer", async (req, res) => {
    const sql = `SELECT 
    vt.*, 
    v.make, 
    v.model, 
    v.stock_no, 
    origin_s.name AS origin_showroom_name, 
    dest_s.name AS destination_showroom_name
FROM 
    vehicleTransfer AS vt
JOIN 
    vehicle AS v ON v.id = vt.vehicle_id
JOIN 
    showroom AS origin_s ON origin_s.id = vt.origin_showroom_id
JOIN 
    showroom AS dest_s ON dest_s.id = vt.destination_showroom_id;
`;
    try {
      const [result] = await db.query(sql);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });

  router.get("/getVehicleTransfer/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT 
    vt.*, 
    v.make, 
    v.model, 
    v.stock_no, 
    origin_s.name AS origin_showroom_name, 
    dest_s.name AS destination_showroom_name
FROM 
    vehicleTransfer AS vt
JOIN 
    vehicle AS v ON v.id = vt.vehicle_id
JOIN 
    showroom AS origin_s ON origin_s.id = vt.origin_showroom_id
JOIN 
    showroom AS dest_s ON dest_s.id = vt.destination_showroom_id Where origin_s.id=?;
`;
    try {
      const [result] = await db.query(sql,[id]);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });

  router.put("/updateTransferStatus/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `UPDATE vehicleTransfer SET status = "In Transit" WHERE id = ?`;
    try {
      const [result] = await db.query(sql, [id]);
      res.json({ message: "Transfer status updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });

  router.get("/getTransitVehicle", async (req, res) => {
    const sql = `SELECT 
    vt.*, 
    v.make, 
    v.model, 
    v.stock_no, 
    v.vin_no,
    origin_s.name AS origin_showroom_name, 
    dest_s.name AS destination_showroom_name
FROM 
    vehicleTransfer AS vt
JOIN 
    vehicle AS v ON v.id = vt.vehicle_id
JOIN 
    showroom AS origin_s ON origin_s.id = vt.origin_showroom_id
JOIN 
    showroom AS dest_s ON dest_s.id = vt.destination_showroom_id
Where
    vt.status="In Transit" OR vt.status="Delivered"
`;
    try {
      const [result] = await db.query(sql);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });
  router.get("/getTransitVehicle/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT 
    vt.*, 
    v.make, 
    v.model, 
    v.stock_no, 
    v.vin_no,
    origin_s.name AS origin_showroom_name, 
    dest_s.name AS destination_showroom_name
FROM 
    vehicleTransfer AS vt
JOIN 
    vehicle AS v ON v.id = vt.vehicle_id
JOIN 
    showroom AS origin_s ON origin_s.id = vt.origin_showroom_id
JOIN 
    showroom AS dest_s ON dest_s.id = vt.destination_showroom_id
Where
    (vt.status="In Transit" OR vt.status="Delivered") AND vt.destination_showroom_id = ?
`;
    try {
      const [result] = await db.query(sql,[id]);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });
  router.put("/updateTransitStatus/:id", async (req, res) => {
    const { id } = req.params;
    const currentDate = new Date();
    const sql = `UPDATE vehicleTransfer SET status = "Delivered", received_date = ? WHERE id = ?`;
    try {
      const [result] = await db.query(sql, [currentDate, id]);
      res.json({ message: "Transfer status updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });
  router.put("/UpdateVehicleTOInStock/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `UPDATE vehicle SET status = "In Stock" WHERE id = ?`;
    try {
      const [result] = await db.query(sql, [id]);
      res.json({ message: "Vehicle status updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });
  router.put("/UpdateVehicleStatueTransferInProcess/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `UPDATE vehicle SET status = "Transfer In Process" WHERE id = ?`;
    try {
      const [result] = await db.query(sql, [id]);
      res.json({ message: "Vehicle status updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });
  router.put("/UpdateVehicleStatueTransferring/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `UPDATE vehicle SET status = "In Transit" WHERE id = ?`;
    try {
      const [result] = await db.query(sql, [id]);
      res.json({ message: "Vehicle status updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });
  router.put("/UpdateVehicleShowroom", async (req, res) => {
    const { vehicleId, showroomId } = req.body;

    const sql = `UPDATE vehicle SET showroom_id = ? WHERE id = ?`;

    try {
      const [result] = await db.query(sql, [showroomId, vehicleId]);
      res.json({ message: "Vehicle showroom updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error in database", error });
    }
  });
  return router;
};
