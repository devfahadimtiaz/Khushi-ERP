const { json } = require("body-parser");

module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  router.post("/gatePass", async (req, res) => {
    const data = req.body;
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      await connection.query(
        "INSERT INTO gatepass (sale_id, name, city, state, national_id, contact) VALUES (?, ?, ?, ?, ?, ?)",
        [
          data.selectSale,
          data.fname,
          data.city,
          data.state,
          data.nationalId,
          data.contact,
        ]
      );
      await connection.commit();
      res.status(200).json({ message: "Gatepass Added Successfully" });
    } catch (err) {
      await connection.rollback();
      res.status(400).json({ message: "Error Occured", error: err });
    } finally {
      connection.release();
    }
  });

  router.patch("/updateGatpassStatus/:saleId", async (req,res)=>{
    const saleId = req.params.saleId.trim();
    const sql = "UPDATE sale SET gatepass_status = TRUE WHERE id=?"

    try{
        const [results] = await db.execute(sql, [saleId]);
        if(results.affectedRows===0){
            return res.status(404).json({message:"Sale Dont Found"});
        }
        res.json({message:"Gatepass Status Updated Successfully"});
    }
    catch(err){
        console.error("ERROR Updateing gatepass Status ", err);
        return res.status(500).json({error:err.message})
    }
  });


router.get("/saleDetails", async (req,res)=>{
    try{
        const [salesResults] =await db.execute("SELECT s.id AS sale_id,v.make,v.model,v.stock_no,v.exterior_color,b.first_name, b.last_name,b.state,b.city,b.contact_number,b.national_id_or_passport FROM sale s JOIN vehicle v ON v.id = s.vehicle_id JOIN cashsalebuyer b ON b.sale_id = s.id WHERE gatepass_status = FALSE AND v.status = 'SOLD'")
        return res.json(salesResults)
    }
    catch(err){
        return res.status(400).json({message:"Error Occured",error:err})
    }
})

router.get("/getGatepass", async (req, res) =>{
    try{
        const [gatePassResults] = await db.execute("SELECT g.id AS gatepass_id, g.sale_id,  g.name, g.city, g.state,g.created_at, g.national_id, g.contact, v.make, v.model, v.stock_no, v.exterior_color, v.year FROM gatepass g JOIN sale s ON g.sale_id = s.id JOIN vehicle v ON s.vehicle_id = v.id");
        return res.json(gatePassResults)
    }
    catch(err){
        return res.status(400).json({message:"Error Occure", error:err})
    }
});

router.get("/getGatepass/:id", async (req, res) =>{
  const id = req.params.id;
    try{
        const [gatePassResults] = await db.execute("SELECT g.id AS gatepass_id, g.sale_id,  g.name, g.city, g.state,g.created_at, g.national_id, g.contact, v.make, v.model, v.stock_no, v.exterior_color, v.year FROM gatepass g JOIN sale s ON g.sale_id = s.id JOIN vehicle v ON s.vehicle_id = v.id Where v.showroom_id = ?",[id]);
        return res.json(gatePassResults)
    }
    catch(err){
        return res.status(400).json({message:"Error Occure", error:err})
    }
});

router.delete("/deleteGatepass/:id", async (req, res)=>{
  const {id}= req.params;
  const connection = await db.getConnection();
  try{
    await connection.beginTransaction();
    await connection.query("DELETE FROM gatepass WHERE id =?", [id]);
    await connection.commit();
    res.status(200).json({message: "Gatepass Deleted Successfully"});
  }
  catch(err){
    await connection.rollback();
    res.status(400).json({message: "Error Occured", error: err.message});
  }
  finally {
    connection.release();
  }
})

 router.patch("/updateGatpassDeleteStatus/:saleId", async (req,res)=>{
    const saleId = req.params.saleId.trim();
    const sql = "UPDATE sale SET gatepass_status = False WHERE id=?"

    try{
        const [results] = await db.execute(sql, [saleId]);
        if(results.affectedRoes===0){
            return res.status(404).json({message:"Sale Dont Found"});
        }
        res.json({message:"Gatepass Status Updated Successfully"});
    }
    catch(err){
        console.error("ERROR Updateing gatepass Status ", err);
        return res.status(500).json({error:err.message})
    }
  });

  router.put("/editGatePass/:id", async (req, res) => {
    const {id}= req.params;
    const data=req.body;
    const connection = await db.getConnection();
    try{
      await connection.beginTransaction();
      await connection.query("UPDATE gatepass SET sale_id = ?, name = ?, city = ?, state = ?, national_id = ?, contact = ? WHERE id = ?",
        [
          data.selectSale,
          data.fname,
          data.city,
          data.state,
          data.nationalId,
          data.contact,
          id
        ]
      );
      await connection.commit();
      res.status(200).json({ message: "Gatepass Updated Successfully" });
    }
    catch(err){
      await connection.rollback();
      res.status(400).json({ message: "Error in updating gatepass", error: err.message });
    }
    finally {
      connection.release();
    }
  })

  return router;
};
