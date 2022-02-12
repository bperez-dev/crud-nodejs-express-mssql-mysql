require("dotenv").config();
const mysql = require('mysql2');

const connectionPool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 20,
    waitForConnections: true
});

// open the MySQL connection
connectionPool.getConnection((error, connection) => {
    if (error) throw error;
    console.log("Connected to MYSQL");
});

module.exports = connectionPool;