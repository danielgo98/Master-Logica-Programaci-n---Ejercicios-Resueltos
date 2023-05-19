/*

Enunciado Ejercicio 47:
Dado un array de objetos, devolver cuales son las aficiones más comunes de los usuarios.

Ejemplos: 
aficiones(usuarios)
// Devuelve:

{informatica: 6, cine: 7, futbol: 2, videojuegos: 1}

*/

//SOLUCION

const usuarios = [
    {
    nombre: "Victor",
    aficiones: ["informatica", "cine", "videojuegos"]
    },
    {
        nombre: "Juan",
        aficiones: ["cine", "futbol", "tenis"]
    },
    {
        nombre: "Paco",
        aficiones: ["informatica", "cine", "surf"]
    },
    {
        nombre: "Pepe",
        aficiones: ["informatica", "cine", "futbol", "surf"]
    }
];

const aficiones = (usuarios) => {
    let mapeoAficiones = {};

    for (const usuario of usuarios) {

        for (const aficion of usuario.aficiones) {
            if(!mapeoAficiones[aficion]){
                mapeoAficiones[aficion] = 1;
            }else{
                mapeoAficiones[aficion]++;
            }
        }

    }
    return mapeoAficiones;
}

console.log(aficiones(usuarios));