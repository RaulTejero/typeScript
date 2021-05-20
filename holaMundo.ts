console.log("hola mundo");
// 1º Al compilar con el comando $ tsc archivo.ts, se genera el archivo .js
// 2º Una vez creado el .js ejecutamos con node $ node archivo.js 

// * Para evitar tener que estar ejecutando los dos archivos:
//   Instalar => npm install -g ts-node
//   Ejecutar => ts-node archivo.ts (esto compila primero el .ts  y luego ejecuta el .js) es lo mismo de arriba en un comando.

// * Mejor practica evitar los pasos anteriores y crear tsconfig.json para crear una estructura.
// En este caso con el comando tsc compilra todos los .ts y a la hora de ejecutar tendra que hacerlo nuevamente con node sobre el archivo .js


