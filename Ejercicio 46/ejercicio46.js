/*

Enunciado Ejercicio 46:
Dado un string devolver todos los posibles substrings

Ejemplos:
todosSubstrings("hola");

// Devuelve:
[
  'h',    'ho', 'hol',
  'hola', 'o',  'ol',
  'ola',  'l',  'la',
  'a'
]

*/

//SOLUCION
const todosSubstrings = (texto) => {
    let substrings = [];
    for (const letra in texto) {

        for (let i = 0; i <= texto.length - letra; i++) {

            let final = parseInt(i) + parseInt(letra);
            substrings.push(texto.substring(letra, final));
        }

    }
    return substrings.filter(palabra => palabra.length >= 1);
}

console.log(todosSubstrings('hola'));