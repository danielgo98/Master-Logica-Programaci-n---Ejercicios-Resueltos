/*

Enunciado Ejercicio 37:
Dado un array o texto, devolver el elemento o palabras que más aparece.

Ejemplos:
elqQueMasAparece("victor robles victor");
elQueMasAparece(1,2,3,4,1);

// Devuelve:
victor
1
*/

//SOLUCION
const elQueMasAparece = (datos) =>{
    let map = {};
    let datoMayor = "";
    let numMayor = 0;

    if(typeof datos == 'string'){
        datos = datos.split(' ');
    }
    
    for (const dato of datos) {
        if(map[dato]){
            map[dato]++;
        }else{
            map[dato] = 1;
        }
    }

    for (const indice in map) {
        if(map[indice] > numMayor){
            numMayor = map[indice];
            datoMayor = indice;
        }
    }

    return `${datoMayor}: ${numMayor}`;
}