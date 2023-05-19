/*

Enunciado Ejercicio 36:
Dado un texto, devolver cuantas consonantes y cuantas vocales tiene

Ejemplos:
cuentaLetras("victorroblesweb.es");

// Devuelve:
Consonantes: 5
Vocales:6 
*/

//SOLUCION
const cuentaLetras = (texto) =>{
    let numVocales = 0;
    let numConsonantes = 0;
    let textoLimpio = texto.split('').filter(letra => /[áéíóú\w]/gi.test(letra) && isNaN(letra)).join('');
    for (const letra of textoLimpio) {
        if(/[áéíóúaeiou]/gi.test(letra)){
            numVocales++;
        }else{
            numConsonantes++;
        }
    }

    return `Consonantes: ${numConsonantes} \nVocales: ${numVocales}`;

}