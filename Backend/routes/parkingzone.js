module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  router.post("/showroom-zones", async (req, res) => {
    const { showroomId, zones } = req.body;
    const connection = await db.getConnection();
    for (const zone of zones) {
      const [zoneResult] = await connection.query(
        "INSERT INTO zone (showroom_id, name) VALUES (?, ?)",
        [showroomId, zone.name]
      );

      for (const line of zone.lines) {
        const [lineResult] = await connection.query(
          "INSERT INTO line (zone_id, line_number) VALUES (?, ?)",
          [zoneResult.insertId, line.lineNumber]
        );

        for (const slotNumber of line.slots) {
          await connection.query(
            "INSERT INTO parking_slot (line_id, slot_number) VALUES (?, ?)",
            [lineResult.insertId, slotNumber]
          );
        }
      }
    }

    res.json({ success: true });
  });
  router.get("/zones", async (req, res) => {
    const sql = "SELECT * FROM zone";
    try {
      const [result] = await db.query(sql);
      return res.json(result);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error fetching garages", error: err });
    }
  });
  // GET /api/parking-structure
  router.get("/parking-structure/:id", async (req, res) => {
    const id = req.params.id;
    const [rows] = await db.query(
      `
    SELECT 
  z.id AS zone_id,
  z.name AS zone_name, 
  l.id AS line_id,
  l.line_number, 
  s.id AS slot_id,
  s.slot_number,
  s.is_occupied,
  s.vehicle_id
FROM zone z
JOIN line l ON z.id = l.zone_id
JOIN parking_slot s ON l.id = s.line_id
WHERE z.showroom_id = ?
ORDER BY z.name, l.line_number, s.slot_number;;
  `,
      [id]
    );

    const structure = {};

    for (const row of rows) {
      if (!structure[row.zone_name]) structure[row.zone_name] = {};
      if (!structure[row.zone_name][row.line_number])
        structure[row.zone_name][row.line_number] = [];
      structure[row.zone_name][row.line_number].push({
        slot_id: row.slot_id,
        slot_number: row.slot_number,
        is_occupied: !!row.is_occupied,
        vehicle_id: row.vehicle_id,
      });
    }

    res.json(structure);
  });

  router.get("/getZone/:id", async (req, res) => {
    const id = req.params.id;
    const sql =
      "SELECT id,name from zone where showroom_id = ? ORDER BY name ASC";
    try {
      const [result] = await db.query(sql, [id]);
      return res.json(result);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error fetching zone", error: error });
    }
  });
  router.get("/getLineNumber/:id", async (req, res) => {
    const connection = await db.getConnection();
    const id = req.params.id;

    const sql =
      "SELECT id, line_number FROM line WHERE zone_id = ? ORDER BY id ASC";

    try {
      const [lines] = await connection.query(sql, [id]);

      if (lines.length === 0) {
        return res.json([]); // return empty array if no lines found
      }

      // For each line, get its slots
      const result = await Promise.all(
        lines.map(async (line) => {
          const [slots] = await connection.query(
            `SELECT ps.id, ps.slot_number, ps.vehicle_id, ps.is_occupied, v.stock_no
   FROM parking_slot ps
   LEFT JOIN vehicle v ON ps.vehicle_id = v.id
   WHERE ps.line_id = ?
   ORDER BY ps.id ASC`,
            [line.id]
          );

          return {
            id: line.id,
            line_number: line.line_number,
            slots,
          };
        })
      );

      res.json(result);
      await connection.commit();
    } catch (error) {
      await connection.rollback();
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error fetching line numbers", error });
    } finally {
      await connection.release();
    }
  });
  router.get("/getUnParkedVehicles/:id", async (req, res) => {
    const id = req.params.id;
    const sql =
      "SELECT id, make, model, year , stock_no FROM vehicle WHERE is_parked = 0 && showroom_id=?";
    try {
      const [vehicles] = await db.query(sql, [id]);
      res.json(vehicles);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });
  router.get("/getLineNumbers/:id", async (req, res) => {
    const id = req.params.id;
    const sql = "SELECT id, line_number FROM line WHERE zone_id = ?";
    try {
      const [line] = await db.query(sql, [id]);
      res.json(line);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

  router.get("/getSlotNumber/:id", async (req, res) => {
    const id = req.params.id;
    const sql =
      "SELECT id,slot_number FROM parking_slot WHERE line_id=? AND is_occupied= 0 ";
    try {
      const [slot] = await db.query(sql, [id]);
      res.json(slot);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

  router.put("/addParkingSlot/:id", async (req, res) => {
    const { id } = req.params;
    const { selectedCar } = req.body;
    const connection = await db.getConnection();

    if (!selectedCar || !id) {
      return res.status(400).json({ message: "Missing required data" });
    }

    try {
      await connection.beginTransaction();
      await connection.query(
        "UPDATE parking_slot SET is_occupied = 1, vehicle_id = ? WHERE id = ?",
        [selectedCar, id]
      );
      await connection.query("UPDATE vehicle SET is_parked = 1 WHERE id = ?", [
        selectedCar,
      ]);
      await connection.commit();
      res.status(200).json({ message: "Vehicle added to parking slot" });
    } catch (error) {
      await connection.rollback();
      res.status(500).json({ message: error.message });
    } finally {
      connection.release();
    }
  });

  router.get("/getParkedVehicle/:id", async (req, res) => {
    const id = req.params.id;
    const sql = ` SELECT v.make, v.model, v.year, v.stock_no, ps.slot_number,ps.id as slot_id, ps.vehicle_id, l.line_number, z.name FROM vehicle as v JOIN parking_slot AS ps ON v.id=ps.vehicle_id JOIN  line As l on ps.line_id=l.id JOIN zone AS z on l.zone_id=z.id WHERE v.is_parked=1 && z.showroom_id=?`;
    try {
      const [vehicle] = await db.query(sql, [id]);
      res.json(vehicle);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

  router.get("/UpdateVehicleZone/:id", async (req, res) => {
    const id = req.params.id;
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();

      await connection.query(
        "UPDATE parking_slot SET is_occupied = 0, vehicle_id = NULL WHERE id = ?",
        [id]
      );

      await connection.commit();
      res
        .status(200)
        .json({ message: "Previous parking slot vacated successfully." });
    } catch (error) {
      await connection.rollback();
      res.status(500).json({ message: error.message });
    } finally {
      connection.release();
    }
  });

  router.post("/updateVehicleToNewSlot", async (req, res) => {
    const { vehicleId, slotId } = req.body;

    if (!vehicleId || !slotId) {
      return res
        .status(400)
        .json({ message: "vehicleId and slotId are required." });
    }

    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();

      const [result] = await connection.query(
        "UPDATE parking_slot SET is_occupied = 1, vehicle_id = ? WHERE id = ?",
        [vehicleId, slotId]
      );

      if (result.affectedRows === 0) {
        throw new Error("Slot not found or update failed.");
      }

      await connection.commit();
      res
        .status(200)
        .json({ message: "Vehicle assigned to new slot successfully." });
    } catch (error) {
      await connection.rollback();
      res.status(500).json({ message: error.message });
    } finally {
      connection.release();
    }
  });
  router.put("/deleteParkedVehicle/:id", async (req, res) => {
    const { id } = req.params;
    const connection = await db.getConnection();

    try {
      await connection.beginTransaction();

      const [result] = await connection.query(
        "UPDATE vehicle SET is_parked = 0 WHERE id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Vehicle not found");
      }

      await connection.commit();
      res.status(200).json({ message: "Vehicle removed from parking slot" });
    } catch (error) {
      await connection.rollback();
      res.status(500).json({ message: error.message });
    } finally {
      connection.release();
    }
  });

  router.post("/SwapVehiclesSlots", async (req, res) => {
    const { tocarId, toSlotId, fromCarId, fromSlotId } = req.body;

    if (!tocarId || !toSlotId || !fromCarId || !fromSlotId) {
      return res.status(400).json({
        message:
          "All of toCarId, toSlotId, fromCarId, and fromSlotId are required.",
      });
    }

    const connection = await db.getConnection();

    try {
      await connection.beginTransaction();

      const [result1] = await connection.query(
        "UPDATE parking_slot SET vehicle_id = ? WHERE id = ?",
        [fromCarId, toSlotId]
      );

      const [result2] = await connection.query(
        "UPDATE parking_slot SET vehicle_id = ? WHERE id = ?",
        [tocarId, fromSlotId]
      );

      if (result1.affectedRows === 0 || result2.affectedRows === 0) {
        throw new Error("One or more slots not found or update failed.");
      }

      await connection.commit();
      res.status(200).json({ message: "Vehicles swapped successfully." });
    } catch (error) {
      await connection.rollback();
      res.status(500).json({ message: error.message });
    } finally {
      connection.release();
    }
  });

  router.post("/getParkedVehicleByStockNo",async(req,res)=>{
    const {stockNo, garageId} = req.body;
    if(!stockNo || !garageId){
      return res.status(400).json({
        message:
        "All of id, stockNo, and garageId are required.",
        });
        }
        const sql = "SELECT s.vehicle_id, s.slot_number from parking_slot AS s JOIN vehicle AS v ON v.id= s.vehicle_id WHERE v.stock_no = ? AND v.showroom_id = ?";
    try{
      const [slot] = await db.query(sql, [stockNo, garageId]);
        res.status(200).json({slot:slot[0]});
    }
    catch(error){
     res.status(400).json({message: error})
    }
  })
  

  return router;
};
