/*

Enunciado: 
Dibujar un cuadrado hueco con asteriscos.

Ejemplos:
cuadrado(4)

// Devuelve:

****
*  *
*  *
****

Camo hacerlo:
- Funcion para crear el lado de arriba y abajo del cuadrado
- Funcion que haga los lados y el hueco del cuadrado
- Bucle de 0 al tamaño del lado menos 2 para equilibrar con el asterisco de izq y dcha.
- Bucle para pintar los espacios, menos 2 para equilibrar con el asterisco de izq y dcha.
- Ir concatenando en una variable cada línea del cuadrado.
- Mostrar el cuadrado en la funcion principal.

*/

//SOLUCION
const lado = (numero) => {
    let lado = "";
    for (let i = 0; i < numero; i++) {
        lado += '*';
    }
    return lado;
}

const cuadrado = (numero) =>{
    let dibujo = lado(numero) + "\n";
    let ladoHueco = "*";

    for (let i = 0; i < numero - 2; i++) {
        ladoHueco = "*";

        for (let j = 0; j < numero - 2; j++) {
            ladoHueco += " ";
        }

        ladoHueco += "*";
        dibujo += ladoHueco + "\n";
    }

    dibujo += lado(numero);
    return dibujo;
}