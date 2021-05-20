// function sumar(a, b) {
//     return a + b
// }

//Formas de declaracion---------------------------

//nombreFuncion : tipoFuncion (parametros) => retornaNumber = funcion():retornaNumber

const sumar: (a: number, b: number) => number = (numero1: number, numero2: number): number => {
    return numero1 + numero2;
}

const sumar3: (numero1: number, numero2: number) => number = function (a, b) {
    return a + b;
}

const sumar2 = (numero1: number, numero2: number): number => {
    return numero1 + numero2;
}

// parametros opcionales y valores por defecto------------------------

function nombreCompleto(nombre:string,apellido?:string):string {
    if (apellido) {
        return nombre+" "+apellido;    
    }else {
        return nombre;
    }
}

console.log(nombreCompleto("Luis","Alvarez"));



function nombreCompleto2(nombre:string,apellido:string ="Martin"):string {
    if (apellido) {
        return nombre+" "+apellido;    
    }else {
        return nombre;
    }
}

console.log(nombreCompleto2("Luis","Sancho"));
console.log(nombreCompleto2("Luis"));



//parametros Rest --------------------------
function nombreCompleto3(nombre:string,...resroApellidos:string[]):string {
 return nombre+ " "+resroApellidos.join(" ")
}

console.log(nombreCompleto3("Luis","De los santos","Lotero","Conchinchina"));
