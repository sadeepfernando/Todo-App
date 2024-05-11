const Todo = require('../models/Todos');


const homeControllers = async (req,res,next) =>{
    try{
        //fetching todo to the main page
        const todo = await Todo.find()

        res.render('index', {title:'List todo',todo})
    }catch(error){
        res.status(500)
        .json({message:error.message});
    }
}

const addTodoControllers = (req,res,next) =>{
    try{
        res.render('newTodo',{title :'Add todo'})
    }catch(error){
        res.status(500)
        .json({message:error.message});
    }
}

const updateTodoControllers = (req,res,next) =>{
    try{
        res.render('updateTodo',{title :'Update todo'})
    }catch(error){
        res.status(500)
        .json({message:error.message});
    }
}

const deleteTodoControllers = (req,res,next) =>{
    try{
        res.render('deleteTodo',{title :'Delete todo'})
    }catch(error){
        res.status(500)
        .json({message:error.message});
    }
}

const addTodoPostControllers = async(req,res,next) =>{
    try{
        const {title, desc} = req.body;
        const newTodo = new Todo({title,desc})
        await newTodo.save();

        res.redirect('/');

    }catch(error){
        res.status(500)
        .json({message:error.message});
    }
}

module.exports =
{
    homeControllers,
    addTodoControllers,
    updateTodoControllers,
    deleteTodoControllers,
    addTodoPostControllers
}