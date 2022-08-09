const request = require("request");
const argv = require("yargs").argv;

let dirr = argv.dirr;
let key = "AIzaSyDTB5aHPWmmhcaINOBLrTrQ9ADg00Sm7xg";
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${dirr}&key=${key}`;

request({
    url : url,
    json : true 
}, (error, response, body) =>{
    console.log(body);
});