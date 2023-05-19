/*

Enunciado Ejercicio 25:
Dado un String ponerlo completo en mayusculas o minusculas
dependiendo de si hay más mayúsculas o minúsculas por defecto en el string
Si hay más mayusculas ponerlo todo en mayus
Su hay más minúsculas ponerlo todo en minus.

Ejemplos: 
mayusMinus('JOAQuin')   // Devuelve: JOAQUIN
mayusMinus('Victor')   // Devuelve: victor 
*/

// SOLUCION
const mayusMinus = (texto) => {
    let mayus = 0;
    let minus = 0;
    let resultado = "";

    for (const letra of texto) {
        if(letra == letra.toUpperCase()){
            mayus++;
        }else{
            minus++;
        }
    }

    if(mayus > minus){
        resultado = texto.toUpperCase();
    }else{
        resultado = texto.toLowerCase();
    }

    return resultado;
}