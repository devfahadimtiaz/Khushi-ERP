module.exports = (db) => {
  const express = require("express");
  const router = express.Router();
  const multer = require("multer");

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/logbook"); // Folder must exist or be created
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "- LogBook";
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  });

  const upload = multer({ storage });

  router.get("/getLogBookVehicles", async (req, res) => {
    try {
      const [results] = await db.query(
        "SELECT * FROM vehicle WHERE is_logbook = 0"
      );
      res.json(results);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
      console.log(error);
    }
  });

  router.get("/getBuyer/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const [results] = await db.query(
        "SELECT b.* FROM cashsalebuyer b join sale s On s.id=b.sale_id Join vehicle v on s.vehicle_id = v.id WHERE v.stock_no = ?",
        [id]
      );
      res.json(results[0]);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
    }
  });

  //get CUrrency
  router.get("/getCurrency/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [results] = await db.query(
        "SELECT s.currency FROM showroom s Join vehicle v On s.id = v.showroom_id WHERE v.stock_no = ?",
        [id]
      );
      res.json(results[0]);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error in backend", error: error.message });
    }
  });

  router.post("/insertLogBook", async (req, res) => {
    const {
      transferType,
      paidBy,
      buyerId,
      vehicleStockNo,
      documentUrl,
      paymentType,
      amount,
      currency,
    } = req.body;
    try {
      await db.query(
        `INSERT INTO vehicleLogBook (transfer_type,paid_by,buyer_id ,vehicle_stock_no ,document_url, currency, paymentType, amount) Values (?,?,?,?,?,?,?,?)`,
        [
          transferType,
          paidBy,
          buyerId,
          vehicleStockNo,
          documentUrl,
          currency,
          paymentType,
          amount,
        ]
      );
      res.status(201).json({ message: "Vehicle LogBook Saved Successfully" });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
      console.log(error);
    }
  });

  router.post("/UploadLogBookDocument", upload.single("file"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const fileUrl = `/uploads/${req.file.filename}`; // adjust based on your setup
    res.status(200).json({ fileUrl });
  });

  router.patch("/updateStatusVehicle/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const results = await db.query(
        "Update vehicle set is_logbook = 1 Where stock_no = ?",
        [id]
      );
      res.json({ message: "Log Book Status Update SUccessfully" });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
    }
  });

  router.get("/getLogBook", async (req, res) => {
    try {
      const [results] = await db.query("SELECT * from vehiclelogbook");
      return res.json(results);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
    }
  });

  router.delete("/deleteLogBook/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [results] = await db.query(
        "DELETE FROM vehiclelogbook WHERE id = ?",
        [id]
      );
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Logbook not Found" });
      }

      res.status(200).json({ message: "Logbook Deleted Successfully" });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
    }
  });
   router.patch("/updateStatusVehicleToFalse/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const results = await db.query(
        "Update vehicle set is_logbook = 0 Where stock_no = ?",
        [id]
      );
      res.json({ message: "Log Book Status Update SUccessfully" });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
    }
  });
  router.put("/editLogBook/:id", async(req,res)=>{
    const id = req.params.id;
    const data = req.body;
  })

  return router;
};
