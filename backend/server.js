const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

//use express json to get data from json format
app.use(express.json());

//port
const PORT = process.env.PORT || 5500;

app.use(cors());

const TodoitemRoute = require('./routes/todoitems');

mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log("Database Connected"))
    .catch(err => console.log(err))

app.use('/', TodoitemRoute);

app.listen(PORT, () => 
    console.log("server Connected")
);