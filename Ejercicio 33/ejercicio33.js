/*

Enunciado Ejercicio 33:
Haz un reloj en tiempo real que vaya mostrando la hora a cada segundo.

Solo puedes usar el objeto date para conseguir la hora por primera vez, 
pero no para actualizar la hora.

Ejemplos:
let mi_reloj = new Reloj();
mi_reloj.encender();

// Devuelve
14:20:16
14:20:17
14:20:18
*/

//SOLUCION
class Reloj {

    constructor(){
        this.fecha = new Date();
        this.horas = this.fecha.getHours();
        this.minutos = this.fecha.getMinutes();
        this.segundos = this.fecha.getSeconds();
    }
    actualizar(segundos){
        this.segundos += segundos;

        //Actualizar segundos
        if(this.segundos >= 60){
            this.minutos++;
            this.segundos = 0;
        }

        //Actualizar minutos
        if(this.minutos >= 60){
            this.horas++;
            this.minutos = 0;
        }

        //Actualizar horas
        if(this.horas >= 24){
            this.horas = 0;
        }
    }

    mostrar(){
        this.actualizar(1);
        console.log(`${this.horas}:${this.minutos}:${this.segundos}`)
    }

    encender(){
        setInterval(() =>{
            this.mostrar();
        }, 1000);
    }
}