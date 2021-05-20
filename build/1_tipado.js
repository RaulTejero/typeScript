// declaracion :tipado = asignacion
let numberX;
numberX = 3;
// solo deja asingnar numeros;
console.log(numberX); // 3
// tipos: string, boolean, number, any 
let data1 = "Roberto";
let data2 = "Martin";
let data;
data = data1 + " " + data2; // Roberto Martin
// tipos Array: string[]; Array<number> ----------------
let arra = [2, 55, 234];
let arra2 = [43, 67, 23, 56];
// Tupla: [string, boolean] ---------------------
let tupla = ["casa", true];
//literal: no permite cambiar el tipo de dato ni el valor -----------
let despedida;
//tipar varios tipos de datos ---------------------------
let varios;
//Enum: -----------------------------------------------------
// TODO: los valores los pone por defecto
var Estado;
(function (Estado) {
    Estado[Estado["Presencial"] = 0] = "Presencial";
    Estado[Estado["Online"] = 1] = "Online";
    Estado[Estado["Audio"] = 2] = "Audio"; //2
})(Estado || (Estado = {}));
let estado = Estado.Presencial;
console.log(estado); // 0
// TODO: asignar valores
var Estado2;
(function (Estado2) {
    Estado2[Estado2["Presencial"] = 3] = "Presencial";
    Estado2[Estado2["Online"] = 2] = "Online";
    Estado2[Estado2["Audio"] = -10] = "Audio"; //-10
})(Estado2 || (Estado2 = {}));
let estado2 = Estado2.Audio;
console.log(estado2); //-10
//UnKnow / Any: cualquier tipo ----------------
let sinTipo = 23;
sinTipo = "otro dato";
sinTipo = true;
//void : indica que la funcion no retorna nada ------------------
function saludo(param) {
    console.log(param);
}
saludo("Hola desde la funcion");
