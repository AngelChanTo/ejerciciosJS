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

/*
promises

son otro mecanismo  para manejar la asincronia. utilizar promesas hace que el codigo sea más legible y practico que el usar callbacks, y como su nombre lo indica una promesa es algo que en un principio no sabemos si se va a cumplir pero en el futuro pueden pasar varios casos. la gran ventaja de utilizar promesas es que evitamos anidar muchas funciones, y usamos una sola funcion (metodo) para manejar las callbacks

promise.then
prommise.catch

las promesas tienen estados:

-pendiente(pending) es el estado inciial de nuestra promesa, aqui aun no tenemos resultados

fullfilled: cuando la operacion asincrona se completa con exito (resolve)


rejected(rechazo ): ucando la operacion falla(reject)

tambien las promesas al ser un objeto tienen metodos 

-then(function resolve): ejecuta un callback llamado resolve cuando la promesa se cumple

catch(funcion reject ) ejecuta un callback llamado reject cuando la promesa se rechaza

then (resolve, reject) puede ejecutar las dos fucniones en el mismo metodo then
*/

//creo una fucnion llamada obtener productos para poder utilizar promesas y hacer la conexion a mi url para obtener los datos.
function obtenerProductos(){

    return new Promise(function(resolve,reject){
        fetch('https://fakestoreapi.com/products')
        .then(function(response){
            if(response.ok){
                return response.json();
            }else{
                throw new Error("Error al obtener los productos");
            }
        })
        .then(function(data){
            resolve(data);
        })
        .catch(function(error){
            reject(error);
        })
    })

}

//uso de la promesa

obtenerProductos()
    .then(function(resultado){
    console.log(resultado);
})
    .catch(function(error){
    console.log(error);
})


//otro ejemplo de promesa

let nombre="Felipe";
const promesaNombre = new Promise(function(resolve, reject){
    if (nombre!=="Felipe") //si el nombre es distinto de felipe...
    reject("Error !!, el nombre no es Felipe"); //rechaza la promesa
    else{
        resolve("que bien!, el nombre es correcto", nombre); //resuleve la promesa e imporme un dato
    }
})

console.log(promesaNombre);

/*
Ejemplo de la pokeApi
necesito:
-url
-promesa(con dos posibles caminos rechazo y solucion)
    -si se resuelve me traigo los datos de la api
    -si no , muestro un error
*/

const obtenerPokemon =  new Promise((resolve, reject)=>{
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(respuesta=>{
        if(respuesta.ok){
            return respuesta.json();
        } else{
            throw new Error("Error 404");
        }
    })
    //segundo bloque cuando ya me conecto al servidor y encontro la informacion
    .then(datos=>{ //entonces esos datos...
        resolve(datos);//se usan como parametros de mi resolucion
    })
    //tercer bloque solo en caso de que no se encuentra informacion
    .catch(error=>{
        reject("mensaje de error no encontramos tu pokemon" + error);
    });
});

//ya que le di el mensaje al mesero (creacion de la promesa) ahora voy a poder mostrar la informacion si la promesa se resuleve encuentra la info o si se rechaza (no encuentra la info);

obtenerPokemon
.then(pokemon=>{//el valor pokemon = datos obtenidos del servidor en .json
    console.log("pokemon obtenido ", pokemon.name);
})
.catch(error=>{
    console.log(error);
})


/*
Fetch API

es una interfaz de JS que nos da un metodo llamado fetch, el cual nos permite manejar solicitudes HTTP (GET, POST, PUT, DELETE).

cuando usamos fetch api sabemso que de forma implicita estamos usando promesas, tambien de forma implicita sabemos que esa promesa se puede resolver o rechazar.

el metodo fetch toma una url como argumento y devuelve una promesa que se resuelve como un objeto llamado "response", que incluye la respuesta de la solicitud (a parte de decrinos que la conexion es ok, pega la informacion de lo que estamos consultando)

Ya que tenemos el objeto llamado response vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc.



*/


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(pokeRespuesta=>{
        return pokeRespuesta.json();
    })
    .then(pokeInfo=>{
        console.log("el nombre del pokemon es: ", pokeInfo.name, "su numero de la pokedex es: ", pokeInfo.id);
        console.log(pokeInfo);
    })
    
    .catch(pokeError=>{
        console.log("No encontramos nada de informacion"+pokeError);
    });

const input = document.getElementById("inputPokemon");
const button =document.getElementById("botonPokemon"); //TODO
const pokemonContainer = document.getElementById("pokemonContainer");

button.addEventListener("click", (e) =>{e.preventDefault();traerPokemon(input.value)});
//manipulacion del dom + fetch api


function traerPokemon(nombrePokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    .then(respuesta => respuesta.json())

    .then((datos)=>{
        crearPokemon(datos);
    });

}



function crearPokemon(nombrePokemon){
    const pokeImg = document.createElement("img")
    pokeImg.src =nombrePokemon.sprites.front_default;
    const h2=document.createElement("h2");
    h2.innerHTML = nombrePokemon.name;
    const pokeDiv =  document.createElement("div");
    pokeDiv.appendCh

    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);

    pokemonContainer.appendChild(pokeDiv);
}





