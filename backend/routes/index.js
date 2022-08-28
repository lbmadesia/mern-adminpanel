const express = require('express');
const router = express.Router();
const controllerPath = '../app/controllers/';
const {store} = require(controllerPath+'registerController');
router.get("/",(req,res)=>{
    res.status(200);
    console.log("root call");
    res.json({message:"successfully home call",data:req.body});
});