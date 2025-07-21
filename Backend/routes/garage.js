const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/BranchLogo'); // Ensure 'uploads' folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

module.exports = (db) => {

  // POST /AddGarage
  router.post('/AddGarage', upload.single('logo'), async (req, res) => {
    const { name, country, currency, address, phone, email } = req.body;
    const logo = req.file ? req.file.filename : null;

    const sql = `
      INSERT INTO showroom (name, country, currency, logo, address, phone_number, email)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    try {
      const [result] = await db.query(sql, [name, country, currency, logo, address, phone, email]);
      return res.json({ message: "Garage added successfully", insertId: result.insertId });
    } catch (err) {
      return res.status(500).json({ message: "Insert failed", error: err });
    }
  });

  // GET /GarageList
  router.get('/GarageList', async (req, res) => {
    const sql = 'SELECT * FROM showroom';
    try {
      const [result] = await db.query(sql);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ message: "Error fetching garages", error: err });
    }
  });

  // PUT /garage/:id
  router.put('/garage/:id', upload.single('logo'), async (req, res) => {
    const { id } = req.params;
    const { name, country, currency, address, phone, email } = req.body;
    const logo = req.file ? req.file.filename : null;

    const sql = logo
      ? `UPDATE showroom SET name = ?, country = ?, currency = ?, address = ?, logo = ?, phone_number=?, email=? WHERE id = ?`
      : `UPDATE showroom SET name = ?, country = ?, currency = ?, address = ?, phone_number=?, email=? WHERE id = ?`;

    const values = logo
      ? [name, country, currency, address, logo, phone, email, id]
      : [name, country, currency, address, phone, email, id];

    try {
      const [result] = await db.query(sql, values);
      res.json({ message: 'Garage updated successfully' });
    } catch (err) {
      console.error("SQL Error: ", err);
      return res.status(500).json({ message: 'Update failed', error: err });
    }
  });

  // DELETE /garage/:id
  router.delete('/garage/:id', async (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM showroom WHERE id = ?`;

    try {
      const [result] = await db.query(sql, [id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Garage not found' });
      }

      res.json({ message: 'Garage deleted successfully' });
    } catch (err) {
      console.error("SQL Error: ", err);
      return res.status(500).json({ message: 'Delete failed', error: err });
    }
  });

  return router;
};
