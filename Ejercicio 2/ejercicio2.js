/*
Enunciado Ejercicio 2:
Dada una cadena de texto, comprobar si es un palíndromo o no.
Los palíndromos son palabras que se leen igual aun estando inveritidas
Por ejemplo: ana, bob, otto, allivessevilla

No tener en cuenta espacios o simbolos raros

Ejemplos:
palindromo("otto") // devuelve: true
palindromo("victor") // devuelve: false
*/

//SOLUCION
const palindromo = (texto) => {
    const fraseInvertida = texto.split('').reverse().join('');
    return fraseInvertida == texto;
}