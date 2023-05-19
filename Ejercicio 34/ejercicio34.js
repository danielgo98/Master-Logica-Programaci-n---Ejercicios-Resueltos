/*

Enunciado Ejercicio 34:
Dados dos números, devolver los resultados de las operaciones
básicas entre ellos (suma, resta, multiplicacion, division);

Ejemplos:
calculadora(5,5);

// Devuelve
La suma es: 10
La resta es: 0
La multiplicacion es: 25
La division es: 1
*/

// SOLUCION
const calculadora = (numero1, numero2) =>{
    return `
        La suma es: ${numero1 + numero2} \n
        La resta es: ${numero1 - numero2} \n
        La multiplacion es: ${numero1 * numero2} \n
        La division es: ${numero1 / numero2}
    `;
}