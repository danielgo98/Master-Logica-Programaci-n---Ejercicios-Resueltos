/*

Enunciado Ejercicio 13:
Dado un array, dividirlo en tantos sub-arrays
como sea necesario basándonos en un número que indique su tamaño.

Dividirlo en arrays de X elementos.
divideArray([7,8,9,10],2)

// Devuelve
[[7,8],[9,10].[5]]

*/

// SOLUCION
const divideArray = (arrayPrincipal, numero) =>{
    let arrays = [];

    for (const dato of arrayPrincipal) {
        let ultimo = arrays[arrays.length - 1];
        
        if(!ultimo || ultimo.length == numero){
            arrays.push([dato]);
        }else{
            ultimo.push(dato);
        }
    }
    return arrays;
}