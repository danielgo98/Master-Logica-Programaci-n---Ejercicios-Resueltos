/*

Enunciado Ejercicio 42:
Dados dos números, sacar un número aleatorio entre ellos

Ejemplos
aleatorio(1, 100);  //Devuelve: 46
*/

//SOLUCION
const aleatorio = (minimo , maximo) => {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}