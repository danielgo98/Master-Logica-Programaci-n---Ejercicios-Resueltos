/*

Enunciado Ejercicio 9:
Dados dos arrays, devolver el array con solo los elementos comunes entre ambos.


Ejemplos:
elementosComunes([4,5,6,7], [7,8,9,7,5])    //Devuelve: [5,7]

Como hacerlo:
- Funcion que reciba dos arrays
- Filtrar array y evaluando una condicion
- Devolver array nuevo
*/

// SOLUCION
const elementosComunes = (array1, array2) =>{
    return array1.filter(comun => array2.includes(comun));
}