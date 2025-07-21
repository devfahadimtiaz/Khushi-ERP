module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  // Fetch Repairable Cars
  router.get("/repairableCars", async (req, res) => {
    try {
      const [repairedCars] = await db.execute(
        "SELECT * FROM vehicle WHERE status = 'Repairable'"
      );
      return res.json(repairedCars);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error fetching data", error: err });
    }
  });
   router.get("/repairableCars/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [repairedCars] = await db.execute(
        "SELECT * FROM vehicle WHERE status = 'Repairable' AND showroom_id = ?",[id]
      );
      return res.json(repairedCars);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error fetching data", error: err });
    }
  });

  // Voucher Number Generator
  const generateVoucherNumber = async (connection) => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2); // e.g. "24"
    const month = String(now.getMonth() + 1).padStart(2, "0"); // e.g. "05"
    const prefix = `RPR-${year}${month}`;

    const [rows] = await connection.execute(
      `SELECT voucher_no FROM vehicle_repair
             WHERE voucher_no LIKE ? ORDER BY voucher_no DESC LIMIT 1`,
      [`${prefix}-%`]
    );

    let nextNumber = "001";
    if (rows.length > 0) {
      const lastNumber = rows[0].voucher_no.split("-")[2]; // e.g., "003"
      nextNumber = String(parseInt(lastNumber) + 1).padStart(3, "0"); // "004"
    }

    return `${prefix}-${nextNumber}`;
  };

  // Add Repairable Car Entry
  router.post("/addRepairableCars", async (req, res) => {
    const data = req.body;
    let issues = [];
    if (data.issue) {
      issues = data.issue;
    }
    const connection = await db.getConnection();

    try {
      const voucherNumber = await generateVoucherNumber(connection);

      await connection.beginTransaction();

      const [repairResults] = await connection.query(
        `INSERT INTO vehicle_repair
                (vehicle_id, technician_name, total_amount, voucher_no, repair_status, account_no, reference,time_required)
                VALUES (?, ?, ?, ?, ?, ?, ?,?)`,
        [
          data.vehicleId,
          data.technician,
          data.totalexpense,
          voucherNumber,
          "Pending",
          data.accountNo,
          data.refrenceNo,
          data.timeRequired,
        ]
      );
      const repairId = repairResults.insertId;

      for (const issue of issues) {
        const { item, details, amount } = issue;
        if (item && details && amount != null) {
          await connection.query(
            "INSERT INTO repair_issues (repair_id, item, details, amount) VALUES(?, ?, ?, ?)",
            [repairId, item, details, amount]
          );
        }
      }

      await connection.commit();
      res
        .status(200)
        .json({ message: "Vehicle Repair Added Successfully", voucherNumber });
    } catch (err) {
      await connection.rollback();
      res.status(500).json({ message: "Server Error", error: err });
    } finally {
      connection.release();
    }
  });

  router.patch("/updateVehicleStatuss/:vehicleId", async (req, res) => {
    console.log("PATCH /updateVehicleStatus called");
    const vehicleId = req.params.vehicleId.trim();
    const sql = "UPDATE vehicle SET status = 'Repairing' WHERE id = ?";
    try {
      const [results] = await db.execute(sql, [vehicleId]);
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Vehicle Not Found" });
      }
      res.json({ message: "Vehicle Status updated to Repairing" });
    } catch (err) {
      console.error("ERROR Update Vehicle Status", err);
      return res.status(500).json({ message: "Server Error", error: err });
    }
  });

  // List of vehicle repairs (without duplicating per issue)
  router.get("/repairing", async (req, res) => {
    try {
      const [repairs] = await db.execute(`
      SELECT vr.id AS repair_id, v.make, v.model, vr.voucher_no, vr.repair_date,
             vr.reference, vr.technician_name, vr.account_no, vr.repair_status, vr.time_required
      FROM vehicle_repair AS vr
      LEFT JOIN vehicle AS v ON v.id = vr.vehicle_id
      ORDER BY vr.repair_date DESC;
    `);

      return res.json(repairs);
    } catch (err) {
      return res.status(400).json({ message: "Error Occurred", error: err });
    }
  });
  router.get("/repairingbyshowrroom/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [repairs] = await db.execute(`
      SELECT vr.id AS repair_id, v.make, v.model, vr.voucher_no, vr.repair_date,
             vr.reference, vr.technician_name, vr.account_no, vr.repair_status, vr.time_required
      FROM vehicle_repair AS vr
      LEFT JOIN vehicle AS v ON v.id = vr.vehicle_id Where v.showroom_id=?
      ORDER BY vr.repair_date DESC ;
    `,[id]);

      return res.json(repairs);
    } catch (err) {
      return res.status(400).json({ message: "Error Occurred", error: err });
    }
  });

  // Full details (repair + issues) for one repair
  router.get("/repairing/:id", async (req, res) => {
    try {
      const repairId = req.params.id;

      const [[repair]] = await db.execute(
        `
      SELECT vr.id AS repair_id, v.make, v.model,v.id, vr.voucher_no, vr.repair_date,
             vr.reference, vr.technician_name, vr.account_no, vr.repair_status, vr.time_required
      FROM vehicle_repair AS vr
      LEFT JOIN vehicle AS v ON v.id = vr.vehicle_id
      WHERE vr.id = ?
    `,
        [repairId]
      );

      const [issues] = await db.execute(
        `
      SELECT id, item, details, amount
      FROM repair_issues
      WHERE repair_id = ?
    `,
        [repairId]
      );

      return res.json({ repair, issues });
    } catch (err) {
      return res.status(400).json({ message: "Error Occurred", error: err });
    }
  });

  router.get("/repairingVoucher/:vehicleId", async (req, res) => {
    try {
      const [results] = await db.execute(
        "SELECT vr.repair_date, vr.total_amount, vr.voucher_no, vr.account_no, vr.reference, vi.item, vi.details, vi.amount FROM vehicle_repair vr JOIN repair_issues vi On vr.id= vi.repair_id WHERE vr.vehicle_id = ?",
        [req.params.vehicleId]
      );
      if (results.length === 0) {
        return res.status(404).json({ message: "No Repair Voucher Found" });
      }

      const { repair_date, total_amount, voucher_no, account_no, reference } =
        results[0];
      const issue = results.map((row) => ({
        item: row.item,
        details: row.details,
        amount: row.amount,
      }));
      return res.json({
        repair_date,
        total_amount,
        voucher_no,
        account_no,
        reference,
        issue,
      });
    } catch (err) {
      return res.status(400).json({ message: "Error Occure", error: err });
    }
  });

  router.post("/addPattyVoucher", async (req, res) => {
    const data = req.body;
    const connection = await db.getConnection();
    console.log(data);
    try {
      const [PettyVoucher] = await connection.query(
        "Insert Into petty_voucher (repair_id, voucher_no, prepaid_by, approved_by,checked_by,total_paid, remarks, payment_status) VALUES (?,?,?,?,?,?,?,?)",
        [
          data.repairid,
          data.voucherNo,
          data.prepaidBy,
          data.approvedBy,
          data.checkedBy,
          data.totalPaid,
          data.remarks,
          "Unpaid",
        ]
      );
      await connection.query(
        `UPDATE vehicle_repair set repair_status = ? WHERE id = ?`,
        ["In Progress", data.repairid]
      );

      await connection.commit();
      res.status(200).json({ message: "Petty Voucher Generated" });
    } catch (err) {
      await connection.rollback();
      res.status(400).json({ message: "Error Occured", error: err });
    } finally {
      await connection.release();
    }
  });

  router.patch("/updateVehicle/:vehicleId", async (req, res) => {
    console.log("PATCH /updateVehicleStatus called");
    const vehicleId = req.params.vehicleId.trim();
    const sql = "UPDATE vehicle SET status = 'Repaired' WHERE id = ?";
    try {
      const [results] = await db.execute(sql, [vehicleId]);
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Vehicle Not Found" });
      }
      res.json({ message: "Vehicle Status updated to Repairing" });
    } catch (err) {
      console.error("ERROR Update Vehicle Status", err);
      return res.status(500).json({ message: "Server Error", error: err });
    }
  });

  router.get("/GetPettyCash", async (req, res) => {
    const connection = await db.getConnection();
    try {
      const [rows] = await connection.query(
        "SELECT pv.id, pv.repair_id,pv.payment_status ,pv.voucher_no, pv.prepaid_by, pv.checked_by, pv.approved_by, pv.issue_date, pv.total_paid,pv.remarks, vr.technician_name, vr.voucher_no, v.make, v.model, v.year, v.stock_no from vehicle AS v JOIN vehicle_repair AS vr ON v.id= vr.vehicle_id Join petty_voucher AS pv ON vr.id= pv.repair_id"
      );
      return res.json(rows);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error", error });
    }
  });
   router.get("/GetPettyCashbyShowroom/:id", async (req, res) => {
    const id = req.params.id;
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      const [rows] = await connection.query(
        "SELECT pv.id, pv.repair_id,pv.payment_status ,pv.voucher_no, pv.prepaid_by, pv.checked_by, pv.approved_by, pv.issue_date, pv.total_paid,pv.remarks, vr.technician_name, vr.voucher_no, v.make, v.model, v.year, v.stock_no from vehicle AS v JOIN vehicle_repair AS vr ON v.id= vr.vehicle_id Join petty_voucher AS pv ON vr.id= pv.repair_id Where v.showroom_id = ?" ,[id]
      );
      await connection.commit();
      return res.json(rows);
      
    } catch (error) {
      await connection.rollback();
      console.log(error);
      return res.status(400).json({ message: "Error", error });
    }
    finally{
      await connection.release();
    }
  });
  router.get("/GetPettyCash/:id", async (req, res) => {
    const connection = await db.getConnection();
    try {
      const [voucherRows] = await connection.query(
        `SELECT pv.id, pv.repair_id, pv.payment_status, pv.voucher_no, pv.prepaid_by, 
              pv.checked_by, pv.approved_by, pv.issue_date, pv.total_paid, pv.remarks, 
              vr.technician_name, vr.voucher_no AS repair_voucher_no, vr.repair_date, 
              vr.account_no, vr.reference, v.make, v.model, v.year, v.stock_no
       FROM petty_voucher AS pv 
       JOIN vehicle_repair AS vr ON vr.id = pv.repair_id 
       JOIN vehicle AS v ON v.id = vr.vehicle_id 
       WHERE pv.id = ?`,
        [req.params.id]
      );

      const [issueRows] = await connection.query(
        `SELECT item, details, amount 
       FROM repair_issues 
       WHERE repair_id = ?`,
        [voucherRows[0].repair_id]
      );

      const result = {
        ...voucherRows[0],
        issues: issueRows,
      };

      return res.json(result);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Error", error });
    } finally {
      connection.release();
    }
  });

  router.get("/GetRepairVoucher/:id", async (req, res) => {
    const connection = await db.getConnection();
    try {
      const [voucherRows] = await connection.query(
        `SELECT vr.id, vr.technician_name, vr.voucher_no AS repair_voucher_no, vr.repair_date, vr.total_amount, 
              vr.account_no, vr.reference, v.make, v.model, v.year, v.stock_no
       FROM vehicle_repair AS vr
       JOIN vehicle AS v ON v.id = vr.vehicle_id 
       WHERE vr.id = ?`,
        [req.params.id]
      );

      const [issueRows] = await connection.query(
        `SELECT item, details, amount 
       FROM repair_issues 
       WHERE repair_id = ?`,
        [voucherRows[0].id]
      );

      const result = {
        ...voucherRows[0],
        issues: issueRows,
      };

      return res.json(result);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Error", error });
    } finally {
      connection.release();
    }
  });

  router.delete("/deleteRepair/:id", async (req, res) => {
    const { id } = req.params;
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      const [repairResult] = await connection.query(
        "SELECT vehicle_id FROM vehicle_repair WHERE id = ?",
        [id]
      );
      if (repairResult.length === 0) {
        throw new Error("Repair record not found");
      }
      const vehicleId = repairResult[0].vehicle_id;
      await connection.query("UPDATE vehicle SET status = ? WHERE id = ?", [
        "Repairable",
        vehicleId,
      ]);
      await connection.query("DELETE FROM vehicle_repair WHERE id = ?", [id]);
      await connection.commit();
      res.status(200).json({ message: "Repair Deleted Successfully" });
    } catch (err) {
      await connection.rollback();
      res.status(400).json({
        message: "Error in Deleting Repair Voucher",
        error: err.message,
      });
    }
  });

  router.get("/GetRepairVoucherByVoucherId/:id", async (req, res) => {
    const connection = await db.getConnection();
    try {
      const [rows] = await connection.query(
        `Select vr.*, vr.id as voucher_id, v.* From vehicle_repair AS vr Join vehicle AS v On v.id = vr.vehicle_id where vr.id = ?`,
        [req.params.id]
      );
      const [issueRows] = await connection.query(
        `Select * From repair_issues where repair_id = ?`,
        [rows[0].voucher_id]
      );
      const result = {
        ...rows[0],
        issues: issueRows,
      };
      return res.json(result);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Error", error });
    }
  });

  router.put("/updateRepairVoucher/:id", async (req, res) => {
    const voucher_id = req.params.id;
    const data = req.body;
    let issues = [];

    if (data.issue) {
      try {
        issues =
          typeof data.issue === "string" ? JSON.parse(data.issue) : data.issue;
      } catch (error) {
        return res.status(400).json({ message: "Invalid issue format", error });
      }
    }

    const connection = await db.getConnection();

    try {
      await connection.beginTransaction();
      await connection.query(
        `update vehicle_repair SET technician_name = ?, total_amount = ?, voucher_no = ?, account_no = ?, reference = ?, time_required = ? WHERE id = ?`,
        [
          data.technician,
          data.totalexpense,
          data.vaucherNo,
          data.accountNo,
          data.refrenceNo,
          data.timeRequired,
          voucher_id,
        ]
      );

      await connection.query(`DELETE FROM repair_issues WHERE repair_id = ?`, [
        voucher_id,
      ]);

      for (issue of issues) {
        const { item, details, amount } = issue;
        await connection.query(
          `INSERT INTO repair_issues (repair_id, item, details, amount) VALUES (?, ?, ?, ?)`,
          [voucher_id, item, details, amount]
        );
      }
      await connection.commit();
      return res
        .status(200)
        .json({ message: "Repair Voucher Updated Successfully" });
    } catch (error) {
      await connection.rollback();
      return res
        .status(400)
        .json({ message: "Error updating repair voucher", error });
    }
  });
  router.delete("/deletePetty/:id", async (req, res) => {
    const { id } = req.params;
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      const [repairResult] = await connection.query(
        "SELECT vr.vehicle_id, vr.id as repairId from vehicle_repair vr join petty_voucher as pv On vr.id=pv.repair_id WHERE pv.id= ?",
        [id]
      );
      if (repairResult.length === 0) {
        throw new Error("Repair record not found");
      }
      const vehicleId = repairResult[0].vehicle_id;
      const repairid = repairResult[0].repairId;
      await connection.query("UPDATE vehicle SET status = ? WHERE id = ?", [
        "Repairing",
        vehicleId,
      ]);

      await connection.query(
        "Update vehicle_repair set repair_status = ? Where id = ?",
        ["Pending", repairid]
      );

      await connection.query("DELETE FROM petty_voucher WHERE id = ?", [id]);
      await connection.commit();
      res.status(200).json({ message: "Repair Deleted Successfully" });
    } catch (err) {
      await connection.rollback();
      res.status(400).json({
        message: "Error in Deleting Repair Voucher",
        error: err.message,
      });
    }
  });

  router.put(`/handlePay/:id`, async (req, res) => {
    const id = req.params.id;
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();

      const [petty] = await connection.query(
        "SELECT * FROM petty_voucher WHERE id = ?",
        [id]
      );
      await connection.query(
        "Update petty_voucher set payment_status=? where id = ?",
        ["Paid", id]
      );
      const [repairResult] = await connection.query(
        "SELECT vr.vehicle_id, vr.id as repairId from vehicle_repair vr join petty_voucher as pv On vr.id=pv.repair_id WHERE pv.id= ?",
        [id]
      );
      const repairId = repairResult[0].repairId;

      await connection.query(`Update vehicle_repair SET repair_Status = ? Where id = ?`,['Complete', repairId] )
      if (repairResult.length === 0) {
        throw new Error("Repair record not found");
      }
      const vehicleId = repairResult[0].vehicle_id;

      await connection.query(`Update vehicle SET status= ? WHERE id = ?`, [
        "In Stock",
        vehicleId,
      ]);
      if (petty.length === 0) throw new Error("Petty voucher not found");
      const pettyAmount = petty[0].total_paid;
      await connection.query(
        `INSERT INTO vehicleexpense (vehicle_id, type,amount, description, convertedAmount) VALUES (?,?, ?, ?, ?)`,
        [vehicleId, "Repair", pettyAmount, "Repair of vehicle", pettyAmount]
      );
      const [totalPrice] = await connection.query(
        "Select total_price_after_expense from vehicle where id=?",
        [vehicleId]
      );
      const finalPrice = pettyAmount + totalPrice[0].total_price_after_expense;

      await connection.query(
        `Update vehicle SET total_price_after_expense = ? where id =?`,
        [finalPrice, vehicleId]
      );

      await connection.commit();
      res.status(200).json({
        message:
          "Petty voucher marked as paid, vehicle status updated, expense recorded.",
      });
    } catch (error) {
      await connection.rollback();
      console.error("Error in /handlePay/:id:", error);
      res
        .status(500)
        .json({ error: "Transaction Failed", details: error.message });
    } finally {
      await connection.release();
    }
  });

  return router;
};
