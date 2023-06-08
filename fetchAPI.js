//js sincrono es una fncion de que algo arriba de ella se ejecute correctamente; de la linea 1-7 encuentra problemas no ejecutara la linea 8.
console.log("Inicia Sincrono");

function dosSync(){
    console.log("Se ejecuta la funcion dos");

}

function unoSync(){
    console.log("Se ejecuta la funcion uno");
    dosSync();
    console.log("Se ejecuta el codigo tres");
}

unoSync();
console.log("Fin de sincrono");


/*

ejemplos de tareas sincronas: ciclos, invocaciones a funciones, eventListeners(especificamente cuando necesito el click), condicionales y todo lo que tenga que ver con toma de decisiones, prompts y alerts.

*/

//js asincrono
console.log("Inicio de Asincrono");
function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    },5000);

}

function unoAsync(){
    dosAsync();
    console.log("tres");
}

unoAsync();
console.log("Fin de Asincrono");

/*
ejemplos de operaciones asincronas
-funcion setTimeout
-notificaciones de cierre de sesion en apps bancarias
-spotify con su cola de reproduccion
-conexiones al servidor
-las cargas de APIs
-ya que entendemos que la asincronuia nos servira para conectarnos a un servidor y que sin importar la respuesta que este nos de, exitosa o no, o incluso el tiempo que tarde en responder, milisegundos o segundos, es necesario saber que hay varios mecanismos para manejar operaciones asincronas en js.

-callbacks, llamadas de vuelta, la forma clasica de gestionar la asincronia
-promises, promesas, forma moderna
-Async/Await, forma moderna pero una sintaxis más corta, más ligera

*/

/*
que es un callback (llamada de vuelta)

un callback es una funcion que se pasa como argumento a otra funcion. Esta fucnion sejecutara despues de que la otra lo haga. este mecanismo nos ayuda a controlar que cierto codigo no se ejecute antes de que el otro termine.

para que las necesitamos?
sabemos que js trabaja de forma descendente, entonces habra casos que queramos jacer que un codigo se ejecute despues de que ocurra otra cosa y tambien de forma no secuencial */

/*
function hazClick(){
    console.log("le hiciste click a un boton")
}

const boton = document.getElementById("boton");
boton.addEventListener("click", hazClick);


*/

//ejemplo de callback

//defino una funcion que toma un numero y un callback (funcion) como parametros
function dobleNumero(num, callback){
    const resultado = num*2; //operacion comun
    callback(resultado); //invocacion de ese callback con el resultado como parametros
}

// definir una funcion para mostrar el resultado

function mostrarResultado(resultado){
    console.log("el resultado es: ", resultado);
}

dobleNumero(5, mostrarResultado);