/*

Enunciado Ejercicio 41:
Dado un número, mostrar un triangulo de asteriscos *
con ese número de filas.

Ejemplos:
triangulo(4)    //Devuelve:
   *   
  ***  
 ***** 
*******

*/

//SOLUCION
const triangulo = (numero) => {
    let mitad = Math.floor(numero - 1);
    let triangulo = "";

    for (let i = 0; i < numero; i++) {
        let nivel = "";

        for (let j = 0; j < (2 * numero - 1); j++) {

            if(mitad - i <= j && mitad + i >= j){
                nivel += "*";
            }else{nivel += " "
            }
        }

        triangulo += nivel + "\n";
    }
    return triangulo;
}