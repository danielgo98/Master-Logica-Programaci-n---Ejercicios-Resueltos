/*

Enunciado Ejercicio 16:
Dada una cadena de texto, devolver cuantas vocales (a,e,i,o,u) tieme

Ejemplos:
vocales("victorroblesweb.es")   //Devuelve: 6;

*/


// SOLUCION
const vocales = (texto) =>{
    return  texto.match(/[aáeéiíoóuú]/gi) ? texto.match(/[aáeéiíoóuú]/gi).length : 0;
}