/*

Arreglos (arrays, matrices, colecciones de datos)

En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.

*/


//formas de declarar run array

//usando corchetes []
var miArray = [1,2,3,4,5,6];

//variable sin inicizalizar

var colores;

//arreglo sin asignar a una variable

["azul", "rojo", "naranja","verde"]

//variable colores declarada e incializada

var colores = ["azul", "rojo", "naranja","verde",["verde pastel", "amarillo pastel", "rosa pastel"]]

//podemos tener distintos tipos de datos en un mismo arreglo

var datosDeFelipe = ["Felipe", 31, "Guadalajara", "Nikky", true, undefined]


//cada asignatura esta asociada a una varibale individual.

var asignatura1 = "Matematicas";
var asignatura2 = "Literatura";
var asignatura3 = "Fisica";


//array

var asignaturas = ["Matematicas","Literatura", "Fisica" ];

console.log(typeof(asignaturas));

//acceder a un elemento del array

console.log("El elemento en la posicion 2 en mis asignaturas es: ", asignaturas[2]);


//si accedemos a un elemento que no existe, nos mostrara un undefined porque el espacio existe pero no tiene ningun valor
console.log(asignaturas[3]); //undefined


//mostrar la longitud de mi arreglo 
console.log(asignaturas.length)


//ejemplos de arrays

//arays carrito de compras

var carrito = ["pantalon", "camisa", "corbata"];

var publicacion = ["Felipe", 137, "29-mayo-2023"];

//modificar los elementos dentro del array

//reasignamos el valor a un elemento de nuestro arreglo por medio de su index

publicacion[1]=138;

console.log(publicacion[1]);

console.log(publicacion);

/*

aqui pegar lo que me falta
lista de compras de la quince join 
*/

//Modificacion del arreglo (push, pop, shift, unshift, splice)

//Acceso y busqueda de elemento (indexOf, lastIndexOf, includes)

//Transformacion de los elementos, transforman el arreglo pero no necesariamente modifica los valores(sort, reverse, map, forEach).

//operaciones logicas (every, some)

//creacion de nuevos arreglos(slice, concat, join, reverse)


/*splice (agregar, eliminar o reemplazar elementos en posiciones especificas)

sintaxis del splice

array.splice(iniciamos, numeroElementoABorrar, ElementoAInsertar, ElementoAInsertar)

*/

//splice para borrar elementos
var abecedario = ["A", "B", "C", "D", "E"]


abecedario.splice(2,2);
console.log(abecedario);

abecedario.splice(2,0, "C", "D");

console.log(abecedario);

//splice para reemplazar elemntos del arreglo

var vocales=["A", "E", "I", "O", "U"]

vocales.splice(1,2, "comer","comer","comer");

console.log(vocales)





