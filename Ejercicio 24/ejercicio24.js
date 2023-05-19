/*

Enunciado Ejercicio 24:
Dada un array de enteros y un número, detectar si esa lista de números es una permutación del 1
al número aportado.

En este caso una permutación es una secuencia de números en orden sin que falte ninguno entre ellos.

Ejemplos:
permutacion([1, 2, 3, 4, 5], 5)    // Devuelve: true
permutacion([1, 2, 3, 5], 5)       // Devuelve: false
*/

//SOLUCION
const permutacion = (array, numero) => {
    for (let i = 0; i < numero; i++) {
        if(array.indexOf(i + 1) < 0){
            return false;
        }
    }
    return true;
}