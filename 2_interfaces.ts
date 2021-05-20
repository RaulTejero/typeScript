// LA interface obliga a tener las propiedades y sus tipos -------------
interface Vehiculo {
    tipo: string;
    ruedas: number;
    puertas: number;
    color: string
}

function mostrar(params: Vehiculo) {
    console.log(`Tengo un ${params.tipo} de color ${params.color} con ${params.puertas} puertas. `);
}

const mazda: Vehiculo = {
    //estas obligado a poner las propiedades de las interfaces
    tipo:"coche",
    ruedas: 4,
    puertas: 5,
    color: "Rojo"
}

mostrar(mazda) //Tengo un coche de color Rojo con 5 puertas.


// propiedades opcionales "se indican con ?"--------------------
interface Motocicleta {
    modelo: string;
    cc: number;
    color?: string //opcional
}


function mostrarMoto(params: Motocicleta) {
    console.log(params);
}

const moto1:Motocicleta = {
    modelo: "Honda",
    cc: 125
}
const moto2:Motocicleta = {
    modelo: "Rieju",
    cc: 650,
    color: "verde"
}

mostrarMoto(moto1) // {modelo: Honda,cc: 125}
mostrarMoto(moto2) // {modelo: Rieju,cc: 650, color: verde}

// propiedades de solo lectura ------------------------------

interface Lados {
    readonly left: string;
    readonly rigth: string;
    readonly up: string;
    readonly down : string
}

let lados :Lados;
lados = {
    left: "izq",
    rigth: "derch",
    up: "arr",
    down: "abj"
}
//lados.down = "abajo"   (no deja modificar la propiedad)

// Interfaces funciones ------------------------------------

interface Busqueda {
    (valor:string, valor2r:string): boolean;
//  indicamos de que tipo son los parametros
}

const miBusqueda : Busqueda = (v:string,v2:string):boolean =>{
    if (v == "Hola") {
         return true;
    }else {
        return false
    }
}

console.log(miBusqueda("Hola","Ho"));//true


//interface en una clase-----------------------------
interface Transporte {
    year: number
}

class Coche implements Transporte {
    year: number;
    gasolina: boolean
    constructor(pYear: number, pGasolina: boolean){
        this.year = pYear;
        this.gasolina = pGasolina;
    }
}

class Tren implements Transporte {
    year: number;
    electrico: boolean
    constructor(pYear: number, pElectrico:boolean){
        this.year = pYear;
        this.electrico = pElectrico
    }
}

