
const express = require('express');

const PORT = 8000;


//initialize express instance
const app = express();

//setup view engine
app.set('view engine','ejs');

//listen the server
app.listen(PORT,()=>{
    console.log(`you are listening to port ${PORT}`)
});