/*

Enunciado Ejercicio 35:
Dados un array, crear otro con el primer y último elemento del original.

Ejemplos:
primeroYultimo([100, 200, 300, 700])    // Devuelve: [100, 700]
*/

//SOLUCION
const primeroYultimo = (array) => {
    let arrayNuevo = [];
    arrayNuevo.push(array[0], array[array.length - 1]);
    return arrayNuevo;
}