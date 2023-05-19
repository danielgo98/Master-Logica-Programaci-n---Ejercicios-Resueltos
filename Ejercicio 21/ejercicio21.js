/*

Enunciado Ejercicio 21:
Dada una cadena de texto y un número, recortar el string mostrando los x primeros caracteres

Ejemplos:
recortar('Cursos Desarrollo Web', 6)    // Devuelve: 'Cursos'
*/

// SOLUCION
const recortar = (texto, numero) => {
    return (typeof texto === 'string' && typeof numero === 'number') ? texto.substring(0, numero) : 'Datos incorrectos';
}