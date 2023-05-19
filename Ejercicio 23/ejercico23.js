/*

Enunciado Ejercicio 23:
Dada una cadena de texto, poner en mayúscula la primera letra de cada palabra en la cadena
y luego devolver la cadena

Ejemplos:
enMayuscula('hola soy victor')  //Devuelve: 'Hola Soy Victor'
*/

// SOLUCION
const enMayuscula = (texto) =>{
    let resultado = "";
    for (letra in texto) {

        if(texto[letra - 1] === " " || parseInt(letra) === 0){
            resultado += texto[letra].toUpperCase();
        }else{
            resultado += texto[letra];
        }

    }
    return resultado;
}

console.log(enMayuscula('hola soy daniel andres encantado de conocerte'));