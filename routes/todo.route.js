const express=require('express');
const todoController=require('../controllers/todo.controller.js')

const router=express.Router();

router.post('/add-todo', todoController.addTodo);
router.put('/change-status/:id', todoController.changeStatus);
router.delete('/delete-todo/:id', todoController.deleteTodo);
router.get('/getById/:id', todoController.getTodoById);


module.exports=router;