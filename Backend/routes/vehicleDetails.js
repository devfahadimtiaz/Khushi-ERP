module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  router.get("/VehicleGeneralDetails/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const generalDetails = await db.query(
        "SELECT v.*, s.name, s.currency FROM vehicle As v Join showroom as s on s.id=v.showroom_id where v.id =?",
        [id]
      );
      res.json(generalDetails[0]);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });
  router.get("/VehicleImages/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const images = await db.query(
        "SELECT * FROM vehiclemedia where type=? AND vehicle_id =?",
        [ "Image", id]
      );
      res.json(images[0]);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });
   router.get("/VehicleVideo/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const images = await db.query(
        "SELECT * FROM vehiclemedia where type=? AND vehicle_id =?",
        [ "video", id]
      );
      res.json(images[0]);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });
  router.get("/VehicleDocs/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const docs = await db.query(
        "SELECT * FROM  vehiclemedia where type=? AND vehicle_id =?",
        ["document", id]
      );
      res.json(docs[0]);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });
  router.get("/VehcileExpense/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const expense = await db.query(
        "SELECT * FROM vehicleexpense where vehicle_id =?",
        [id]
      );
      res.json(expense[0]);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });
  router.get("/ParkingSlotVehicle/:id", async(req,res)=>{
    const id=req.params.id;
    try{
        const park = await db.query("SELECT slot_number from parking_slot WHERE vehicle_id = ?",[id]);
        res.json(park[0])
    }
    catch(error){
        res.status(400).json({message:error})
    }
  })

  return router;
};
