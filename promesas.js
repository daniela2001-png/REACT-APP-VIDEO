// promesas son objetos que toman como parametro dos funciones reject(error) y resolve(exito)
let  x = 10
const p = new Promise((resolve, reject) =>{
    if(x == 10){
        resolve('La variable es igual a 10');
    }else{
        reject('La variable no es igual a 10');
    }
});
console.log(p);
/*

JavaScript es un lenguaje de programación asincrono.
Lo que quiere decir esto es que al ejecutar código JavaScript
el hilo de ejecución continuará a pesar de encontrarse en situaciones en las que no obtenga un resultado
inmediatamente. 

por ejemplo usaqndo la funcion settimeout() dentro de un objeto promesa

*/
let mensaje = new Promise((resolve, reject)=>{
    setTimeout(function () {
        resolve('Este es el mensaje');
    }, 2000);
})
console.log(mensaje)

mensaje.then(m => console.log(m)) // despues de 2 segundos ejecutara la promesa sera el ultimo en ejcutarse en el call satck
console.log(mensaje)