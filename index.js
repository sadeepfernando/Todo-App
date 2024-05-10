
const express = require('express');
const mongoose = require('mongoose');
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

//listen the server
app.listen(PORT,()=>{
    console.log(`you are listening to port ${PORT}`)
});