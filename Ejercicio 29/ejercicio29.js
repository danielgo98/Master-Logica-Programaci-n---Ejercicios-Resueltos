/*

Enunciado Ejercicio 29:
Dado un número, indicar si es un número capicua o no.
Los números capicúa se leen igual de izquierda a derecha y viceversa.

Ejemplos:
capicua(2002)   // Devuelve: true
capicua(2014)  // Devuelve: false
*/

//SOLUCION
const capicua = (numero) =>{
   const numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
   return numeroInvertido == numero;
}