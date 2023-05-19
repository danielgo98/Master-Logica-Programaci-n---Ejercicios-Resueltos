/*

Enunciado Ejercicio 48:
Dado un String, devolver cuales son las letras que aparecen solo una vez y cual es la primera

EjemploS:
soloUnaVez("frase frase HOY")   //Devuelve: [["H", "O", "Y"], "H"]
*/

//SOLUCION
const soloUnaVez = (frase) =>{
    let contadores = {};
    let resultado = [];
    const letras = frase.split('').filter(letra => letra.trim().length >= 1);

    for (const letra of letras) {
        if(!contadores[letra]){
            contadores[letra] = 1;
        }else{
            contadores[letra]++;
        }
    }

    for (const letra in contadores) {
        if (contadores[letra] == 1) {
            resultado.push(letra);
        }
    }

    return [resultado, resultado[0]];
}