'use strict'
const express = require('express')
const cors=require('cors');
require('dotenv').config();
const getBooks=require('./module/Schema')
const app = express();
app.use(cors());

 
app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get('/book',getBooks);




app.listen(process.env.PORT)