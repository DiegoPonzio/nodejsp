let prom = require("./promise");

/*
let promesa = new Promise((res, rej) =>{
    //res("se proceso con exito");
    rej("uyy, error en la peticion");
});

promesa.then((resul) => {
    console.log(resul);
}, (error) => {
    console.log(error);
});
*/

prom.calcular(84,7).then((rest) =>{
    console.log(rest);
}, (error)=>{
    console.log(error);
});