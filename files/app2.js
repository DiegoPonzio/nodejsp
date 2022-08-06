//const { error} = require("console");
const { Console } = require("console");
const fs = require("fs");
let data = "";

// manera ancincrona con error
fs.readFile("dta.txt", "utf-8", (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
//manera sincrona con error
try {
    data = fs.readFileSync("daa.txt", "utf-8");
} catch (e) {
    console.log(`Hay un error:\n${e}`);
}

console.log("hola");
if (data != "") {
    console.log(data);
}

//clonar un archivo
//fs.createReadStream("new_data.txt").pipe(fs.createWriteStream("data.txt"));