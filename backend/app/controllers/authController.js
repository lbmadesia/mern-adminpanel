
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const login = async(req,res)=>{
    const user = await User.findOne({email:req.body.email});
    if(user && (await user.matchPassword(req.body.password))){
        res.status(200);
        res.json({data:{name:user.name,token: await user.generateToken()},message:"Login successfully!"});
    }
    else{
        res.status(401);
        res.json({message:"Invalid email or password"});
    }
}


const register = async(req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if(!user){
        user = await User.create(req.body);
        res.status(201);
        res.json({data:{name:user.name,token: await user.generateToken()},message:"Register successfully!"});
    }
    else{
        res.status(400);
        res.json({message:"User already exist"});
    }
}

module.exports = {login,register};