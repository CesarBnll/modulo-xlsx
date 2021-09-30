// Importe de Dependencias
const express = require('express');
const db = require('./config/dbConnection');
const routes = require('./routes');
const PORT = process.env.PORT || 4000;

// Inicia app express
const app = express();

// Importe de Rutas
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', routes());

// Importe de Middleware
app.get('/', (req, res) => res.send('Aplicación de Node en ejecución...'));

// Conexion a la Base de Datos
db.connect((err) => {
    console.log("Connectando a la Base de Datos...");
    if (err) throw err;
    console.log("Base de Datos conectada");
});

// Se hace la conexion global
global.db = db;

// Se mantiene viva la conexion haciendo Querys a intervalos
setInterval(() => {
    db.query('SELECT 1');
}, 5000);

app.listen(PORT, () => console.log('Aplicación corriendo en el puerto', PORT));
