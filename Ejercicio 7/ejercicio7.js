/*
Enunciado Ejercicio 7:

Dados dos números devolver cuántos numeros IMPARES hay entre ellos.

Ejemplos:
impares(1, 100) //Devuelve: 50
*/

//SOLUCION
const impares = (inicio, fin) => {
    let impar = 0;

    for (let i = inicio; i < fin; i++) {
        if(i % 2 != 0){
            impar++;
        }
    }
    return impar;
}