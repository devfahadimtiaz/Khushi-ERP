module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  // Add Bank
  router.post("/addbank", async (req, res) => {
    const data = req.body;
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      await connection.query(
        `INSERT INTO bankdetails 
          (showroom_id, bank_name, account_title, bank_code, branch_code, account_number, address, swift_code, currency, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          data.selectShowroom,
          data.bankName,
          data.accountTitle,
          data.bankCode,
          data.bankBranchCode,
          data.accountNumber,
          data.address,
          data.swiftCode,
          data.currency,
          data.status,
        ]
      );
      await connection.commit();
      res.status(200).json({ message: "Bank Added Successfully" });
    } catch (err) {
      await connection.rollback();
      res.status(400).json({
        message: "Error in adding bank details",
        error: err.message,
      });
    } finally {
      connection.release();
    }
  });

  // Get all bank details
  router.get("/bankDetails", async (req, res) => {
    try {
      const [results] = await db.execute(
        `SELECT bd.id, b.name AS branch_name, bd.bank_name, bd.account_number,bd.branch_code, bd.bank_code, 
        bd.account_title, bd.address, bd.status, bd.swift_code, bd.currency 
        FROM bankdetails bd 
        JOIN showroom b ON bd.showroom_id = b.id`
      );
      return res.json(results);
    } catch (err) {
      return res.json({
        message: "Error Inside Server",
        error: err.message,
      });
    }
  });

  // Get active banks by showroom
  router.get("/bankDetails/:showroomId", async (req, res) => {
    const { showroomId } = req.params;
    try {
      const [results] = await db.query(
        `SELECT * FROM bankdetails WHERE showroom_id = ? AND status = 'Active'`,
        [showroomId]
      );
      res.json(results);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "Error Fetching Bank Details" });
    }
  });

  // Edit bank by ID
  router.put("/editBank/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      await connection.query(
        `UPDATE bankdetails 
         SET showroom_id = ?, bank_name = ?, account_title = ?, bank_code = ?, 
             branch_code = ?, account_number = ?, address = ?, swift_code = ?, 
             currency = ?, status = ? 
         WHERE id = ?`,
        [
          data.selectShowroom,
          data.bankName,
          data.accountTitle,
          data.bankCode,
          data.bankBranchCode,
          data.accountNumber,
          data.address,
          data.swiftCode,
          data.currency,
          data.status,
          id,
        ]
      );
      await connection.commit();
      res.status(200).json({ message: "Bank Updated Successfully" });
    } catch (err) {
      await connection.rollback();
      res.status(400).json({
        message: "Error in updating bank details",
        error: err.message,
      });
    } finally {
      connection.release();
    }
  });

  // Delete bank by ID
  router.delete("/deleteBank/:id", async (req, res) => {
    const { id } = req.params;
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      await connection.query("DELETE FROM bankdetails WHERE id = ?", [id]);
      await connection.commit();
      res.status(200).json({ message: "Bank Deleted Successfully" });
    } catch (err) {
      await connection.rollback();
      res.status(400).json({
        message: "Error in deleting bank details",
        error: err.message,
      });
    } finally {
      connection.release();
    }
  });

  return router;
};
