/*

Enunciado Ejercicio 44:
Dado un array de strings, devolver otro con los valores que estén formados por más de dos palabras

Ejemplos:
dosPalabras(["hola", "san francisco", "ciudad real", "victor"]);

//Devuelve:
["san francisco", "ciudad real"]
*/

//SOLUCION
const dosPalabras = (array) => {
    let nuevoArray = [];
    for (const palabra of array) {
        if(palabra.split(' ').length >= 2){
            nuevoArray.push(palabra);
        }
    }
    return nuevoArray;
}