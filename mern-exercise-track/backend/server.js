/*require what we will need*/
const express = require ('express');
/*const bodyParser = require('body-parser'); new form of react doesnt need body parser*/
const cors = require('cors');
const mongoose = require('mongoose'); //adding mongoose to link db



//setting up enviroment variables in .env files
require('dotenv').config();

//setting up the server
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());


const uri= process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser :true,userCreateIndex:true});
const connection = mongoose.Connection;
connection.once('open',()=>{
    console.log('MongoDB Database connection is established succefully!!')
});

//starts listening to the server 
app.listen(port,()=>{
    console.log('Server is running on port: 5000')
});