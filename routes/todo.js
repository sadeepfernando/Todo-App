
const express = require('express');
const router = express.Router();
const todoControllers = require('../controllers/todo');


//get main page
router.get('/',todoControllers.homeControllers);

//get add new todo page
router.get('/add-todo', todoControllers.addTodoControllers);

//get update todo page
router.get('/update-todo', todoControllers.updateTodoControllers );


//get delete todo page
router.get('/delete-todo', todoControllers.deleteTodoControllers);

//post mapping adding todos
router.post('/add-todo', todoControllers.addTodoPostControllers);

//To save updated data 
router.post('/update-todo/:id',todoControllers.saveUpdateTodoControllers);

//To delete todo data
router.get('/confirm-delete',todoControllers.confirmDeleteTodoControllers);

module.exports = router;
