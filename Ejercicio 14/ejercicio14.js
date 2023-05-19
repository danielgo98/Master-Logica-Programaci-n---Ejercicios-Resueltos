/*
Enunciado Ejercicio 14:
Dado un string y un número, repetir el string tantas veces como indique el número

Ejemplos:
repiteme("victor", 2)   // Devuelve: victorvictor
*/

// SOLUCION
const repiteme = (palabra,numero) =>{
    let palabras = "";
    for (let i = 0; i < numero; i++) {
        palabras += `${palabra} `;
    }
    return palabras;
}