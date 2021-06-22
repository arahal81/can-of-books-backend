'use strict'
const express = require('express')
const cors=require('cors');
require('dotenv').config();
const getBooks=require('./module/Schema')

const app = express();
app.use(cors());
app.use(express.json());

 
app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get('/book',getBooks.getBooks);
app.post('/books',getBooks.addBook);
app.post('books/:id',getBooks.deleteBook);




app.listen(process.env.PORT)