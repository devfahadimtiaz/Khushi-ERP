module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  router.get("/showroomLogo", async (req, res) => {
    try {
      const [showrooms] = await db.execute(`SELECT * FROM showroom`);
      return res.status(200).json(showrooms);
    } catch {
      return res.status(500).json({ message: "Error fetching showrooms" });
    }
  });

  router.get("/totalvehicles/:id", async (req, res) => {
    const id = req.params.id;
    const sql = "Select count(*) as total From vehicle Where showroom_id = ?";
    try {
      const [total] = await db.execute(sql, [id]);
      if (total.length === 0) {
        return res
          .status(404)
          .json({ message: "There is no vehicle in this showroom" });
      }
      res.json(total[0].total);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching total vehicles" });
    }
  });

  router.get("/toyota/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS toyota FROM vehicle WHERE showroom_id = ? AND (make LIKE 'toyota%' OR make LIKE 'Toyota%')`;
    try {
      const [toyota] = await db.execute(sql, [id]);
      if (toyota.length === 0) {
        return res
          .status(404)
          .json({ message: "There is no toyota in this showroom" });
      }
      res.json(toyota[0].toyota);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });
  router.get("/inTransit/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS transfered FROM vehicle WHERE showroom_id = ? AND (status LIKE 'Transferred%' OR status LIKE 'transferred%')`;
    try {
      const [transfered] = await db.execute(sql, [id]);
      if (transfered.length === 0) {
        return res
          .status(404)
          .json({ message: "There is no transfered Vehicle in this showroom" });
      }
      res.json(transfered[0].transfered);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });
  router.get("/newStock/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS newStock FROM vehicle WHERE showroom_id = ? AND created_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)`;
    try {
      const [newStock] = await db.execute(sql, [id]);
      if (newStock.length === 0) {
        return res
          .status(404)
          .json({ message: "There is no new Vehicle in this showroom" });
      }
      res.json(newStock[0].newStock);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching new stock" });
    }
  });
  router.get("/lexus/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS lexus FROM vehicle WHERE showroom_id = ? AND (make LIKE 'lexus%' OR make LIKE 'Lexus%')`;
    try {
      const [lexus] = await db.execute(sql, [id]);
      if (lexus.length === 0) {
        return res
          .status(404)
          .json({ message: "There is no lexus in this showroom" });
      }
      res.json(lexus[0].lexus);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching new stock" });
    }
  });
  router.get("/repossessed/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS repossessed FROM vehicle WHERE showroom_id = ? AND (status LIKE 'Repossesed%' OR status LIKE 'Repossesed%')`;
    try {
      const [repossessed] = await db.execute(sql, [id]);
      if (repossessed.length === 0) {
        return res.status(404).json({
          message: "There is no repossessed Vehicle in this showroom",
        });
      }
      res.json(repossessed[0].repossessed);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });
  router.get("/ford/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS ford FROM vehicle WHERE showroom_id = ? AND (make LIKE 'ford%' OR make LIKE 'Ford%')`;
    try {
      const [ford] = await db.execute(sql, [id]);
      if (ford.length === 0) {
        return res
          .status(404)
          .json({ message: "There is no Ford in this showroom" });
      }
      res.json(ford[0].ford);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });
  router.get("/regular/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS regular FROM vehicle WHERE showroom_id = ? AND (status LIKE 'In Stock%' OR status LIKE 'Transferred% OR status LIKE 'Repaired')`;
    try {
      const [regular] = await db.execute(sql, [id]);
      if (regular.length === 0) {
        return res
          .status(404)
          .json({ message: "There is no regular in this showroom" });
      }
      res.json(regular[0].regular);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });

  router.get("/honda/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) As honda From vehicle WHERE showroom_id = ? AND (make LIKE 'honda%' OR make LIKE 'Honda%')`;
    try {
      const [honda] = await db.execute(sql, [id]);
      if (honda.length === 0) {
        return res
          .status(404)
          .json({ message: "There is no Honda in this showroom" });
      }
      res.json(honda[0].honda);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });
  router.get("/upcoming/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS upcoming FROM vehicle WHERE showroom_id = ? AND status LIKE 'Transfering%'`;
    try {
      const [upcoming] = await db.execute(sql, [id]);
      if (upcoming.length === 0) {
        return res
          .status(404)
          .json({ message: "There is no upcoming Vehicle in this showroom" });
      }
      res.json(upcoming[0].upcoming);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });

  router.get("/mercedes/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS mercedes FROM vehicle WHERE showroom_id = ? AND (make LIKE 'mercedes%' OR make LIKE 'Mercedes%')`;
    try {
      const [mercedes] = await db.execute(sql, [id]);
      if (mercedes.length === 0) {
        return res
          .status(404)
          .json({ message: "There is no Mercedes in this showroom" });
      }
      res.json(mercedes[0].mercedes);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });

  //Recent Activites
  router.get("/recentActivity/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM vehicle WHERE showroom_id = ? ORDER BY updated_at DESC LIMIT 3`;
    try {
      const [recentActivity] = await db.execute(sql, [id]);
      res.json(recentActivity);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });
  router.get("/inStock/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS inStock FROM vehicle WHERE showroom_id = ? AND status LIKE 'In Stock'`;
    try {
      const [inStock] = await db.execute(sql, [id]);
      res.json(inStock[0].inStock);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });

  router.get("/showroomName/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `Select name as ShowroomName from showroom where id = ?`;
    try {
      const [ShowroomName] = await db.execute(sql, [id]);
      res.json(ShowroomName[0].ShowroomName);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });
  router.get("/sold/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS sold FROM vehicle WHERE showroom_id = ? AND status LIKE 'Sold'`;
    try {
      const [sold] = await db.execute(sql, [id]);
      res.json(sold[0].sold);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });
  router.get("/totalvalue/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT SUM(v.total_price_after_expense) as totalValue, s.currency 
             FROM vehicle as v 
             JOIN showroom as s ON v.showroom_id = s.id 
             WHERE v.showroom_id = ?`;
    try {
      const [totalValue] = await db.execute(sql, [id]);
      res.json(totalValue);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching" });
    }
  });

  //fetch distinct Make
  router.get("/distinctMake", async (req, res) => {
    const sql = `SELECT DISTINCT Make FROM vehicle;`;
    try {
      const [make] = await db.execute(sql);
      return res.status(200).json(make);
    } catch {
      return res.status(500).json({ message: "Error fetching" });
    }
  });

  router.get("/ShowroomWiseVehicle/:id", async (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM vehicle WHERE showroom_id = ?";
    try {
      const [allVehicle] = await db.execute(sql, [id]);
      res.json(allVehicle);
    } catch {
      return res.status(500).json({ message: "Error fetching" });
    }
  });

  return router;
};
