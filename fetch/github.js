import("node-fetch");
let name = "";


//const fetch = fetch;
//require("node-fetch");

let promesa = fetch("https://api.github.com/users/DiegoPonzio");
promesa.then((res) => {
        return res.json();
    }).then((json => {
        name = json.id
        console.log(json);

    }));
