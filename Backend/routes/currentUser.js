const express = require("express");

module.exports = (db) => {
  const router = express.Router();

  router.get("/current-user", (req, res) => {
    if (!req.session.username) {
      return res.status(401).json({ error: "Not logged in" });
    }

    res.json({
      username: req.session.username,
      name: req.session.name,
      role: req.session.role, // 🔑 role sent to frontend
    });
  });

  router.get("/authenticate", async (req, res) => {
    const { module, subModule, permission } = req.query;

    if (!req.session.username || !req.session.userId) {
      return res.json({ valid: false, message: "Please login first" });
    }

    try {
      if (module && subModule && permission) {
        const [permRows] = await db.execute(
          `SELECT can_view, can_edit, can_delete, can_all 
         FROM userspermissions 
         WHERE module = ? AND sub_module = ? AND user_id = ?`,
          [module, subModule, req.session.userId]
        );

        if (
          permRows.length === 0 ||
          !Boolean(permRows[0][`can_${permission}`])
        ) {
          return res.status(403).json({
            valid: false,
            message: `Access denied: You don't have ${permission} permission.`,
          });
        }

        return res.json({
          valid: true,
          message: "Access granted",
          username: req.session.username,
          name: req.session.name,
          permissions: permRows[0], // { can_view, can_edit, can_delete, can_all }
        });
      }

      // If no module/subModule passed, just check session
      return res.json({
        valid: true,
        message: "User authenticated",
        username: req.session.username,
        name: req.session.name,
      });
    } catch (error) {
      console.error("Error in /authenticate:", error);
      return res
        .status(500)
        .json({ valid: false, message: "Server error", error });
    }
  });

  return router;
};
