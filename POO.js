/*
Programacion orientada a objetos en javascript

paradigamde programacion que nos permite crear soluciones a problemas que se nos presetan, tomando como ejemplo los objetos del mundo real.
otras formas de programar
-programacion funcional
-programacion imperativa
-programacion declarativa



*/

// creacion de un objeto casa (atributos)

//arreglos (objeto)
var casaArreglo = [3,2,1,"Rojo"]; //

//jemplo de un objeto key-value
const casa={
    numHabitaciones : 3,
    numPisos :2,
    numBanios :1,
    color : "Rojo"
};

casa.color="blue";
console.log(casa.color);

//inv clases funciones constructoras de js

//plantilla para repetir 50 veces la misma casa, cambiar solo el color. (estnadarizar esa produccion en cadena).

//instruccion crear 50 casas, con la misma estructura pero colores diferentes

//clase para generar una plantilla, esta plantilla va a tener predefinidas las llaves (keys) de nuestras propiedades y cada que instancie o cree un nuevo objeto, esa informacion se va a ir personalizado.


class casaPlantilla{
    //definir mis propiedades como variables, para posteriormente agregarle valores
    numHabitaciones = 0;
    numBanios = 0;
    numPisos = 0;
    color = "";


    //3. definir una funcion constructora . esta funcion es una fucntion especial que se dedica unicamente a tomar los datos que definimos como variables, para usarlas coomo parametros de construccion y asi poder instanciar nuestro objeto.
    //estrictamente deben ser pasados en el orden como se declararon, para que cada valor que se use, se asigne a la variable correspondiente
    constructor(numHabitaciones, numBanios, numPisos, color){
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.numPisos = numPisos;
        this.color = color;
    }
    //2. definimos los metodos como funciones, porque estas funciones nos dicen que es lo que puede hacer el objeto

    encenderLuces(){
        console.log("click, Luces encendidas");

    }

    abrirVentanas(){
        console.log("Swiiift, ventana abiertas");
    }

    guardarmeDelFresnito(){
        console.log("Que agusticidad");
    }

    imprimirInfoDeLaCasa(){
        console.log("El numero de habitaciones es de:" + this.numHabitaciones);
    }

}

//en la clase definimos todo de forma "normal" (declaran las variables como normalmente se utilizan con signo de igual y punto y coma (numHabitaciones=0;), pero el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor )
/* Instanciar un objeto

paraa instanciar objetos, usamos lo siguiente Sintaxis:
variable con nombre = palabra reservada new referenciadelaclase(parametros de consttruccion)

let objeto= new Clase Objeto(parametros)


*/
//tengo una variable llamada casaDeFelipe que es un nuevo objeto de la clase casaPlantilla y que tiene los siguientes parametros.
let casa1 = new casaPlantilla(2,2,2,"Verde");


console.log(casa1);
console.log(casa1.numPiso);
casa1.encenderLuces();

//Ejemplo de POO con gatitos

class gatitos{
    //1. propiedades
    nombre = "";
    edad=0;
    tamanio="";
    caracter ="";
    numeroVidas = 0;
    color = "";
    raza = "";
    vacunas = false;

    //3. constructor

    constructor (nombre,edad,tamanio,caracter,numeroVidas,color,raza,vacunas){
        this.nombre = nombre;
        this.edad = edad;
        this.tamanio=tamanio;
        this.caracter=caracter;
        this.numeroVidas = numeroVidas;
        this.color =color;
        this. raza =raza;
        this.vacunas = vacunas;

    }

    //2.metodos
    imprimirInfo(){
        console.log("El nombre de mi gato es: ", this.nombre);
        console.log("edad de mi gato es: ", this.edad);
        console.log("tamanio de mi gato es: ", this.tamanio);
        console.log("El caracter de mi gato es: ", this.caracter);
        console.log("El numero de vidas de mi gato es: ", this.numeroVidas);
        console.log("El color de mi gato es: ", this.color);
        console.log("la raza de mi gato es: ", this.raza);
        console.log("el gatos esta vacunado?: ", this.vacunas);
    }

    maullar(){
        console.log("Rrrrrr");
    }

    rasguniar(){
        console.log("el gato esta rasguniando el sofa");
    }

    cuidarGato(){
        if(this.numeroVidas<3){
            console.log("Cuida a tu gato porque tiene pocas vidas");

        }
    }



}

//instanciar
let juanchoDelCampo = new gatitos("juancho Del campo", 5, "Grande", "Tranquilo", 2, "naranja", "angora", true);
let gatubelo = new gatitos("Gatubelo", 3, "Mediano", "Tranquilo", 2, "Gris", "No aplica", true);
let perejil = new gatitos("Perejil", 5, "Mediano", "Tranquilo", 4, "Negro", "No aplica", true);
let cucho = new gatitos("Cucho", 4, "Chico", "Tranquilo", 5, "Rosado", "No aplica", true);
let donGato = new gatitos("Don Gato", 7, "Grande", "Travieso", 1, "Amarillo", "No aplica", true);
let benito = new gatitos("Benito", 2, "Chico", "Tranquilo", 9, "Azul", "No aplica", true);

juanchoDelCampo.cuidarGato();

/* 

JSON es un formato estandar basado en texto(string) para representar datos estructurados(objetos) basados en la sintaxis de objetos de JavaScript({,:})

Json es una estructura de datos(mantiene la estructura de un objeto de js normal), que nos permite guardar datos en forma de objetos. la unica diferencia este que estos datos se guardan en un formato de exto para poder hacer comunicacion con nuestro servidor.

para poder comunicarnos con un servidor  necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado
*/

//objeto normal de js

objeto = {
    nombre: "Felipe",
    edad: 15

}

console.log(objeto);

/*como nuestro servidor no interpreta objetos de js, necesitamos convertirlos a cadenas de texto . este proceso se le conoce como serializar.

sintaxis para pasar de objeto normal de js a json es
JSON.stringify(objeto que quiero serializar)

*/
let objetoSerializado = (JSON.stringify(objeto));
console.log(objetoSerializado.nombre);

//para deserizalizar un objeto  hacemos unso del metodo JSON.parse()

let objetoDeserializado = JSON.parse(objetoSerializado);
console.log(objetoDeserializado.nombre);


