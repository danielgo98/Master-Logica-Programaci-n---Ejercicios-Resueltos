/*

Enunciado Ejercicio 10:
Dado un número, mostrar una escalera con escalones de "[-]"
usando el número para los niveles de la escalera.

Ejemplos: 
escalera(4) //Devuelve: 
[-]
[-][-]
[-][-][-]
[-][-][-][-]
*/

// SOLUCION
const escalera = (numero) =>{
    let dibujo = "";

    for (let i = 1; i <= numero; i++) {

        for (let j = 1; j <= i; j++) {
            dibujo += "[-]";
        }

        dibujo += "\n";
    }
    return dibujo;
}