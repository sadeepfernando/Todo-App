const Todo = require('../models/Todos');
const moment = require('moment');



const homeControllers = async (req,res,next) =>{
    try{
        //fetching todo to the main page
        const todo = await Todo.find()

        //time format by moment
       res.locals.moment =   moment ;

        res.render('index', {title:'List todo',todo});
    }catch(error){
        res.status(500)
        .json({message:error.message});
    }
}

const addTodoControllers = (req,res,next) =>{
    try{
        res.render('newTodo',{title :'Add todo'});
    }catch(error){
        res.status(500)
        .json({message:error.message});
    }
}

const updateTodoControllers = async (req,res,next) =>{
    try{
        //finding the user related to an id
        const {id} = req.query;
        const todo = await Todo.findById(id);

        res.render('updateTodo',{title :'Update todo', todo});
    }catch(error){
        res.status(500)
        .json({message:error.message});
    }
}

const deleteTodoControllers = (req,res,next) =>{
    try{
        const {id} = req.query;

        res.render('deleteTodo',{title :'Delete todo', id});
    }catch(error){
        res.status(500)
        .json({message:error.message});
    }
}

const addTodoPostControllers = async(req,res,next) =>{
    try{
        const {title, desc} = req.body;
        const newTodo = new Todo({title,desc});
        await newTodo.save();

        res.redirect('/');

    }catch(error){
        res.status(500)
        .json({message:error.message});
    }
}

const saveUpdateTodoControllers = async (req,res,next) =>{
    try{
        const {id} = req.params
        const {title , desc} = req.body;
        
        const todo = await Todo.findById(id);
        if(!todo){
            return res.status(400).json({message: "Todo not found"});
        }
        todo.title = title
        todo.desc = desc

        await todo.save();
        res.redirect('/');

    }catch(error){
        res.status(500)
        .json({message:error.message})
    }
}

const confirmDeleteTodoControllers = async(req,res,next) =>{
    try{
        const {id,confirm} = req.query;

        if(confirm === "yes"){
            await Todo.findByIdAndDelete(id);
        }
        res.redirect('/');

    }catch(error){
        res.status(500)
        .json({message:error.message})
    }
}

module.exports =
{
    homeControllers,
    addTodoControllers,
    updateTodoControllers,
    deleteTodoControllers,
    addTodoPostControllers,
    saveUpdateTodoControllers,
    confirmDeleteTodoControllers

}