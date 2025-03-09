const express=require('express');
const connectDB =require('./database.connect');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const authRouter=require('./routes/auth.route.js');  
const usersRouter=require('./routes/users.route.js'); 
const todoRouter=require('./routes/todo.route.js'); 
const checkUserToken=require('./middlewares/checkUsersTokens.js')

const app = express();
const PORT=3000;


app.use(cookieParser());
app.use(express.json());
app.use('/auth',authRouter);
// the middleware of the tokens
app.use(checkUserToken);
app.use('/todo',todoRouter);
app.use('/user',usersRouter);


app.listen(PORT,()=>{
    console.log(`server listening on port: ${PORT}`);
    connectDB();
});

