const express = require('express');
const router = express.Router();

module.exports = (db) => {

    // ✅ Middleware to parse JSON body

    // ✅ OR if you're using the router in a separate file like `inventoryRouter.js`, apply express.json() in your main `app.js` file:
    // app.use(express.json());

    router.get('/GarageName', (req, res) => {
        const sql = 'SELECT id, name FROM showroom';
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            return res.json(results); // ✅ should be a plain array like [{id: 1, name: "Garage A"}]
        });
    });

    router.post('/addInventory', (req, res) => {
        console.log("Received Data:", req.body); // 🐛 Should log actual object, not undefined

        const data = req.body;
        if (!data) {
            return res.status(400).json({ message: 'Missing body data' });
        }

        const sql = `INSERT INTO vehicle (
            showroom_id, attribute_type, stock_no, make, model, year, variant, mileage, vin_no, engine,
            interior, body_type, exterior_color, fuel_type, transmission, drive_type, doors, seats,
            model_code, auction_grade, registration_no, dimension_m3, steering, ground_clearance
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            data.garageName,
            data.attributeType,
            data.stock,
            data.make,
            data.model,
            data.yom,
            data.variant,
            data.mileage,
            data.vinNo,
            data.engine,
            data.interiorColor,
            data.bodyType,
            data.exteriorColor,
            data.fuelType,
            data.transmission,
            data.driveType,
            data.doors,
            data.seats,
            data.modelCode,
            data.auctionGrade,
            data.registrationNo,
            data.dimensionM3,
            data.steering,
            data.groundClearance
        ];

        db.query(sql, values, (err, result) => {
            if (err) return res.status(500).json({ message: "Insert failed", error: err });
            return res.json({ message: "Insert successful", insertId: result.insertId });
        });
    });

    return router;
};
