// const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt =require('jsonwebtoken');
const User=require('../models/users.model.js');

const signup=async(req,res)=>{
   try{
    const {username,email,password}=req.body;
    const hashedPassword=await bcryptjs.hash(password,10);
    const newUser=new User({
        username,
        email,
        password:hashedPassword,
    });
    await newUser.save();
    return res.status(201).send({success:true,message:"User registered successfully"})
   }catch(err){
    return res.status(500).send({message:err.message});
   }

}

const signin=async(req,res)=>{
    try{
    const {email,password} = req.body;
    // console.log("email: " + email,"password",password);
    
    const foundedUser=await User.findOne({email});
    // console.log("foundedUser",foundedUser); 
    
    if(!foundedUser){
        return res.status(404).send({success:false,message:"Incorrect username or password"});
    }
    comparedPassword=await bcryptjs.compare(password,foundedUser.password);
    // console.log(comparedPassword);
    
    if(!comparedPassword){
        return res.status(404).send({success:false,message:"Incorrect username or password"});
    }
    
    const token =jwt.sign({_id:foundedUser._id,email:foundedUser.email},process.env.JSON_WEB_TOKEN,{expiresIn:"15m"});
    // console.log("token",token);
    
    res.cookie("token",token,{httpOnly:true});
    const userFiltered=await User.findOne({_id:foundedUser._id},{password:0,__v:0,todos:0});
    return res.status(200).send({success:true,user:userFiltered})
    }catch(err){
        return res.status(500).send({success:false,message:""}); 
    }
}

const signout=(req,res)=>{
    try{
    res.clearCookie("token");
    return res.status(200).send({success:true,message:"User signed out successfully"})
    }catch(err){
        return res.status(500).send({success:false,message:""}); 
    }
}

module.exports={
    signup,
    signin,
    signout,
}