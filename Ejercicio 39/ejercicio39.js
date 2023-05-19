/*

Enunciado Ejercicio 39:
Dado un texto, comprobar que sea un email valido.

Ejemplos:
comprobarEmail("victor@victor.com")     // Devuelve: true
*/

//SOLUCION
const comprobarEmail = (email) => {
    return (/[^\w+@\w+\.\w+$]/gi.test(email));
};