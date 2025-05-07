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
    const { name, country,  currency, address } = req.body;
    const logo = req.file ? req.file.filename : null;

    const sql = `
      INSERT INTO showroom (name, country, currency, logo, address)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [name, country, currency, logo, address], (err, result) => {
      if (err) return res.status(500).json({ message: "Insert failed", error: err });
      return res.json({ message: "Garage added successfully", insertId: result.insertId });
    });
  });
  router.get('/GarageList', (req,res)=>{
  const sql ='SELECT * FROM showroom';
  db.query(sql,(err,result)=>{
    if(err) return res.status(500).json({message:"Error fetching garages",error:err});
    return res.json(result);
  })
})

// PUT /garage/:id (edit with or without new logo)
// Add 'upload.single' middleware for logo upload
router.put('/garage/:id', upload.single('logo'), (req, res) => {
  const { id } = req.params;
  const { name, country, currency, address } = req.body;
  const logo = req.file ? req.file.filename : null;

  // If a new logo is uploaded, include it in the update
  const sql = logo
    ? `UPDATE showroom SET name = ?, country = ?,  currency = ?, address = ?, logo = ? WHERE id = ?`
    : `UPDATE showroom SET name = ?, country = ?,  currency = ?, address = ? WHERE id = ?`;

  const values = logo
    ? [name, country, currency, address, logo, id]
    : [name, country,  currency, address, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("SQL Error: ", err);
      return res.status(500).json({ message: 'Update failed', error: err });
    }
    res.json({ message: 'Garage updated successfully' });
  });
});

// DELETE /garage/:id (delete a garage by id)
router.delete('/garage/:id', (req, res) => {
  const { id } = req.params;

  // Delete the showroom with the given id
  const sql = `DELETE FROM showroom WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("SQL Error: ", err);
      return res.status(500).json({ message: 'Delete failed', error: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Garage not found' });
    }

    res.json({ message: 'Garage deleted successfully' });
  });
});




  return router;
};
