const app = require('./app');

const PORT = process.env.PORT || 8000;


//listen to  the server
app.listen(PORT,() =>{console.log(`you are listening to port ${PORT}`)});