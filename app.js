const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const mongodbConnection = require('./init/mongodbConnection');
const todoRouter = require('./routes/todo');
const dotenv = require('dotenv');

//environment variable
dotenv.config();


//initialize express instance
const app = express();


//database connection
mongodbConnection();

    
//set up view engine
app.set('view engine','ejs');

//use body parser
app.use(bodyParser.urlencoded({extended:true}));

//load assets
app.use(express.static(path.join(__dirname,'public')));

//use sub routes
app.use('/',todoRouter)

module.exports = app;

