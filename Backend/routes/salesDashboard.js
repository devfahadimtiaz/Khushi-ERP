module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  router.get("/totalSales/:id", async (req, res) => {
    const id = req.params.id;
    const period = req.query.period 

    let dateFormat;
    switch (period.toLowerCase()) {
      case "yearly":
        dateFormat = "%Y"; // → "2025"
        break;
      case "weekly":
        dateFormat = "%x-W%v"; // → "2025-W01"
        break;
      case "monthly":
      default:
        dateFormat = "%Y-%m"; // → "2025-06"
        break;
    }

    try {
      const [results] = await db.query(
        `SELECT 
         DATE_FORMAT(s.sale_date, ?) AS period,
         IFNULL(SUM(csp.total_sale_price), 0) AS totalCash,
         IFNULL(SUM(cip.total), 0) AS totalCredit,
         (IFNULL(SUM(csp.total_sale_price), 0) + IFNULL(SUM(cip.total), 0)) AS totalSales
       FROM sale s
       LEFT JOIN cashsalepricing csp ON s.id = csp.sale_id
       LEFT JOIN creditinstallmentplan cip ON s.id = cip.sale_id
       JOIN vehicle v ON s.vehicle_id = v.id
       JOIN showroom sh ON v.showroom_id = sh.id
       WHERE sh.id = ?
       GROUP BY period
       ORDER BY period;`,
        [dateFormat, id]
      );

      const [currencyResult] = await db.query(
        `SELECT currency FROM showroom WHERE id = ?`,
        [id]
      );

      const currency = currencyResult[0]?.currency || "USD";

      res.json({
        currency,
        periodType: period,
        sales: results,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error in Backend", error: error.message });
    }
  });

  router.get("/getCarSold/:id", async (req, res) => {
    const id = req.params.id;
    const period = req.query.period || "monthly";

    let dateFormat;
    switch (period.toLowerCase()) {
      case "yearly":
        dateFormat = "%Y"; // → "2025"
        break;
      case "weekly":
        dateFormat = "%x-W%v"; // → "2025-W26"
        break;
      case "monthly":
      default:
        dateFormat = "%Y-%m"; // → "2025-06"
        break;
    }

    try {
      const [results] = await db.query(
        `SELECT 
         DATE_FORMAT(s.sale_date, ?) as period,
         COUNT(s.id) as unitsSale
       FROM sale s
       JOIN vehicle v ON s.vehicle_id = v.id
       JOIN showroom sh ON v.showroom_id = sh.id
       WHERE sh.id = ? 
       GROUP BY period
       ORDER BY period`,
        [dateFormat, id]
      );

      res.json({
        periodType: period,
        data: results,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error in Backend", error: error.message });
    }
  });

  router.get("/getMonthWiseSale/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [results] = await db.query(
        `SELECT 
  sr.currency,
  DATE_FORMAT(s.sale_date, '%Y-%m') AS yearMonth,
  IFNULL(SUM(csp.total_sale_price), 0) AS totalCash,
  IFNULL(SUM(cip.total), 0) AS totalCredit,
  (IFNULL(SUM(csp.total_sale_price), 0) + IFNULL(SUM(cip.total), 0)) AS totalSales
FROM sale s
LEFT JOIN cashsalepricing csp ON s.id = csp.sale_id
LEFT JOIN creditinstallmentplan cip ON s.id = cip.sale_id
JOIN vehicle v ON s.vehicle_id = v.id 
JOIN showroom sr ON v.showroom_id = sr.id
WHERE sr.id = ?
GROUP BY yearMonth
ORDER BY yearMonth;`,
        [id]
      );
      res.json(results);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error in Backend", error: error.message });
    }
  });
  router.get("/topSellingCars/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [results] = await db.query(
        `SELECT 
  v.make,
  v.model,
  COUNT(s.id) AS unitsSold
FROM sale s
JOIN vehicle v ON s.vehicle_id = v.id
JOIN showroom sh ON v.showroom_id = sh.id
WHERE sh.id = ?
GROUP BY v.make, v.model
ORDER BY unitsSold DESC
LIMIT 3;
`,
        id
      );
      res.json(results);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error in Backend", error: error.message });
    }
  });

  router.get("/getMonthlyUnitSale/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [results] = await db.query(
        `SELECT 
  DATE_FORMAT(s.sale_date, '%Y-%m') AS yearMonth,
  COUNT(s.id) AS unitsSold
FROM sale s
JOIN vehicle v ON s.vehicle_id = v.id
JOIN showroom sh ON v.showroom_id = sh.id
WHERE sh.id = ? -- optional: showroom filter
GROUP BY yearMonth
ORDER BY yearMonth;`,
        [id]
      );
      res.json(results);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error is Backend", error: error.message });
    }
  });
  return router;
};
