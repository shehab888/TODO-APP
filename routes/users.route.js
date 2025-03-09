const express=require('express');
const usersController=require('../controllers/users.controller.js')

const router=express.Router();

router.get('/get-todos', usersController.getTodos);
router.get('/get-remain-todo', usersController.getRemainTodos);
router.get('/profile', usersController.profile);
router.put('/update-user-profile', usersController.updateUser);
router.delete('/delete-user', usersController.deleteUser);

module.exports=router;