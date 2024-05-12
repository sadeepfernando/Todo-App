
const mongoose = require('mongoose');


const todoSchema = mongoose.Schema(
    {
        title :{type:String, required:true},
        desc :String
    },
    {timestamps:true}
    );
    
    //creating the model
    const Todo = mongoose.model('todo',todoSchema);

    module.exports = Todo;