/*
Enunciado Ejercicio 30:
Dado un array de número, devolver el array sin elementos duplicados
si hay un string eliminarlo del array

Ejemplos:
eliminarDuplicados([1,2,1,1,1,3,4]);    // Devuelve: [1,2,3,4]
*/

//SOLUCION
const eliminarDuplicados = (array) =>{
    array.filter(elemento => {
        return typeof elemento == 'number';
    });
    return Array.from(new Set(array));
}