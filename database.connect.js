const mongoose = require('mongoose');

// Connect to MongoDB

const connectDB=async()=>{
    try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database connection established");
    }catch(e){
        console.log(e);
    }
}

module.exports = connectDB;