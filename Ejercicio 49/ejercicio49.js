/*

Enunciado Ejercicio 49:
Dado un objeto, comprobar si existe una propiedad en concreto

Ejemplos:
existePropiedad(miObjeto, "nombre");    //Devuelve: true
*/

//SOLUCION
const existePropiedad = (objeto, propiedad ) =>{
    if(typeof objeto == "object" && typeof propiedad == "string" && hasOwnProperty.call(objeto, propiedad)){
        return true;
    }
    return false;
}