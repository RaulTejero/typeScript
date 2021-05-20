function mostrar(params) {
    console.log(`Tengo un ${params.tipo} de color ${params.color} con ${params.puertas} puertas. `);
}
const mazda = {
    //estas obligado a poner las propiedades de las interfaces
    tipo: "coche",
    ruedas: 4,
    puertas: 5,
    color: "Rojo"
};
mostrar(mazda); //Tengo un coche de color Rojo con 5 puertas.
function mostrarMoto(params) {
    console.log(params);
}
const moto1 = {
    modelo: "Honda",
    cc: 125
};
const moto2 = {
    modelo: "Rieju",
    cc: 650,
    color: "verde"
};
mostrarMoto(moto1); // {modelo: Honda,cc: 125}
mostrarMoto(moto2); // {modelo: Rieju,cc: 650, color: verde}
let lados;
lados = {
    left: "izq",
    rigth: "derch",
    up: "arr",
    down: "abj"
};
const miBusqueda = (v, v2) => {
    if (v == "Hola") {
        return true;
    }
    else {
        return false;
    }
};
console.log(miBusqueda("Hola", "Ho")); //true
class Coche {
    constructor(pYear, pGasolina) {
        this.year = pYear;
        this.gasolina = pGasolina;
    }
}
class Tren {
    constructor(pYear, pElectrico) {
        this.year = pYear;
        this.electrico = pElectrico;
    }
}
