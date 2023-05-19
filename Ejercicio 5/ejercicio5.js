/*

Enunciado Ejercicio 5:
¿Cuánto es el x por ciento de x número?

Ejemplos:
tantoPorCiento(20,100)  //Devuelve: 20
tatoPorCiento(43, 897)  //Devuelve: 385.71

*/

//SOLUCION
const tantoPorCiento = (porcentaje, numero) =>{
    return "El " + porcentaje + "% de " + numero + " es: " + ((porcentaje * numero) / 100);
}