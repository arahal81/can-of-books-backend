const express = require('express')
const cors=require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
app.use(cors());

 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(process.env.PORT)