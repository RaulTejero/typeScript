// declaracion :tipado = asignacion
let numberX: number;
numberX = 3
// solo deja asingnar numeros;

console.log(numberX); // 3

// tipos: string, boolean, number, any 
let data1 : string = "Roberto";
let data2 : string = "Martin";
let data : string;
data = data1+" "+data2; // Roberto Martin

// tipos Array: string[]; Array<number> ----------------
let arra : number[] = [2,55,234]
let arra2 : Array<number> = [43,67,23,56];

// Tupla: [string, boolean] ---------------------
let tupla : [string,boolean] = ["casa",true];

//literal: no permite cambiar el tipo de dato ni el valor -----------
let despedida: "adios";

//tipar varios tipos de datos ---------------------------
let varios: string|number;


//Enum: -----------------------------------------------------
// TODO: los valores los pone por defecto
enum Estado {
    Presencial, //0
    Online, //1
    Audio //2
}

let estado : Estado = Estado.Presencial;
console.log(estado); // 0

// TODO: asignar valores
enum Estado2 {
    Presencial = 3, //3
    Online = 2, //2
    Audio = -10 //-10
}
let estado2 : Estado2 = Estado2.Audio;
console.log(estado2); //-10

//UnKnow / Any: cualquier tipo ----------------
let sinTipo: unknown = 23;
sinTipo = "otro dato";
sinTipo = true;

//void : indica que la funcion no retorna nada ------------------
function saludo(param:string): void {
    console.log(param);
}

saludo("Hola desde la funcion")