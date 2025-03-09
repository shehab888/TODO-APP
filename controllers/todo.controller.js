
const Todo=require('../models/todo.model.js');
const User=require('../models/users.model.js');
const addTodo=async(req,res)=>{
    try{
        if(!req.user){
            return res.status(401).send({status:"fail",messege:"you are unatorized you must be login first"});
        }
        const {title,description,status}=req.body;
        const newTodo=new Todo({title:title,description:description,status:status,userId:req.user._id});
        await newTodo.save();
        await User.updateOne({_id:req.user._id},{$push:{todos:newTodo._id}});
        return res.status(201).send({success:true,message:"Todo added successfully",data:newTodo});
    }
    catch(e){
        console.log(e.message);
        return res.status(500).send({success:false,message:e.message});
    }
}

const changeStatus=async(req,res)=>{
    
    if(!req.user){
        return res.status(401).send({status:"fail",messege:"you are unatorized you must be login first"});
    }   
    try{
        const courseId=req.params.id;
        const todo=await Todo.findByIdAndUpdate(courseId,{...req.body});
        if(!todo){
            return res.status(404).send({success:false,message:"Todo not found"});
        }
        return res.status(200).send({success:true,message:"Todo status changed successfully"});
    }catch(err){
        return res.status(500).send({success:false,message:err.message});
    }
}

const deleteTodo=async(req,res)=>{
    try{
        if(!req.user){
            return res.status(401).send({status:"fail",messege:"you are unatorized you must be login first"});
        }
        const todo=await Todo.findByIdAndDelete(req.params.id);
        if(!todo){
            return res.status(404).send({success:false,message:"Todo not found"});
        }
        await User.updateOne({_id:req.user._id},{$pull:{todos:req.params.id}});
        return res.status(200).send({success:true,message:"Todo deleted successfully"});
    }catch(err){
        return res.status(500).send({success:false,message:err.message});
    }

}

const getTodoById=async(req,res)=>{
    try{
        if(!req.user){
            return res.status(401).send({status:"fail",messege:"you are unatorized you must be login first"});
        }
        const todo=await Todo.findOne({_id:req.params.id},{"__v":0});
        if(!todo){
            return res.status(404).send({success:false,message:"Todo not found"});
        }
        return res.status(200).send({success:true,data:todo});
    }catch(err){
        return res.status(500).send({status:"fail",messe:"server error"});
    }
}

module.exports={
    addTodo,
    changeStatus,
    deleteTodo,
    getTodoById
}