// function sumar(a, b) {
//     return a + b
// }
//Formas de declaracion---------------------------
//nombreFuncion : tipoFuncion (parametros) => retornaNumber = funcion():retornaNumber
const sumar = (numero1, numero2) => {
    return numero1 + numero2;
};
const sumar3 = function (a, b) {
    return a + b;
};
const sumar2 = (numero1, numero2) => {
    return numero1 + numero2;
};
// parametros opcionales y valores por defecto------------------------
function nombreCompleto(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return nombre;
    }
}
console.log(nombreCompleto("Luis", "Alvarez"));
function nombreCompleto2(nombre, apellido = "Martin") {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return nombre;
    }
}
console.log(nombreCompleto2("Luis", "Sancho"));
console.log(nombreCompleto2("Luis"));
//parametros Rest --------------------------
function nombreCompleto3(nombre, ...resroApellidos) {
    return nombre + " " + resroApellidos.join(" ");
}
console.log(nombreCompleto3("Luis", "De los santos", "Lotero", "Conchinchina"));
