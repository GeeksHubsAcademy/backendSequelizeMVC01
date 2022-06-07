
const express = require('express');

const app = express();

const port = 3000;

const db = require('./db/db');

//Middleware

app.use(express.json());

db.then(()=>{

    app.listen(port, ()=> {console.log("Servidor levantado en el puerto ", port)});

}).catch((err) => console.log(err.message));