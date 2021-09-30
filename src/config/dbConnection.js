const mysql = require('mysql');

const db = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: 'gsk278sh21',
    // database: 'xlsx_test',
    host: 'fintech.c1mnoxvt6j2v.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Soporte26.',
    database: 'estadistica',
    multipleStatements: true
});

module.exports = db;