/*

Enunciado Ejercicio 45:
Dado un array de alumnos (nombre y nota) mostrar cuantos alumnos están suspensos y cuantos están aprobados.
*/

//SOLUCION
const suspensos = (alumnos) => {
    let aprobado = 0;
    let suspenso = 0;
    for (const alumno of alumnos) {
        (alumno[1] >= 5) ? aprobado++ : suspenso++;
    }
    return {
        "aprobados": aprobado,
        "suspensos" : suspenso
    };
}