let calcular =  (n1,n2) =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            let sum = n1 + n2;
            if(sum > 50){
                res(n1+n2);
            } else {
                rej("Error en los datos");
            }

        },2000);
    });
}

module.exports = {
    calcular
};