const fs = require("fs");
let text = "";

separar = (text) => {
    let re = /\r\n/g;
    let sep = text.split(re);
    console.log(sep);
}

fs.readFile("new_data.txt", "utf-8", (error, data) => {
    if(error){
        console.log(`Se produjo un error\n${error}`);
    } else {
        text = data;
        //console.log(data);
        separar(text);
    }
});
//sincrono
let data = fs.readFileSync("new_data.txt", "utf-8", (error) => {
    if (error){
        console.log(`Se produjo un error\n${error}`);
    };
});
console.log(data);
console.log("fin");


/*asincrrono
fs.rename("new_data.txt", "new_data.txt", (error) => {
    if(error) throw error;
    console.log("Se renombro");
});*/

text = "nuevo texto agregado";

fs.appendFileSync("new_data.txt", text);