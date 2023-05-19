/*


Enunciado Ejercicio 17:
Dado un número, mostrar los numero de 1 hasta el número.
Pero para los múltiplos de tres imprimir "buzz" en lugar del número
y para los múltiplos de cinco imprimir "lightyear".
Para múltiplos de tres y cinco imprimen "BuzzLightyear"

Ejemplos:
buzz(5);

// Devuelve:
1
2
buzz
4
lightyear

*/

// SOlUCION
const buzz = (numero) => {
    let texto = `EJERCICIO BUZZLIGHTYEAR hasta el número: ${numero} \n`;
    for (let i = 1; i <= numero; i++) {
        if(i % 15 == 0){
            texto += 'BuzzLightyear \n';
        }else if(i % 5 == 0){
            texto += 'lightyear \n';
        }else if(i % 3 == 0){
            texto += 'buzz \n'
        }else{
            texto += i + "\n";
        }
    }
    return texto;
}