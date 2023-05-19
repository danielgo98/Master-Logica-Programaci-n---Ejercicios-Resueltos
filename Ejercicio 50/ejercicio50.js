/*

Enunciado Ejercicio 50:
Dado un número, devolver cuántos bucles tiene.
Un número tiene un bucle cuando tiene un círculo cerrrado
cuando tiene lo dibujas, por lo que 6 tiene un bucle,
1 no tiene bucle y 8 tiene dos bucles.

Ejemplos:
bucles(28861)   //Devuelve: 5
*/

//SOLUCION
const bucles = (numeros) => {
    let bucles = 0;
    
    for (const numero of numeros.toString()) {
        if(numero == 0 || numero == 6 || numero == 9){
            bucles ++;
        }else if(numero == 8){
            bucles += 2;
        }
    }

    return bucles;
}