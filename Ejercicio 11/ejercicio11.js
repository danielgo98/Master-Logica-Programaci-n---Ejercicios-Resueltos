/*

Enunciado Ejercicio 11:
Dado un texto y una busqueda, censurar todas las coincidencias
de la búsqueda del texto con [-CENSURADO].

Si texto y búsqueda están vacíos mostrar
"No puedes leer el texto y la búsqueda" en el caso de que 
ambos parámetros no lleguen.

Ejemplos:
censurado("hola hola", "hola")  //Devuelve: [-CENSURADO-][-CENSURADO-]
censurado() //Devuelve: "No puedes leer el texto y la búsqueda"

Como hacerlo:
- Funcion que reciba un texto y una busqueda
- Condiciones en el caso de que algún parámetro de false
- Reemplazar la busqueda por [-CENSURADO-] en el texto.

*/

// SOLUCION
const censurado = (texto = false, busqueda = false) =>{
    let textoCensurado = "";

    if(!texto && !busqueda){
        textoCensurado = "No puedes leer el texto y la búsqueda";
    }else if (!texto && busqueda){
        textoCensurado = "No puedes leer el texto";
    }else if(texto && !busqueda){
        textoCensurado = "No puedes hacer la busqueda";
    }else{
        textoCensurado = texto.replace(new RegExp(busqueda, 'gi'), "[-CENSURADO-]");
    }
    return textoCensurado;
}