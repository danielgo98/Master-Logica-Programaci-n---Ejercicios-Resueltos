/*

Enunciado Ejercicio 38:
Dado un número, mostrar listado de lols cuadrados
de todos los números naturales hasta llegar al mismo.
*/

//SOLUCION
const cuadrado = (numero) =>{
    let resultado = `Listado de cuadrados hasta el número ${numero}`
    for (let i = 0; i < numero; i++) {
        resultado += `Cuadrado de ${i} : ${Math.pow(i, 2)} \n`;
    }
    return resultado;
}

console.log(cuadrado(45));