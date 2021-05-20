interface Vehiculo {
    tipo: string;
    ruedas: number;
    puertas: number;
    seguroIncluido: boolean
}

function mostrar(params: Vehiculo) {
    console.log(params);
}

const mazda: Vehiculo = {
    //estas obligado a poner las propiedades de las interfaces
    tipo:"coche",
    ruedas: 4,
    puertas: 5,
    seguroIncluido: false
}

mostrar(mazda)


// propiedades opcionales