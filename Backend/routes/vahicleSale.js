module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  router.get("/GetSaleableVehicleSale", async (req, res) => {
    try {
      const saleableVehicleSale = await db.execute(
        `SELECT * FROM vehicle where status ='In Stock'`
      );
      res.json(saleableVehicleSale[0]);
    } catch (error) {
      res.status(400).json({ message: "Error in Backend", error });
    }
  });

  router.get("/GetSaleableVehicleSale/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const saleableVehicleSale = await db.execute(
        `SELECT * FROM vehicle where status ='In Stock' AND showroom_id=?`,[id]
      );
      res.json(saleableVehicleSale[0]);
    } catch (error) {
      res.status(400).json({ message: "Error in Backend", error });
    }
  });

  router.get("/searchVehicle/:stockNo", async (req, res) => {
    const stockNo = req.params.stockNo.trim();

    const sql =
      "SELECT * FROM vehicle WHERE LOWER(stock_no) = LOWER(?) AND status= 'In Stock'";

    try {
      const [result] = await db.execute(sql, [stockNo]);

      if (result.length === 0) {
        return res.status(404).json({ message: "Car not found" });
      }

      res.json(result[0]);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });

  router.get("/garage", async (req, res) => {
    const sql = "SELECT * FROM showroom";
    try {
      const [results] = await db.execute(sql);
      res.json(results);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });
  const generateInstallmentNumber = async (connection) => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2); // e.g. "24"
    const month = String(now.getMonth() + 1).padStart(2, "0"); // e.g. "05"
    const prefix = `Inst-${year}${month}`;

    const [rows] = await connection.execute(
      `SELECT invoice_or_installment_id FROM sale
       WHERE invoice_or_installment_id LIKE ? ORDER BY invoice_or_installment_id DESC LIMIT 1`,
      [`${prefix}-%`]
    );

    let nextNumber = "001";
    if (rows.length > 0 && rows[0].invoice_or_installment_id) {
      const lastNumber = rows[0].invoice_or_installment_id.split("-")[2]; // e.g., "003"
      nextNumber = String(parseInt(lastNumber) + 1).padStart(3, "0"); // "004"
    }

    return `${prefix}-${nextNumber}`;
  };

  router.post("/saledeed", async (req, res) => {
    const data = req.body;
    const connection = await db.getConnection();
    try {
      const installmentNumber = await generateInstallmentNumber(connection);
      await connection.beginTransaction();
      const [saleResults] = await connection.query(
        "INSERT INTO sale (sale_type, vehicle_id, paymentMethod, sale_date, status,customer_type, invoice_or_installment_id, gatepass_status) VALUES (?, ?, ?,? , ?, ?,?,? )",
        [
          data.salesType,
          data.vehicleId,
          data.paymentMethod,
          data.saleDate,
          "Pending",
          data.customerCategory,
          installmentNumber,
          "false",
        ]
      );
      const salesId = saleResults.insertId;
      await connection.query(
        "INSERT INTO cashsalebuyer (sale_id,first_name,middle_name,last_name,gender,national_id_or_passport, kra_pin,occupation,state, street_number, city, zip_code,po_box,business_address,email, social_media,contact_number, residence_contact_number, photo) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          salesId,
          data.firstName,
          data.middleName,
          data.lastName,
          data.gender,
          data.nationalId,
          data.kraPinNumber,
          data.occupation,
          data.state,
          data.streetNumber,
          data.city,
          data.zipCode,
          data.poBox,
          data.businessAddress,
          data.emailBuyer,
          data.socialMedia,
          data.contactNumberBuyer,
          data.residenceContactNumber,
          data.capturedImage,
        ]
      );

      await connection.query(
        "INSERT INTO nominee (sale_id,first_name,middle_name, last_name, gender, national_id_or_passport, kra_pin,  relationship, state,street_number, city, zip_code, po_box, second_contact_number, email, social_media, contact_number, residence_contact_number  ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          salesId,
          data.nomineeFirstName,
          data.nomineeMiddleName,
          data.nomineeLastName,
          data.nomineeGender,
          data.nomineeNationalId,
          data.nomineeKraPinNumber,
          data.nomineeRelationship,
          data.nomineeState,
          data.nomineeStreetAddress,
          data.nomineeCity,
          data.nomineeZipCode,
          data.nomineePOBox,
          data.nomineeSecondContactNumber,
          data.nomineeEmailAddress,
          data.nomineeSocialMediaAccounts,
          data.nomineeContactNumber,
          data.nomineeResidenceContactNo,
        ]
      );
      await connection.query(
        "INSERT INTO guarantor (sale_id, first_name, last_name, national_id_or_passport, middle_name, state, street_number, city, zip_code, po_box, email, social_media, gender ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          salesId,
          data.guarantorFirstName,
          data.guarantorLastName,
          data.guarantorNationalId,
          data.guarantorMiddleName,
          data.guarantorState,
          data.guarantorStreetAddress,
          data.guarantorCity,
          data.guarantorZipCode,
          data.guarantorPOBox,
          data.guarantorEmailAddress,
          data.guarantorSocialMediaAccounts,
          data.guarantorGender,
        ]
      );

      await connection.query(
        "INSERT INTO cashsalepricing (sale_id, vehicle_price, commitment_amount, pending_payment, commission, tracker_price,insurance_price, total_sale_price ) VALUES (?,?,?,?,?,?,?,?)",
        [
          salesId,
          data.price,
          data.commitment,
          data.pendingPayment,
          data.commission,
          data.tracker,
          data.insurance,
          data.totalPrice,
        ]
      );

      await connection.commit();
      res.status(200).json({ message: "Sale deed recorded successfully" });
    } catch (error) {
      await connection.rollback();
      console.error("Transaction error:", error);
      res
        .status(500)
        .json({ error: "Transaction failed", details: error.message });
    } finally {
      connection.release();
    }
  });

  router.post("/creditSaleDeed", async (req, res) => {
    const data = req.body;
    const connection = await db.getConnection();
    try {
      const installmentNumber = await generateInstallmentNumber(connection);
      await connection.beginTransaction();
      const [saleResults] = await connection.query(
        "INSERT INTO sale (sale_type, vehicle_id, paymentMethod, sale_date, status,customer_type, invoice_or_installment_id, gatepass_status) VALUES (?, ?, ?,? , ?, ?,?,? )",
        [
          data.salesType,
          data.vehicleId,
          data.paymentMethod,
          data.saleDate,
          "Pending",
          data.customerCategory,
          installmentNumber,
          "false",
        ]
      );
      const salesId = saleResults.insertId;
      await connection.query(
        "INSERT INTO cashsalebuyer (sale_id,first_name,middle_name,last_name,gender,national_id_or_passport, kra_pin,occupation,state, street_number, city, zip_code,po_box,business_address,email, social_media,contact_number, residence_contact_number ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          salesId,
          data.firstName,
          data.middleName,
          data.lastName,
          data.gender,
          data.nationalId,
          data.kraPinNumber,
          data.occupation,
          data.state,
          data.streetNumber,
          data.city,
          data.zipCode,
          data.poBox,
          data.businessAddress,
          data.emailBuyer,
          data.socialMedia,
          data.contactNumberBuyer,
          data.residenceContactNumber,
        ]
      );

      await connection.query(
        "INSERT INTO nominee (sale_id,first_name,middle_name, last_name, gender, national_id_or_passport, kra_pin,  relationship, state,street_number, city, zip_code, po_box, second_contact_number, email, social_media, contact_number, residence_contact_number  ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          salesId,
          data.nomineeFirstName,
          data.nomineeMiddleName,
          data.nomineeLastName,
          data.nomineeGender,
          data.nomineeNationalId,
          data.nomineeKraPinNumber,
          data.nomineeRelationship,
          data.nomineeState,
          data.nomineeStreetAddress,
          data.nomineeCity,
          data.nomineeZipCode,
          data.nomineePOBox,
          data.nomineeSecondContactNumber,
          data.nomineeEmailAddress,
          data.nomineeSocialMediaAccounts,
          data.nomineeContactNumber,
          data.nomineeResidenceContactNo,
        ]
      );
      await connection.query(
        "INSERT INTO guarantor (sale_id, first_name, last_name, national_id_or_passport, middle_name, state, street_number, city, zip_code, po_box, email, social_media, gender ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          salesId,
          data.guarantorFirstName,
          data.guarantorLastName,
          data.guarantorNationalId,
          data.guarantorMiddleName,
          data.guarantorState,
          data.guarantorStreetAddress,
          data.guarantorCity,
          data.guarantorZipCode,
          data.guarantorPOBox,
          data.guarantorEmailAddress,
          data.guarantorSocialMediaAccounts,
          data.guarantorGender,
        ]
      );

      const [installmentResults] = await connection.query(
        "INSERT INTO creditinstallmentplan (sale_id , tenure,total_price, down_payment, pending_payment, insurance_total,insurance_down_payment, insurance_pending, tracker_total, broker_commission, grace_period, total, total_initial_deposit) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          salesId,
          data.tenure,
          data.price,
          data.vehicleDownPayment,
          data.vehiclePendingPayment,
          data.vehicleInsurance,
          data.vehicleDownInsurance,
          data.vehiclePendingInsurance,
          data.vehicleTracker,
          data.brokerCommission,
          data.gracePeriod,
          data.totalInstallmentPrice,
          data.totalInitialDeposit,
        ]
      );
      const installmentDetailsId = installmentResults.insertId;
      for (const installment of data.installments) {
        await connection.query(
          "INSERT INTO installmentdetails (plan_id, sr_no, installment_no, due_date, vehicle_amount, insurance_amount, total) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [
            installmentDetailsId,
            installment.srNo,
            installment.installmentNo,
            installment.dueDate,
            installment.motorVehicleAmount,
            installment.insuranceAmount,
            installment.total,
          ]
        );
      }

      await connection.commit();
      res
        .status(200)
        .json({ message: " Credit Sale deed recorded successfully" });
    } catch (error) {
      await connection.rollback();
      console.error("Transaction error:", error);
      res
        .status(500)
        .json({ error: "Transaction failed", details: error.message });
    } finally {
      connection.release();
    }
  });

  router.get("/salelist", async (req, res) => {
    const sql =
      "SELECT s.id AS sale_id, s.*,s.status as salesStatus,s.vehicle_id, v.*, scp.total_sale_price FROM sale AS s JOIN vehicle AS v ON v.id = s.vehicle_id Join cashsalepricing as scp ON s.id=scp.sale_id  WHERE s.sale_type = 'Cash'";
    const [result] = await db.execute(sql);

    if (result.length === 0) {
      return res.status(404).json({ message: "Saledeed not found" });
    }

    res.json(result);
  });
    router.get("/salelist/:id", async (req, res) => {
      const id = req.params.id;
    const sql =
      "SELECT s.id AS sale_id, s.*,s.status as salesStatus,s.vehicle_id, v.*, scp.total_sale_price FROM sale AS s JOIN vehicle AS v ON v.id = s.vehicle_id Join cashsalepricing as scp ON s.id=scp.sale_id  WHERE s.sale_type = 'Cash' AND v.showroom_id=?";
    const [result] = await db.execute(sql, [id]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Saledeed not found" });
    }

    res.json(result);
  });
  router.get("/creditsalelist", async (req, res) => {
    const sql =
       "SELECT s.id AS sale_id, s.*,s.status as salesStatus,s.vehicle_id, v.*, scp.total FROM sale AS s JOIN vehicle AS v ON v.id = s.vehicle_id Join creditinstallmentplan as scp ON s.id=scp.sale_id  WHERE s.sale_type = 'Credit'";;
    const [result] = await db.execute(sql);

    if (result.length === 0) {
      return res.status(404).json({ message: "Saledeed not found" });
    }

    res.json(result);
  });

  router.get("/creditsalelist/:id", async (req, res) => {
    const id = req.params.id;
    const sql =
       "SELECT s.id AS sale_id, s.*,s.status as salesStatus,s.vehicle_id, v.*, scp.total FROM sale AS s JOIN vehicle AS v ON v.id = s.vehicle_id Join creditinstallmentplan as scp ON s.id=scp.sale_id  WHERE s.sale_type = 'Credit' AND v.showroom_id=?";;
    const [result] = await db.execute(sql,[id]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Saledeed not found" });
    }

    res.json(result);
  });


  router.patch("/updateVehicleStatus/:stockNo", async (req, res) => {
    const stockNo = req.params.stockNo.trim();
    const sql = "Update vehicle SET status= ? WHERE stock_no= ?";

    try {
      const [results] = await db.execute(sql, ["Committed", stockNo]); // Must be an array
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      res.json({ message: "Vehicle status updated successfully" });
    } catch (err) {
      console.error("Error updating vehicle status:", err); // 🔍 log to server
      return res.status(500).json({ error: err.message });
    }
  });
  router.patch("/updateVehicleStatusonDelete/:id", async (req, res) => {
    const id = req.params.id.trim();
    const sql = "Update vehicle SET status= ? WHERE id= ?";

    try {
      const [results] = await db.execute(sql, ["In Stock", id]); // Must be an array
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      res.json({ message: "Vehicle status updated successfully" });
    } catch (err) {
      console.error("Error updating vehicle status:", err); // 🔍 log to server
      return res.status(500).json({ error: err.message });
    }
  });

  router.get("/GetCashSaleById/:id", async (req, res) => {
    const connection = await db.getConnection();
    try {
      const [sales] = await connection.query(
        "Select s.id AS sale_id, s.*, v.*, g.* FROM sale AS s JOIN vehicle AS v ON v.id=s.vehicle_id join showroom AS g ON g.id=v.showroom_id Where s.id = ?",
        [req.params.id]
      );
      if (sales.length === 0) {
        return res.status(404).json({ message: "Sale not found" });
      }

      const [buyer] = await connection.query(
        "Select * FROM cashsalebuyer where sale_id = ?",
        [sales[0].sale_id]
      );
      const [nominee] = await connection.query(
        "Select * FROM nominee where sale_id = ?",
        [sales[0].sale_id]
      );
      const [guarantor] = await connection.query(
        "Select * FROM guarantor where sale_id = ?",
        [sales[0].sale_id]
      );
      const [pricing] = await connection.query(
        "Select * FROM cashsalepricing where sale_id = ?",
        [sales[0].sale_id]
      );

      const results = {
        ...sales[0],
        buyer,
        nominee,
        guarantor,
        pricing,
      };
      res.json(results);
    } catch (err) {
      console.error("Error fetching vehicle by ID:", err); // 🔍 log to server
      return res.status(500).json({ error: err.message });
    }
  });

  router.delete("/deleteSale/:id", async (req, res) => {
    const saleId = req.params.id;

    try {
      // Get the vehicle_id first
      const [saleRows] = await db.query(
        "SELECT vehicle_id FROM sale WHERE id = ?",
        [saleId]
      );

      if (saleRows.length === 0) {
        return res.status(404).json({ message: "Sale not found" });
      }

      const vehicleId = saleRows[0].vehicle_id;

      // Delete the sale
      const [deleteResult] = await db.query("DELETE FROM sale WHERE id = ?", [
        saleId,
      ]);

      if (deleteResult.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "Sale not found during deletion" });
      }

      // Update vehicle status to 'In Stock'
      const [updateResult] = await db.query(
        "UPDATE vehicle SET status = 'In Stock' WHERE id = ?",
        [vehicleId]
      );

      if (updateResult.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "Vehicle not found during status update" });
      }

      res.json({
        message: "Sale deleted and vehicle status updated to 'In Stock'",
      });
    } catch (err) {
      console.error("Error deleting sale:", err);
      return res.status(500).json({ error: err.message });
    }
  });

  router.patch("/editCashSale/:id", async (req, res) => {
    const saleId = req.params.id;
    const data = req.body;

    const connection = await db.getConnection();

    try {
      await connection.beginTransaction();

      await connection.query(
        "UPDATE sale SET sale_type = ?, paymentMethod = ?, sale_date = ?, status = ?, invoice_or_installment_id = ? WHERE id = ?",
        [
          data.salesType,
          data.paymentMethod,
          data.saleDate,
          data.status,
          data.invoiceId,
          saleId,
        ]
      );

      await connection.query(
        "UPDATE cashsalebuyer SET first_name = ?, middle_name = ?, last_name = ?, gender = ?, national_id_or_passport = ?, kra_pin = ?, occupation = ?, state = ?, street_number = ?, city = ?, zip_code = ?, po_box = ?, business_address = ?, email = ?, social_media = ?, contact_number = ?, residence_contact_number = ?, photo = ? WHERE sale_id = ?",
        [
          data.firstName,
          data.middleName,
          data.lastName,
          data.gender,
          data.nationalId,
          data.kraPinNumber,
          data.occupation,
          data.state,
          data.streetNumber,
          data.city,
          data.zipCode,
          data.poBox,
          data.businessAddress,
          data.emailBuyer,
          data.socialMedia,
          data.contactNumberBuyer,
          data.residenceContactNumber,
          data.capturedImage,
          saleId,
        ]
      );

      await connection.query(
        "UPDATE nominee SET first_name = ?, middle_name = ?, last_name = ?, gender = ?, national_id_or_passport = ?, kra_pin = ?, relationship = ?, state = ?, street_number = ?, city = ?, zip_code = ?, po_box = ?, second_contact_number = ?, email = ?, social_media = ?, contact_number = ?, residence_contact_number = ? WHERE sale_id = ?",
        [
          data.nomineeFirstName,
          data.nomineeMiddleName,
          data.nomineeLastName,
          data.nomineeGender,
          data.nomineeNationalId,
          data.nomineeKraPinNumber,
          data.nomineeRelationship,
          data.nomineeState,
          data.nomineeStreetAddress,
          data.nomineeCity,
          data.nomineeZipCode,
          data.nomineePOBox,
          data.nomineeSecondContactNumber,
          data.nomineeEmailAddress,
          data.nomineeSocialMediaAccounts,
          data.nomineeContactNumber,
          data.nomineeResidenceContactNo,
          saleId,
        ]
      );

      await connection.query(
        "UPDATE guarantor SET first_name = ?, last_name = ?, national_id_or_passport = ?, middle_name = ?, state = ?, street_number = ?, city = ?, zip_code = ?, po_box = ?, email = ?, social_media = ?, gender = ? WHERE sale_id = ?",
        [
          data.guarantorFirstName,
          data.guarantorLastName,
          data.guarantorNationalId,
          data.guarantorMiddleName,
          data.guarantorState,
          data.guarantorStreetAddress,
          data.guarantorCity,
          data.guarantorZipCode,
          data.guarantorPOBox,
          data.guarantorEmailAddress,
          data.guarantorSocialMediaAccounts,
          data.guarantorGender,
          saleId,
        ]
      );

      await connection.query(
        "UPDATE cashsalepricing SET vehicle_price = ?, commitment_amount = ?, pending_payment = ?, commission = ?, tracker_price = ?, insurance_price = ?, total_sale_price = ? WHERE sale_id = ?",
        [
          data.price,
          data.commitment,
          data.pendingPayment,
          data.commission,
          data.tracker,
          data.insurance,
          data.totalPrice,
          saleId,
        ]
      );

      await connection.commit();
      res.status(200).json({ message: "Cash Sale updated successfully" });
    } catch (error) {
      await connection.rollback();
      console.error("Edit sale error:", error);
      res
        .status(500)
        .json({ error: "Failed to update sale", details: error.message });
    } finally {
      connection.release();
    }
  });

  router.get("/GetCreditSaleById/:id", async (req, res) => {
    const connection = await db.getConnection();
    try {
      const [sales] = await connection.query(
        "Select s.id AS sale_id, s.*, v.*, g.* FROM sale AS s JOIN vehicle AS v ON v.id=s.vehicle_id join showroom AS g ON g.id=v.showroom_id Where s.id = ?",
        [req.params.id]
      );
      if (sales.length === 0) {
        return res.status(404).json({ message: "Sale not found" });
      }
   
      const [buyer] = await connection.query(
        "Select * FROM cashsalebuyer where sale_id = ?",
        [sales[0].sale_id]
      );
      const [nominee] = await connection.query(
        "Select * FROM nominee where sale_id = ?",
        [sales[0].sale_id]
      );
      const [guarantor] = await connection.query(
        "Select * FROM guarantor where sale_id = ?",
        [sales[0].sale_id]
      );
      const [installmentPlan] = await connection.query(
        "SELECT * FROM creditinstallmentplan WHERE sale_id = ?",
        [sales[0].sale_id]
      );
      const [installmentDetails] = await connection.query(
        "SELECT * FROM installmentdetails WHERE plan_id = ?",
        [installmentPlan[0].id]
      );
      const [BankDetails] = await connection.query(
        "Select * from bankdetails Where showroom_id=?",
        [sales[0].showroom_id]
      );

      const results = {
        ...sales[0],
        buyer,
        nominee,
        guarantor,
        installmentPlan,
        installmentDetails,
        BankDetails,
      };
      res.json(results);
    } catch (err) {
      console.error("Error fetching vehicle by ID:", err); // 🔍 log to server
      return res.status(500).json({ error: err.message });
    }
  });

  router.patch("/editCreditSale/:id", async (req, res) => {
    const saleId = req.params.id;
    const data = req.body;

    const connection = await db.getConnection();

    try {
      await connection.beginTransaction();

      await connection.query(
        "UPDATE sale SET sale_type = ?, paymentMethod = ?, sale_date = ?, status = ?, invoice_or_installment_id = ? WHERE id = ?",
        [
          data.salesType,
          data.paymentMethod,
          data.saleDate,
          data.status,
          data.invoiceId,
          saleId,
        ]
      );

      await connection.query(
        "UPDATE cashsalebuyer SET first_name = ?, middle_name = ?, last_name = ?, gender = ?, national_id_or_passport = ?, kra_pin = ?, occupation = ?, state = ?, street_number = ?, city = ?, zip_code = ?, po_box = ?, business_address = ?, email = ?, social_media = ?, contact_number = ?, residence_contact_number = ?, photo = ? WHERE sale_id = ?",
        [
          data.firstName,
          data.middleName,
          data.lastName,
          data.gender,
          data.nationalId,
          data.kraPinNumber,
          data.occupation,
          data.state,
          data.streetNumber,
          data.city,
          data.zipCode,
          data.poBox,
          data.businessAddress,
          data.emailBuyer,
          data.socialMedia,
          data.contactNumberBuyer,
          data.residenceContactNumber,
          data.capturedImage,
          saleId,
        ]
      );

      await connection.query(
        "UPDATE nominee SET first_name = ?, middle_name = ?, last_name = ?, gender = ?, national_id_or_passport = ?, kra_pin = ?, relationship = ?, state = ?, street_number = ?, city = ?, zip_code = ?, po_box = ?, second_contact_number = ?, email = ?, social_media = ?, contact_number = ?, residence_contact_number = ? WHERE sale_id = ?",
        [
          data.nomineeFirstName,
          data.nomineeMiddleName,
          data.nomineeLastName,
          data.nomineeGender,
          data.nomineeNationalId,
          data.nomineeKraPinNumber,
          data.nomineeRelationship,
          data.nomineeState,
          data.nomineeStreetAddress,
          data.nomineeCity,
          data.nomineeZipCode,
          data.nomineePOBox,
          data.nomineeSecondContactNumber,
          data.nomineeEmailAddress,
          data.nomineeSocialMediaAccounts,
          data.nomineeContactNumber,
          data.nomineeResidenceContactNo,
          saleId,
        ]
      );

      await connection.query(
        "UPDATE guarantor SET first_name = ?, last_name = ?, national_id_or_passport = ?, middle_name = ?, state = ?, street_number = ?, city = ?, zip_code = ?, po_box = ?, email = ?, social_media = ?, gender = ? WHERE sale_id = ?",
        [
          data.guarantorFirstName,
          data.guarantorLastName,
          data.guarantorNationalId,
          data.guarantorMiddleName,
          data.guarantorState,
          data.guarantorStreetAddress,
          data.guarantorCity,
          data.guarantorZipCode,
          data.guarantorPOBox,
          data.guarantorEmailAddress,
          data.guarantorSocialMediaAccounts,
          data.guarantorGender,
          saleId,
        ]
      );

      await connection.query(
        "UPDATE creditinstallmentplan SET tenure = ?, down_payment = ?, pending_payment = ?, insurance_total = ?, 	insurance_down_payment = ?, insurance_pending=?,total_initial_deposit=?, tracker_total=?, broker_commission=?, grace_period=?, total=?    WHERE sale_id = ?",
        [
          data.tenure,
          data.vehicleDownPayment,
          data.vehiclePendingPayment,
          data.vehicleInsurance,
          data.vehicleDownInsurance,
          data.vehiclePendingInsurance,
          data.totalInitialDeposit,
          data.vehicleTracker,
          data.brokerCommission,
          data.gracePeriod,
          data.totalInstallmentPrice,
          saleId,
        ]
      );

      await connection.commit();
      res.status(200).json({ message: "Credit Sale updated successfully" });
    } catch (error) {
      await connection.rollback();
      console.error("Edit sale error:", error);
      res
        .status(500)
        .json({ error: "Failed to update sale", details: error.message });
    } finally {
      connection.release();
    }
  });

  router.get(`/payCashSale/:id`, async (req, res) => {
    const id = req.params.id;
    try {
      // Get the vehicle_id first
      const [saleRows] = await db.query(
        "SELECT vehicle_id FROM sale WHERE id = ?",
        [id]
      );

      if (saleRows.length === 0) {
        return res.status(404).json({ message: "Sale not found" });
      }

      const vehicleId = saleRows[0].vehicle_id;

      // Update Sale Status
      const results = await db.query(
        "Update sale SET status = ? WHERE id = ?",
        ["Complete", id]
      );
      if (results.effectedRows === 0) {
        return res.status(404).json({ message: "Sale not found" });
      }

      //Update Vehicle status
      const [updateResult] = await db.query(
        "UPDATE vehicle SET status = 'Sold' WHERE id = ?",
        [vehicleId]
      );

      if (updateResult.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "Vehicle not found during status update" });
      }
      res.status(200).json({ message: "Sale paid successfully" });
    } catch (error) {
      res.status(400).json({ message: error });
      console.error("Error updating sale status:", error);
    }
  });

  return router;
};
