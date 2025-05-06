const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure 'uploads' folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

module.exports = (db) => {
  // POST /AddGarage
  router.post('/AddGarage', upload.single('logo'), (req, res) => {
    const { name, country, company_id, currency, address } = req.body;
    const logo = req.file ? req.file.filename : null;

    const sql = `
      INSERT INTO showroom (name, country, company_id, currency, logo, address)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [name, country, company_id, currency, logo, address], (err, result) => {
      if (err) return res.status(500).json({ message: "Insert failed", error: err });
      return res.json({ message: "Garage added successfully", insertId: result.insertId });
    });
  });

  return router;
};
