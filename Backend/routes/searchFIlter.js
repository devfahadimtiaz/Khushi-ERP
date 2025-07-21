module.exports = (db) => {
  const express = require("express");
  const router = express.Router();
  router.get("/inventorylist", async (req, res) => {
    try {
      const [rows] = await db.execute(`
      SELECT 
        v.*,  
        g.currency,
        (SELECT vm.url 
         FROM vehicleMedia vm 
         WHERE vm.vehicle_id = v.id AND vm.type = 'Image' 
         LIMIT 1) AS image
      FROM 
        vehicle AS v 
      JOIN 
        showroom AS g ON g.id = v.showroom_id;
    `);

      res.json(rows); // SEND RAW, skip vehicleMap
    } catch (err) {
      res.status(500).json({ message: "Server Error", error: err.message });
    }
  });

  router.get("/AllMake/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [make] = await db.query(
        "SELECT DISTINCT make FROM vehicle WHERE showroom_id = ?",
        [id]
      );
      return res.json(make);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error });
    }
  });
  router.get("/SelectedModle/:make/:showroomId", async (req, res) => {
    const {make, showroomId} = req.params;
    try {
      const [model] = await db.query(
        "SELECT DISTINCT model FROM vehicle WHERE make = ? AND showroom_id = ?",
        [make, showroomId]
      );
      return res.json(model);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });
  router.get("/SelectYear/:make/:model/:showroomId", async (req, res) => {
    const { make, model, showroomId } = req.params;
    try {
      const [year] = await db.query(
        "SELECT DISTINCT year FROM vehicle WHERE make = ? AND model = ? AND showroom_id=?",
        [make, model,showroomId]
      );
      return res.json(year);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

  return router;
};
