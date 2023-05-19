/*
Enunciado:
Dado un número, devolver su tabla de multiplicar completa.
Ejemplos:
- Ejecuto esta función:
tablaMultiplicar(5);

Como hacerlo:
- Función con parámetro "numero"
- variable con texto encabezado;
- Bucle del 1 al 10
- Concatenar la variable stirng con multiplicación y su resultado
*/
 
//SOLUCION
const tablaMultiplicar = (num) =>{
    console.log(`Tabla del ${num}`);
    for (let i = 0; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num*i)); 
    }
}