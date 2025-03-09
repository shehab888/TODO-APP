
const Todo=require('../models/todo.model.js')
const User=require('../models/users.model.js');
const bcryptjs=require('bcryptjs');
const getTodos=async(req,res)=>{
    try{
        if(!req.user)
            return res.status(401).send({status:"fail",messege:"you are unatorized you must be login first"});
        const todos=await Todo.find({userId:req._id});
        return res.status(200).send({success:true,todos:todos});
    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message});
    }
}

const getRemainTodos=async(req,res)=>{
    try{
        if(!req.user)
            return res.status(401).send({status:"fail",messege:"you are unatorized you must be login first"});
        const todos=await Todo.find({userId:req._id,status:false});
        return res.status(200).send({success:true,todos:todos});
    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message});
    }
}

const profile=async(req,res)=>{
    try{
        if(!req.user)
            return res.status(401).send({status:"fail",messege:"you are unatorized you must be login first"});
        const user=await User.findOne({_id:req.user._id},{todos:0,__v:0});
        const todos=await Todo.find({userId:req._id},{userId:0});
        return res.status(200).send({success:true,userInfo:user,todos:todos});
    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message});
    }
}

const updateUser=async(req,res)=>{
    try{
        if(!req.user)
            return res.status(401).send({status:"fail",messege:"you are unatorized you must be login first"});
        const {username,email,password}=req.body;
        if(username || email ){
            await User.findByIdAndUpdate(req.user._id,{username:username||req.user.username,email:email||req.user.email});
        }
        if(password){
            const hashedPassword=await bcryptjs.hash(password,10);
            await User.findByIdAndUpdate(req.user._id,{password:hashedPassword});
        }
        return res.status(200).send({success:true,message:"User updated successfully"})
    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message});
    }
}

const deleteUser=async(req,res)=>{
    try{
        if(!req.user)
            return res.status(401).send({status:"fail",messege:"you are unatorized you must be login first"});
        await User.findByIdAndDelete(req.user._id);
        await Todo.deleteMany({userId:req.user._id});
        res.clearCookie("token");
        return res.status(200).send({success:true,message:"User deleted successfully"})
    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message});
    }
}

module.exports={
    getTodos,
    getRemainTodos,
    profile,
    updateUser,
    deleteUser
}