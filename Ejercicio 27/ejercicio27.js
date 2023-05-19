/*

Enunciado Ejercicio 27:
Dado un número, mostrar a cuantos años, meses y días equivalen.

Ejemplos: 
calcularDias(920);

Equivale a 2 años, 6 meses y 10 días.
*/

//SOLUCION
const calcularDias = (dias) =>{
    let anios = Math.floor(dias / 365);
    let meses = Math.floor((dias % 365) / 30);
    let diasRestantes = ((dias % 365) % 30);

    return `Equivale a ${anios} años, ${meses} meses y ${diasRestantes} dias`;
}

console.log(calcularDias(92340));