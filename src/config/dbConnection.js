const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gsk278sh21',
    database: 'xlsx_test',
    multipleStatements: true
});

module.exports = db;