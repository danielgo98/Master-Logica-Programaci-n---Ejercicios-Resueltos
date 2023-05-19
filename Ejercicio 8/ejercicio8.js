/*

Enunciado Ejercicio 8: 
Dado un númeor entero, inviertelo y devuelve de nuevo el entero.

invertirNumero(67)  //Devuelve: 76

*/

//SOLUCION
const invertirNumero = (numero) =>{
   return parseInt(numero.split('').reverse().join('')) * Math.sign(numero);
}