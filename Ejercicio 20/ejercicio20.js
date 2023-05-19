/*

Enunciado Ejercicio 20:
Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre sí.

Una cadena es un anagrama de otra si usa los mismos caracteres en la misma cantidad

No tener en cuenta espacios, simbolos raros, puntos, etc.
Ejemplos:
anagramas('Riesgo', 'Sergio)    // Devuelve: true
anagramas('Victor', 'Robles')   // Devuelve: false
*/

// SOLUCION
const limpiaTexto = (texto) => {
    return texto.replace(/[^\w]/gi, '').toLowerCase().split('').sort().join('');
}

const anagramas = (texto1, texto2) => {
    return (limpiaTexto(texto1) == limpiaTexto(texto2));
}