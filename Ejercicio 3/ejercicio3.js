/*

Enunciado Ejercicio 3:
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La frase y la palabra deben ser parámetros de una función.

Ejemplos:
coincidencias("hola soy una palabra en una frase, PALABRA", "palabra") //devuelve: 2
coincidencias("soy la frase", "victor") // Devuelve: 0
*/

//SOLUCION
const coincidencias = (frase, busqueda) => {
    const palabras = frase.toLowerCase().replace(/[!¡.,-]/gi, '').split(" ");
    let contador = 0;
    for (const palabra of palabras) {
        if(palabra === busqueda.toLowerCase()){
            contador ++;
        }
    }
    return contador;
}