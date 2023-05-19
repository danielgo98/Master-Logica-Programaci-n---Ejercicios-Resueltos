/*

Enunciado Ejercicio 40:
Dado un array de números, devolver el valor más bajo y el valor más alto.

Ejemplos:
altoBajo([1,2,3,4,5]);

//Devuelve:
{
    bajo: 1,
    alto: 5
}
*/

//SOLUCION
const altoBajo = (array) =>{
    const arrayOrdenado = array.sort((a,b) => a - b);
    return {
        "bajo": arrayOrdenado[0],
        "alto":  arrayOrdenado[arrayOrdenado.length - 1]
    };
}