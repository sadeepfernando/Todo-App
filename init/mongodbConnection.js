const mongoose = require('mongoose');


const mongodbConnection = async() =>{
    try{
        await mongoose.connect(process.env.CONNECTION_URL)
        console.log('database connected successfull')

    }catch(error){
        console.log(error.message)
        process.exit(1);
    }
}

module.exports = mongodbConnection;