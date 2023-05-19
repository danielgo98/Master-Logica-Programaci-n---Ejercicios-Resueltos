/*

Enunciado Ejercicio 43:
Dado un array de números, sacar la media de todos ellos.

Ejemplos:
laMedia([1,2,3]);   //Devuelve: 3
*/


//SOLUCION
const laMedia = (array) =>{
    let sumaNumeros = array.reduce((valorAcumulado, numeroActual) => {
        return valorAcumulado + numeroActual;
    });

    return sumaNumeros/ array.length;
}