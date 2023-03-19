const mysql = require('mysql');
const config = require('../../config.json');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'database_name',
});