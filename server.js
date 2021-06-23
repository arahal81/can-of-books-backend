'use strict'
const express = require('express')
const cors=require('cors');
require('dotenv').config();
const myFunctions=require('./module/Schema')
const app = express();
app.use(cors());
app.use(express.json());

 
app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get('/book',myFunctions.getBooks);
app.post('/books',myFunctions.addBook);
app.delete('/books/:id',myFunctions.deleteBook);
app.put('/books/:id',myFunctions.updateBook);




app.listen(process.env.PORT)