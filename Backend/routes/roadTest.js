module.exports=(db)=>{
    const express = require('express');
    const router = express.Router();

    router.post("/addRoadTestForm", async(req,res)=>{
        const data = req.body;
        const connection = await db.getConnection();
        try{
            await connection.beginTransaction();
            await connection.query("INSERT INTO roadTest (name,city, state, address, driving_license_no, contact, sales_person, vehicle_checkout, vehicle_id ) VALUES (?,?,?,?,?,?,?,?,?)",[
                data.name,
                data.city,
                data.state,
                data.address,
                data.license,
                data.contact,
                data.salesPerson,
                data.vehicleCheckout || false,
                data.vehicleId
            ])


            await connection.commit();
            res.status(200).json({message:"Road test Data Added"})
        }
        catch(error)
        {
            await connection.rollback();
            res.status(400).json({message: error})
        }
        finally{
            await connection.release();
        }
    })

    router.get("/vehicleInStock",async(req,res)=>{
        try{
            const [results] = await db.execute(`SELECT * FROM vehicle where status = "In Stock"`);
            return res.json(results)
        }
        catch(error){
            return res.json({message: "Error insde Server", error})
        }
    })

    router.get("/getRoadTest", async(req,res)=>{
        try{
            const [result] = await db.execute("SELECT * FROM roadTest");
            return res.json(result)
        }
        catch(error){
            res.status(400).json({message:error})
        }
    })

    router.put("/editRoadtest/:id",async(req,res)=>{
        const {id} = req.params;
        const data =req.body;
        const connection = await db.getConnection();
        try{
            await connection.beginTransaction();
            await connection.query(`UPDATE roadTest SET name=?, city=?, state=?, address=?, driving_license_no=?, contact=?, sales_person=?, vehicle_checkout=?, vehicle_id=? WHERE id= ?`,[
                data.name,
                data.city,
                data.state,
                data.address,
                data.license,
                data.contact,
                data.salesPerson,
                data.vehicleCheckout,
                data.vehicleId,
                id
            ])
            await connection.commit();
            res.status(200).json({message:"Road Test Updated Successfully"})
        }
        catch(error){
            await connection.rollback();
            res.status(400).json({message:error})
        }
        finally{
            await connection.release();
        }
    })

    router.delete("/deleteRoadTest/:id", async(req,res)=>{
        const {id} = req.params;
        const connection = await db.getConnection();
        try{
            await connection.beginTransaction();
            await connection.query("DELETE FROM roadTest WHERE id = ?", [id]);
            await connection.commit();
            res.status(200).json({message:"Road Test Deleted"})
        }
        catch(error){
            await connection.rollback();
            res.status(400).json({message: error})
        }
        finally{
            await connection.release();
        }
    })

    return router;
}