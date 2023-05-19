/*

Enunciado Ejercicio 51:
Dado un array de números, devolver un array nuevo con los números pares e impares separados

Ejemplos:
pares([1,2,3,4])

//Devuelve:
{
    pares: [2,4]
    impares: [1,3]
}
*/
//SOLUCION
const pares = (array) =>{
    return {
        pares: array.filter(numero => numero % 2 == 0),
        impares: array.filter(numero => numero % 2 != 0)
    }
}