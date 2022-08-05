console.log("holas gg");

let edad = 17;

module.exports.edad = edad;

function sal() {
    console.log("esto es un saludo");
}

module.exports.sal = sal();
module.exports.edades = edad;

//mejor forma

module.exports = {
    an: edad,
    saludo: function () {
        const os = require("os");
        let plat = os.platform();
        console.log("tu plataforma es: " + plat);
    },
    nuevo : function () {
        console.log("hola mundo");
    }
}