module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  router.post("/addRole", async (req, res) => {
    let { roleName, description, permissions } = req.body;

    // Handle case where permissions might be a stringified array
    if (typeof permissions === "string") {
      try {
        permissions = JSON.parse(permissions.replace(/'/g, '"'));
      } catch (e) {
        return res.status(400).json({ message: "Invalid permissions format" });
      }
    }

    if (!Array.isArray(permissions)) {
      return res.status(400).json({ message: "Permissions must be an array" });
    }

    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();

      const [results] = await connection.query(
        "INSERT INTO roles (name, description) VALUES (?, ?)",
        [roleName, description]
      );

      const roleId = results.insertId;

      for (const permissionName of permissions) {
        const [permResults] = await connection.query(
          "SELECT id FROM permissions WHERE name = ?",
          [permissionName]
        );

        if (permResults.length === 0) {
          throw new Error(`Permission '${permissionName}' not found`);
        }

        const permissionId = permResults[0].id;

        await connection.query(
          "INSERT INTO role_permissions (role_id, permission_id) VALUES (?, ?)",
          [roleId, permissionId]
        );
      }

      await connection.commit();
      res.status(200).json({ message: "Role Added" });
    } catch (error) {
      await connection.rollback();
      console.log(error);
      res
        .status(400)
        .json({ message: "Error in backend", error: error.message });
    } finally {
      connection.release();
    }
  });

  router.get("/getRoles", async (req, res) => {
    try {
      const [results] = await db.execute("SELECT * FROM roles");
      res.json(results);
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({ message: "Error os backend", error: error.message });
    }
  });
  router.get("/getSelectedRole/:id", async (req, res) => {
    try {
      const id = req.params.id;

      const [roleResults] = await db.execute(
        "SELECT * FROM roles WHERE id = ?",
        [id]
      );

      if (roleResults.length === 0) {
        return res.status(404).json({ message: "Role not found" });
      }

      // Get all permission IDs linked to the role
      const [rolePermissions] = await db.execute(
        "SELECT permission_id FROM role_permissions WHERE role_id = ?",
        [id]
      );

      // Extract permission IDs
      const permissionIds = rolePermissions.map((perm) => perm.permission_id);

      let permissionNames = [];

      if (permissionIds.length > 0) {
        const [permResults] = await db.execute(
          `SELECT name FROM permissions WHERE id IN (${permissionIds
            .map(() => "?")
            .join(",")})`,
          permissionIds
        );
        permissionNames = permResults.map((p) => p.name);
      }

      res.json({
        role: roleResults[0],
        permissions: permissionNames,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Error in Backend",
        error: error.message,
      });
    }
  });

  router.put("/UpdateRole/:id", async (req, res) => {
    const id = req.params.id;
    const { roleName, description, permissions } = req.body;

    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();

      // Update the role's basic info
      await connection.execute(
        `UPDATE roles SET name = ?, description = ? WHERE id = ?`,
        [roleName, description, id]
      );

      // Remove old permissions
      await connection.execute(
        "DELETE FROM role_permissions WHERE role_id = ?",
        [id]
      );

      // Add new permissions (resolve name to ID)
      for (const permissionName of permissions) {
        const [permResult] = await connection.execute(
          "SELECT id FROM permissions WHERE name = ?",
          [permissionName]
        );

        if (permResult.length > 0) {
          const permissionId = permResult[0].id;
          await connection.execute(
            "INSERT INTO role_permissions (role_id, permission_id) VALUES (?, ?)",
            [id, permissionId]
          );
        }
      }

      await connection.commit();
      res.status(200).json({ message: "Role updated successfully" });
    } catch (error) {
      await connection.rollback();
      console.error(error);
      res.status(400).json({
        message: "Error in Backend",
        error: error.message,
      });
    } finally {
      connection.release();
    }
  });

  router.delete("/deleteRole/:id", async (req, res) => {
    const id = req.params.id;
    const connection = await db.getConnection();

    try {
      await connection.beginTransaction();

      // Delete associated permissions first (if foreign key constraints apply)
      await connection.execute(
        "DELETE FROM role_permissions WHERE role_id = ?",
        [id]
      );

      // Then delete the role itself
      await connection.execute("DELETE FROM roles WHERE id = ?", [id]);

      await connection.commit();
      res.status(200).json({ message: "Role deleted successfully" });
    } catch (error) {
      await connection.rollback();
      console.error(error);
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
    } finally {
      await connection.release();
    }
  });

  router.post("/AddUser", async (req, res) => {
    const {
      firstName,
      username,
      email,
      password,
      phone,
      role,
      status,
      showroom,
    } = req.body;

    const connection = await db.getConnection();

    try {
      await connection.beginTransaction();

      await connection.execute(
        "INSERT INTO users (name, username, email, password, phone, status, role_id, showroom_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [firstName, username, email, password, phone, status, role, showroom]
      );

      await connection.commit();
      res.status(200).json({ message: "User added successfully" }); // ✅ Add this
    } catch (error) {
      await connection.rollback();
      console.error(error);
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
    } finally {
      await connection.release();
    }
  });

  router.get("/GetUsers", async (req, res) => {
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      const result = await connection.execute(
        "SELECT u.*, r.name as role_name, s.name as showroom_name FROM users u JOIN roles r ON u.role_id = r.id JOIN showroom s On u.showroom_id = s.id Where u.is_deleted= 0"
      );
      res.json(result[0]);

      await connection.commit();
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
      await connection.rollback();
    } finally {
      await connection.release();
    }
  });
  router.get("/GetUser/:id", async (req, res) => {
    const id = req.params.id;
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      const result = await connection.execute(
        "SELECT u.*, r.name as role_name, s.name as showroom_name FROM users u JOIN roles r ON u.role_id = r.id JOIN showroom s On u.showroom_id = s.id Where u.id = ?",[id]
      );
      res.json(result[0]);

      await connection.commit();
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json({ message: "Error in Backend", error: error.message });
      await connection.rollback();
    } finally {
      await connection.release();
    }
  });
  router.put("/deleteUser/:id", async (req, res) => {
    const id = req.params.id;
    const connection = await db.getConnection();

    try {
      await connection.beginTransaction();

      const [result] = await connection.execute(
        "UPDATE users SET is_deleted= true, status = 'In Active' WHERE id = ?",
        [id]
      );

      await connection.commit();

      res.status(200).json({
        message: "User deleted successfully",
        affectedRows: result.affectedRows,
      });
    } catch (error) {
      await connection.rollback();
      console.error("Delete User Error:", error);
      res.status(400).json({
        message: "Error in Backend",
        error: error.message,
      });
    } finally {
      await connection.release();
    }
  });

  router.put("/UpdateUser/:id", async(req,res)=>{
    const id = req.params.id;
    const {
      firstName,
      username,
      email,
      password,
      phone,
      role,
      status,
      showroom,
    } = req.body;
    const connection = await db.getConnection();
    try{
      await connection.beginTransaction();
      const [results] = await connection.execute("Update users Set name = ? , username=?, email =?, password=?, phone=?, role_id=?, status=?, showroom_id=? where id = ? " , [firstName, username, email, password, phone, role, status, showroom, id]);

      
      await connection.commit()
      res.status(200).json({message:"User Updated Successfully"})
    }
    catch(error){
      await connection.rollback()
      res.status(400).json({message:"Error in Backend", error: error.message})
    }
    finally{
      await connection.release()
    }
  })
  router.get("/getSelectedUser/:id", async(req,res)=>{
    const id = req.params.id;
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      const [results] = await connection.execute("SELECT u.*, r.name as role FROM users u join roles r On u.role_id=r.id WHERE u.id = ?", [id
      ]);
      res.status(200).json(results);
      await connection.commit();
      } catch (error) {
      await connection.rollback();
      console.error("Error fetching user:", error);
      res.status(400).json({ message: "Error in Backend", error: error.message });
      } finally {
        await connection.release();
        }
  })

router.get("/GetPermissions/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const [userRows] = await db.query("SELECT * FROM users WHERE id = ?", [userId]);
    if (userRows.length === 0) return res.status(404).json({ message: "User not found" });

    const [permRows] = await db.query("SELECT * FROM userspermissions WHERE user_id = ?", [userId]);

    const formattedPermissions = {};

    permRows.forEach((row) => {
      if (!formattedPermissions[row.module]) {
        formattedPermissions[row.module] = {
          all: false,
          subModules: {},
        };
      }

      formattedPermissions[row.module].subModules[row.sub_module] = {
        view: !!row.can_view,
        edit: !!row.can_edit,
        delete: !!row.can_delete,
        all: !!row.can_all,
      };
    });

    res.json({
      user: userRows[0],
      permissions: formattedPermissions,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
router.post("/InsertPermission/:id", async (req, res) => {
  const userId = req.params.id;
  const { permissions } = req.body;

  try {
    // Clear existing permissions for this user
    await db.query("DELETE FROM userspermissions WHERE user_id = ?", [userId]);

    const insertData = [];

    for (const moduleKey in permissions) {
      const moduleData = permissions[moduleKey];

      /* ---------- 1. push the MODULE‑level “all” row ---------- */
      insertData.push([
        userId,
        moduleKey,
        moduleKey,                      // special sub‑module marker
        0,                        // can_view  (not used at module level)
        0,                        // can_edit  (not used at module level)
        0,                        // can_delete(not used at module level)
        moduleData.all ? 1 : 0    // can_all   (module‑wide switch)
      ]);

      /* ---------- 2. push every real SUB‑MODULE row ---------- */
      const subModules = moduleData.subModules || {};
      for (const subKey in subModules) {
        const sub = subModules[subKey];
        insertData.push([
          userId,
          moduleKey,
          subKey,
          sub.view   ? 1 : 0,
          sub.edit   ? 1 : 0,
          sub.delete ? 1 : 0,
          sub.all    ? 1 : 0
        ]);
      }
    }

    if (insertData.length) {
      await db.query(
        `INSERT INTO userspermissions
           (user_id, module, sub_module,
            can_view, can_edit, can_delete, can_all)
         VALUES ?`,
        [insertData]
      );
    }

    res.status(200).json({ message: "Permissions updated successfully" });
  } catch (err) {
    console.error("InsertPermission error:", err);
    res.status(500).json({ error: "Server error while updating permissions" });
  }
});

router.get("/GetPermissions/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const [rows] = await db.query(
      "SELECT module, sub_module, can_view, can_edit, can_delete, can_all FROM userspermissions WHERE user_id = ?",
      [userId]
    );

    const permissions = {};

    for (const row of rows) {
      const {
        module,
        sub_module,
        can_view,
        can_edit,
        can_delete,
        can_all,
      } = row;

      if (!permissions[module]) {
        permissions[module] = {};
      }

      permissions[module][sub_module] = {
        view: can_view === 1,
        edit: can_edit === 1,
        delete: can_delete === 1,
        all: can_all === 1,
      };
    }

    // Optionally, fetch user info
    const [userRows] = await db.query("SELECT * FROM users WHERE id = ?", [
      userId,
    ]);

    res.json({
      user: userRows[0] || null,
      permissions,
    });
  } catch (err) {
    console.error("Error fetching permissions:", err);
    res.status(500).json({ message: "Server error" });
  }
});


  return router;
};
