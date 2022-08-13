const express = require("express");
const { method } = require("lodash");
//const pug = require("pug");

const app = express();

let personas = [
    {
        id : 1,
        nombre : "diego"
    },
    {
        id : 2,
        nombre : "andrea" 
    }
];

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("template", {
        titulo : "prueba",
        mensaje : "Hola mundo"
    });
});

app.post("/", (req, res) =>{
    console.log(`metodo de uso ${method.name}`)
});

app.listen(3000, ()=>{
    console.log("Corriendo en el puerto 3000");
});