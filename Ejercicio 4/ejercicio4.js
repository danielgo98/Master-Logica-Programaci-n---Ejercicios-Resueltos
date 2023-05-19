/*

Enunciado Ejercicio 4:
Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, 
sin usar métodos propios del lenguaje, solo estructuras de control.

Ejemplos:
invertir('hola')    //Devuelve: 'aloh'
invertir('victor')  //Devuelve: 'rotvic'
invertir('robles)   //Devuelve: 'selbor'
*/

//SOLUCION
const invertir = (frase) =>{
    let fraseReves = "";

    for (const palabra of frase) {
        fraseReves = palabra + fraseReves;
    }
    return fraseReves;
}