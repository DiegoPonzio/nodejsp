const os = require("os");
const fs = require("fs");

const mg = require("./didi") 

let cpu = os.cpus();
let plat = os.platform();
let us = os.userInfo();

let str = JSON.stringify(cpu);

/*fs.appendFile("micode.txt",`info del cpu: \n ${str}`, function(error){
    if(error){
        console.log("error al crear")
    }
})*/

//console.log(mg.edad);

//mg.edades;
console.log(mg.an);
mg.saludo();
mg.nuevo();
