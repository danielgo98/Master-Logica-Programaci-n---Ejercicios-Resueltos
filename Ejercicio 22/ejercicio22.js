/*

Enunciado Ejercicio 22:
Dados dos números, indicar cual es mayor y cual es menor

Ejemplos: 
mayorMenor(8, 6)

// Devuelve:
EL NUMERO MAYOR ES: 8
EL NUMERO MENOR ES: 6
*/

// SOLUCION
const mayorMenor = (numero1, numero2) => {
    let resultado = "";

    if(numero1 > numero2) {
        resultado += `EL NUMERO MAYOR ES: ${numero1} \n`;
        resultado += `EL NUMERO MENOR ES: ${numero2}`;
    }else if(numero1 < numero2){
        resultado += `EL NUMERO MAYOR ES: ${numero2} \n`;
        resultado += `EL NUMERO MENOR ES: ${numero1}`;    
    }else{
        resultado += 'Los números son iguales';
    }
    return resultado;
}