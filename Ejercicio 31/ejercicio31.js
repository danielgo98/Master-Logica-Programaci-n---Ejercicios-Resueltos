/*
Enunciado Ejercicio 31:
Dado un número indicar que tipo de ángulo es.
Ejemplos:
angulo(47)
angulo(90)
angulo(145)
angulo(180)

//Devuelve:
Ángulo agudo
Ángulo recto
Ángulo obtuso
Ángulo llano
*/
//SOLUCION
const angulo = (numero) =>{
    let tipoAngulo = "";

    if(numero == 90){
        tipoAngulo = 'Ángulo Recto';
    }else if(numero == 180){
        tipoAngulo = 'Ángulo Llano';
    }else if(numero == 360){
        tipoAngulo = 'Ángulo Completo';
    }else if(numero > 0 && numero < 90){
        tipoAngulo = 'Ángulo Agudo';
    }else if(numero > 90 && numero < 180){
        tipoAngulo = 'Ángulo Obtuso';
    }else if(numero > 180 && numero < 360){
        tipoAngulo = 'Ángulo Cóncavo';
    }

    return tipoAngulo;
}