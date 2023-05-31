const express = require('express');
const router = express.Router();
const DataOlympic = require("../models/dataList")

router.post("/dataList",async(req,res)=>{
    try{
    const createdata = new DataOlympic(req.body);
    console.log(req.body);
    const createuser= await createdata.save();
    res.status(200).send(createuser);
    }catch(e){
            res.status(404).send(e);
    }
    
})
module.exports = router