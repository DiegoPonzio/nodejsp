function validar(formulario){
    //obtener los datos y discriminar a los que tiene 3 letras
    if(formulario.nombre.value.length <= 3){
        alert("Escriba por lo menos 3 caracteres en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "QWERTUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
            
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }


    var checkOK = "0123456789";

    var checkStr = formulario.edad.value;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
            
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente numeros en el campo Edad");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.email.value;

    //creo mi expresion regular
    //algo@algo   o algo@algo.algo
    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)?" ":" no ")+" valido");

    return b.test;


}