/*

Dado un número, devolver su factorial.
El factorial de un número es la multiplicación
de todos los números hasta llegar a el.

Ejemplos:
factorial(3);   //Devuelve: 6
*/

//SOLUCION
const factorial = (numero) =>{
    let factorial = 1;

    for (let i = numero; i > 0; i--) {
        factorial *= i;
    }
    
    return factorial;
}