const express = require("express");
const app = express();
const userRoutes = require('./routes/userRoutes');
const spaceRoutes = require('./routes/spaeRoutes');
const bodyParser = require("body-parser");
const sequelize = require('../config/database');

// Middleware
// use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const config = require(__dirname + '/../config/config.json')["development"];

//Create connection and also setup DB
const mysql = require("mysql2");

// Open the connection to MySQL server
const connection = mysql.createConnection({
    host: config.host,
    user: config.username,
    password: config.password,
});

// Run create database statement: Create DB called ClassUs
connection.query(
    `CREATE DATABASE IF NOT EXISTS ClassUs`,
    function (err, results) {
        console.log(results);
        console.log(err);
    }
);

console.log("TEST123");
console.log(config.database);

//DB connection
sequelize.sync();

app.use('/users', userRoutes);
app.use('/space', spaceRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});