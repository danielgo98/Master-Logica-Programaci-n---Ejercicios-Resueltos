/*

Enunciado Ejercicio 18:
Dado un número, mostrar todos sus números divisores.

Ejemplos:
mostrarDivisores(5);

// Devuelve
1
5
*/

// SOLUCION
const mostrarDivisores = (numero) =>{
    let resultado = `Divisores de ${numero}: \n`;

    for (let i = 0; i <= numero; i++) {
        if(numero % i == 0){
            resultado += i + "\n";
        }
    }

    return resultado;
}

console.log(mostrarDivisores(8));