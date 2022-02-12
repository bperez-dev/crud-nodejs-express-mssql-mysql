require("dotenv").config();
const sql = require('mssql');

const connectionPool = new sql.ConnectionPool({
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
})

// open the MSSQL connection
connectionPool.connect((error, connection) => {
    if (error) throw error;
    console.log('Connected to MSSQL')
});

module.exports = connectionPool;