const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // 🔐 Login route
  router.post("/signIn", async (req, res) => {
    const { username, password } = req.body;
    try {
      const [rows] = await db.execute(
        "SELECT u.*, r.name as role FROM users u JOIN roles r ON u.role_id = r.id WHERE u.username=? AND u.password=?",
        [username, password]
      );
      

      if (rows.length > 0) {
        console.log(rows)
        req.session.username = rows[0].username;
        req.session.name = rows[0].name;
        req.session.role = rows[0].role;
        req.session.userId = rows[0].id; 
        req.session.email = rows[0].email;
        req.session.phone = rows[0].phone;
        req.session.showroom = rows[0].showroom_id;
        req.session.id = rows[0].id
        console.log(req.session.username, req.session.name);

        return res.json({ message: "Login Success" });
      } else {
        return res.json({ message: "Invalid username or password" });
      }
    } catch (err) {
      return res.json({ message: "Server Error", error: err.message });
    }
  });

  // 🧠 Dashboard route
  router.get("/dashboard", (req, res) => {
    if (req.session.username) {
      return res.json({
        valid: true,
        message: "Welcome to the dashboard",
        username: req.session.username,
        name: req.session.name,
        role: req.session.role,
        id: req.session.userId,
        showroom: req.session.showroom,
        email: req.session.email,
        phone: req.session.phone

      });
    } else {
      return res.json({ valid: false, message: "Please login first" });
    }
  });

  // 🚪 Logout route
  router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed", error: err });
      }
      res.clearCookie("connect.sid", {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: false, // true if you're using HTTPS
      });
      return res.json({ message: "Logout successful" });
    });
  });

  return router;
};
