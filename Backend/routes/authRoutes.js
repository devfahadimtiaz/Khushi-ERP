// routes/auth.js
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/SignIn', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
      if (err) {
        return res.json({ message: "Server error", error: err });
      }
      if (data.length > 0) {
        return res.json({ message: "Login successful", user: data[0] });
      } else {
        return res.json({ message: "Invalid email or password" });
      }
    });
  });

  return router;
};
