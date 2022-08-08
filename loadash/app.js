const _ = require("lodash");

const argv = require("yargs").argv;

//let command = process.argv;


if (argv.user === 'diego') {
    let dicc1 = { "nom": "diego" };
    let dicc2 = { "apodo": "didi" };
    let listd = [{ nombre: "diego", apellido: "Ponzio", edad: 17 },
    { nombre: "diego", apellido: "Del Rio", edad: 12 }];
    let rest = _.assign(dicc1, dicc2);
    console.log(rest);

    _.times(3, () => {
        console.log("holas");
    });

    let rest2 = _.find(listd, { nombre: "diego" });

    console.log(rest2);
} else {
    console.log("uyyy no");
}


/*

*/

//console.log(argv);