/*

Enunciado Ejercicio 32:
Dado un array de números, devolver el array con sus números elevados al cuadrado.
(numero multiplicado por si mismo).
El array debe eliminar cualquier contenido que no sea numérico.

Ejemplos:
alCuadrado([5,6,7]);    // Devuelve: [25, 36, 49];
*/

// SOLUCION
const alCuadrado = (array) =>{
    array.filter(elemento =>{
        return typeof elemento == 'number';
    });

    return array.map(elemento =>{
        return Math.pow(elemento, 2);
    });
}