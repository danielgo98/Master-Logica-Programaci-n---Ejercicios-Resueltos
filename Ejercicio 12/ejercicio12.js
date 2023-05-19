/*


Enunciado Ejercicio 12:
Dado un número mostrar todos los números desde ese al 0 de 8 en 8
en una lista con guiones y cada número debe empezar por nº.
*/


// SOLUCION
const hastaCero = (numero) => {
   let numeros = `--- Del ${numero} al 0 --- \n`;
    while (numero > 0) {
        numeros += `-nº${(numero)} \n`;
        numero -= 8;
    }
    numeros += '--- FIN ---';
    return numeros;
}