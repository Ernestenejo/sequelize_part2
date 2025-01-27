const express = require ('express')
const sequelize = require ('./database/sequelize');
const clubRouter = require('./routes/clubRouter');
const PORT = 1018;

const app = express();
app.use(express.json())
app.use(clubRouter);

const server = async () =>{
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

server();



app.listen(PORT,()=>{
console.log(`app is listening to port: ${PORT}`)
})