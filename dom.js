//document object model, cada etiqueta la interpreta como nodos como objetos.
/*

/*
DOM

Cuando aprendemos a crear paginas web, normalmente comenzamos con la construccion de sitios que estan estructurados con HTML y que tienen CSS como fuente de estilo. Hasta este momento, nuestras paginas son estaticas. Si nosotros queremos convertir estas paginas a paginas dinamicas, debemos agregar JavaScript a la ecuacion. Debemos recordar que cuando hablamos de paginas dinamicas, nos referimos a paginas que cambian de acuerdo a los datos que nos envie el usuario, esto con el fin de brindar una experiencias mucho mas completa, ademas de tener tareas o acciones que se puedan automatizar.

DOM significa Document Object Model, o modelo de objetos de documento. Podemos hacer una analogia con un arbol, donde el DOM es el arbol y cada una de las etiquetas del HTML es un nodo o rama, ademas de que cada nodo puede tener una propiedad o un atributo, que es lo que nos permite saber que es lo que esta dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de arbol, que podremos modificar de forma rapida y dinamica desde el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras paginas. Gracias a que usamos JS para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, como mover el raton, pulsar un boton, hacer click en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a traves del navegador y podemos visualizarlo como un gran arbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de arbol); es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS.

elementos del DOM
todos los elementos del dom se consideran nodos

-Document (es el nodo raiz)
-Element(todas las etiquetas de html)
-Texto(textos que estan dentro de las etiquetas)
-atributo(todoa loa atributos qu pueden llegar a tener las etiquetas)
-comentario (todos los comentarios del documento)


todos lo que se usa en la renderizacion es un objeto

comunicacion entre html y js se hace através de:

metodos de seleccion de elementos:
son elementos que nos van a permitir selecionar uno o varios elementos o grupos de ellos del DOM. Estos metodos se utilizan en el document, por eso se agrega un document.getElement

Tradicionales:

//getElementByID
//getElementsByClassName
//getElementsByTagName

Modernos

-querySelector(): busca el primer elemento que coincide con el selector

-querySelectorAll(): retorna todos los elementos que coincida con el selector

-
*/



let parrafo = document.getElementById("parrafo1");


parrafo.innerHTML="Hola modifique esto usando js, generado con un innerHTML";
console.log(parrafo);

var parrafitos = document.getElementsByClassName("parrafos");

parrafitos[0].style.color="red";
console.log(parrafitos);

var parrafosEtiqueta = document.getElementsByTagName("p")

console.log(parrafosEtiqueta);

//métodos más actuales

var parrafoQuerySelector = document.querySelector("#parrafo1")

var parrafoQuerySelectorAll = document.querySelectorAll(".parrafos")

console.log(parrafoQuerySelectorAll);

//eventos(accion y reaccion):

/*
Los eventos son una forma mucha mas facil de modificar o alterar el contenido de un elemento. los eventos son acciones que se pueden realizar sobre un elemento u objeto y se usaan para modificar atributos, estilos, extos o para invocar funciones de JS




*/
//crea funcion que cambia color paso un color como un parametro (red,blue,black )
function cambiaColor(color){

    //con ese color que paso como parametro s elo aplico a un elemento en especifico

    parrafo.style.color=color;
}


//evento con EventListener
/*
Permite escuchar el evento indicado (primero parametro) y en el caso de que ocurra (escuche) se ejecuta la funcion asociada (segundo parametro)

sintaxis

object.addEventListener(nombreDelEvento, funcionQueSeDispara)

*/ 

const botonCambiarColor=document.querySelector("#botonCambiarColor");
botonCambiarColor.addEventListener("click", function(){
    alert("Hola has presionado el boton para cambiar de color")
})

/*elementos para crear y agregar elementos: 1-se crean 2-se agregan
sintaxis para crear elementos

elementoPadre.createElement("tipoDeElemento")

*/

//para crear elementos con createElement()

const div = document.createElement("div");

//para insertar en  el documento usamos append

document.body.appendChild(div);
//codigo para gregar una imagen a mi documento

var appendImg=document.createElement("img");
appendImg.src="https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg";
appendImg.alt="imagen sorpresa";

document.body.appendChild(appendImg);