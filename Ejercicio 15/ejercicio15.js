/*

Enunciado Ejercicio 15:
Dada una cadena de texto, devolver el caracter más usado

Ejemplos:
masUsado("victorRoblesweb.es")

//Devuelve:
La que más se repite es: e

Como hacerlo:
- Crear una funcion que reciba el texto
- Mapear letras en un json
- Recorremos el mapeo
- Hacemos condicion para ver que contador es mayor

*/
const masUsado = (texto) =>{
    let  mapLetras = {};
    let maxRep = 0;
    let letraMax = "";

    for (const letra of texto) {
        if(!mapLetras[letra]){
            mapLetras[letra] = 1;
        }else{
            mapLetras[letra]++;
        }
    }

    for (const letra in mapLetras) {
        if( mapLetras[letra].toString().trim().length == 1 && mapLetras[letra] > maxRep){
            maxRep = mapLetras[letra];
            letraMax = letra;
        }
    }

    return letraMax;
}

console.log("La letra más repetida es: " + masUsado("hola caracola"));