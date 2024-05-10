
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { title } = require('process');
const PORT = 8000;


//initialize express instance
const app = express();

//connecting databade
const connectionUrl = "mongodb://localhost:27017/todo";

mongoose.connect(connectionUrl)
.then(() => {console.log('Database connected successfully')})
.catch((error) => {console.log(error.message)});

//setup view engine
app.set('view engine','ejs');

//load public assets
app.use(express.static(path.join(__dirname,"public")))

//create get route for home page
app.get('/',(req,res,next) =>{
    try{
        res.render('index',{title:"List Todo"})
    }catch(error){
        res.status(500)
        .json({message:error.message})
    }
})

//create a get route for add-todo page
app.get('/add-todo',(req,res,next) =>{
    try{
        res.render('newTodo',{title:"New Todo"})

    }catch(error){
        res.status(500)
        .json({message:error.message})
    }
})

//create route for update todo page
app.get('/update-todo',(req,res,next) =>{
    try{
        res.render('updateTodo', {title:"Update Todo"})

    }catch(error){
        res.status(500)
        .json({message:error.message})
    }
})

//cteate a rote for delete todo page
app.get('/delete-todo',(req,res,next) =>{
    try{
        res.render('deleteTodo',{title:"Delete Todo"})

    }catch(error){
        res.status(500)
        .json({message:error.message})
    }
})



//listen the server
app.listen(PORT,()=>{
    console.log(`you are listening to port ${PORT}`)
});