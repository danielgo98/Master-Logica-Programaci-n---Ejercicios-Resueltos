/*

Enunciado Ejerciicio 19:
Dado un array de objetos de películas (titulo, director, vista)
mostrar todas las películas indicando cual has visto y cual no

Ejemplos:
misPeliculas(peliculas);

//  Devuelve:
Ya has visto: "El señor de los anillos de Peter Jackson"
Te falta por ver: "La Liga de la Justicia de Zack Snyder"
*/

//SOLUCION
const peliculas = [
    {
        title: "One piece Film Red",
        director: "Eiichiro Oda",
        vista: true
    },
    {
        title: "Cars",
        director: "Pixar",
        vista: true
    },
    {
        title: "El señor de los anillos",
        director: "Peter Jackson",
        vista: false
    }
];

const misPeliculas = (peliculas) =>{
    let resultado = "";
    
    for (const pelicula of peliculas) {

        if(pelicula.vista){
            resultado += `Ya has visto: ${pelicula.title} de ${pelicula.director} \n`;
        }else{
            resultado += `Te falta por ver ${pelicula.title} de ${pelicula.director} \n`;
        }    
    }
    return resultado;
}