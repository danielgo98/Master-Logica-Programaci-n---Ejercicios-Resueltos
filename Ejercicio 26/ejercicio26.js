/*

Enunciado Ejercicio 26:
Dado un número, mostrar su serie de Fibonacci.
La serie de Fibonacci es un orden de números
donde cada número es la suma de los dos anteriores.

Ejemplos:
fib(10)[0]
fib(10)[1]

Serie completa: 0,1,1,2,3,5,8,13,21,24,55
Resultado de la serie de Fibonacci: 55.

*/

//SOLUCION
const fibonacci = (numero) =>{
    let serie = [0,1];

    for (let i = 2; i <= numero; i++) {
        serie.push(serie[i -1] + serie[i - 2]);
    }

    return [serie, serie[numero]];
}