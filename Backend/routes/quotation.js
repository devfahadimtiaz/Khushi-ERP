module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  const groupVehicles = (rows) => {
    const vehicles = {};

    for (const row of rows) {
      const id = row.id;
      if (!vehicles[id]) {
        vehicles[id] = {
          id,
          make: row.make,
          model: row.model,
          year: row.year,
          engine: row.engine,
          exterior_color: row.exterior_color,
          transmission: row.transmission,
          mileage: row.mileage,
          interior: row.interior,
          seats: row.seats,
          images: [],
          expenses: [],
        };
      }

      // Add image if present and not duplicate
      if (row.media_url && !vehicles[id].images.includes(row.media_url)) {
        vehicles[id].images.push(row.media_url);
      }

      // Add expense if present
      if (row.expense_type && row.expense_amount) {
        vehicles[id].expenses.push({
          type: row.expense_type,
          amount: row.expense_amount,
        });
      }
    }

    return Object.values(vehicles);
  };

  router.get("/fetchVehicles", async (req, res) => {
    try {
      const sql = `
        SELECT 
          v.id, v.make, v.model, v.year, v.engine, 
          v.exterior_color, v.transmission, v.mileage, 
          v.interior, v.seats,
          ve.type AS expense_type, ve.amount AS expense_amount,
          vm.url AS media_url
        FROM vehicle v
        LEFT JOIN vehicleexpense ve ON v.id = ve.vehicle_id
        LEFT JOIN vehiclemedia vm ON v.id = vm.vehicle_id AND vm.type = 'image'
        ORDER BY v.id
      `;

      const [rows] = await db.query(sql);
      const data = groupVehicles(rows);
      res.json(data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
};
