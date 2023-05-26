//alert("hola mundo");

//comentario de una linea
/*este es un

comentario

multilinea*/

//console.log("statud de la mama de bambi " + mamaDeBambiViva);

/* 
Varaibles: es un elemento cuyo valor puede cambiar dependiendo de la circunstancia. esta variable ocipa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de este espacio es el tipo de variable que tenemos.

variable: recipiente donde pondremos el valor

valor: la información con la que llenamos el recipiente

declarar: ponenerle nombre al recipiente
inicializar: llenar el recipiente
*/

recipiente = "agua";
recipiente = "cafe";
recipiente = "colores y lapices";
//usamos esta linea de codigo para imprimir o mostrar la info de mi recipiente

console.log(recipiente);
//declara vs inicializar, crear recipientes para que tomen un valor despues


/*
tipos de datos

se llaman primitivos porque son datos que no pueden ser modificados, ya vienen con el lenguaje y se consideran el dato más simple o más básico que existe.

-String: sirve para agregar valores en forma de texto, para que se considere asi, el valor debe estar adentro de comillas simples (''), dobles(" ") y backticks(``)


-Number:Sirve para agregar valores en formato numerico (para poder usarlos en operaciones aritmeticas). estos valores no usan comillas.

-Boolean: Sirven para representar valores del tipo true o false(encendido o apagado, 0 o 1, si o no).


-Undefined: sirve para representar una variable o un tipo de dato que no tiene un valor. cuando declaramos variables sin inicializar tendremos datos del tipo undefined.


-NULL: Sirve para definir que un valor es nulo. 

-NAN(Not A Number): sirve para representar un valor que no es un numero. lo obtenemos si hacemos una operacion con una variable que no es un numero o con una operacion que no es posible

-Symbol: usados para dar un número de identificación único, se deja en stand by por el momento. Hasta aqui todavia estamos hablando de un tipo de dato primitivo

-Object(no es  primitivo): compuesto por multiples tipos de datos.


*/

//ejemplo para la concatenacion
apodoDeFelipe="el \"amante numero uno\" de los chilaquiles verdes";
console.log(apodoDeFelipe);

//ejemplos de valores numericos
edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -156.35;

console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);

//ejemplos de valores booleanos

esAdministrador= true;
contraseniaCorrecta = false;
cuentaPremium = false;

//ejemplos de datos indefinidos

/*
respuestaDeMiCrush;
precioBoletoEstacionamiento;

console.log(respuestaDeMiCrush);
console.log(precioBoletoEstacionamiento);
*/

//ejemplos de valores nulos

respuestaDeMiCrush = null;
console.log(respuestaDeMiCrush);

//Ejemplo con valores NaN

operacionMatematica = 0/0;
console.log(operacionMatematica);

/*
typeOf
es una expresion que nos ayuda a saber que tipo de datos es el que estamos evaluando.
typeof(elDatoAEvaluar);

Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando


*/
console.log(typeof(esAdministrador)); //boolean
console.log(typeof(cuentaDeFelipe)); //number
console.log(typeof(operacionMatematica))//number

/*tipos de variables
En JS tenemos 3 tipos principales de variables:

    - var: era la forma principal de declarar variables. el alcance es global o el scope es global, se puede consultar en cualquier parte del programa, es una variable muy flexible. Tiene un scope(alcance) global, esto es, que el valor de esta variable esta disponible en todo el programa.


    - let: la usamos para limitar el alcance de nuestras variables (scope), y si limita a un bloque de codigo o expresion (meter a la mama de Bambi en una cajita), es una variable local


    - cons: se usan para declarar una variable con un valor constante o inmutable(que no cambia). 


*/
//en este caso, la mama de Bambi esta visible desde cualquier lugar del programa

 mamaDeBambiViva = false;

var cazador = "listo para disparar"

let nombre="Angel Chan"

const pi = 3.1416

/* 
Funciones

una funcion es una agrupacion de instrcciones que se ejecutan cuando se lllama o se invoca. las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funcionesno se ejecutan sino que se invocan.

parametros =  variables que necesitamos para alimentar mi funcion
ejemplo: limon, azucar, vasito de agua, cuchara, hielo y agua

nombre de la funcion = con el nombre, nosotros vamos a poder activar o invocar la funcionn (basicamente, tenemos que llamarla para que funcione)
ejemplo:prepararAguitaDeLimon

operaciones: conjunto de instrucciones( en orden especifico)

ejemplo:1)cortar limon 2)exprimir limon, etc

resultado: las funciones generalmente deben tener un resultado

ejemplo: vasito de aguita de limon.
*/

//1.-creamos la funcion con la palabra reservada function y le ponemos un nombre, Despues, abriremos () y abriremos llaves{}. Los parentesis () son para los parametros o arguemntos y las llaves {} para delimitar el bloque o la funcion

//2.-ponemos los parametros dentr de los parentesis

//3.-poner las instrucciones dentro de las llaves utilizando los parametros o argumentos

//4.- invocar la funcion escribiendo su nombre y abrimos y cerramos parentesis


function prepararAguitaDeLimon(){

    let limon = "limon";
    let agua = "agua";
    let hielos = "hielos";
    let azucar = "azucar";
    let vaso = "vaso";
    let cuchara = "cuchara";

    console.log("cortar el limon " + limon);
    console.log("exprimir el limon ");
    console.log("Agregar el jugo de limon al vaso "+vaso);
    console.log("Agregar hielos al vaso "+hielos);
    console.log("Agregamos el agua al vaso "+agua);
    console.log("Endulzamos al gusto "+azucar);
    console.log("Mezclar y disfrutar "+cuchara);
    console.log("que rica aguita de limon");
    
    console.log(cuchara);

}
prepararAguitaDeLimon();
console.log(recipiente);


//ejemplo de los 3 formas de agregar parametros a funciones

//primera forma:usando parametros dentro de parentesis y reasingnando dentro de la funcion

function suma(a,b){//valores en undefined(declarar)
    //inicializo
    var a=5; //cambia undefined por 5
    var b=7;  //cambia el undefined por el 7
    operacion = a + b; //operacion usando los dos valores  
    console.log(operacion) 
}

suma();

//segunda forma: usando los valores dentro del parentesis, ya inicializados

function resta(a=8, b=5){

    operacion=a-b;
    console.log(operacion);
}

resta();

//tercera forma: Iinicializando valores dentro de la invocacion

function multiplicacion (a, b){

    operacion=a*b;
    console.log(operacion);
}

multiplicacion(3,9);
multiplicacion(5,7);
multiplicacion(13,29);
multiplicacion(2,2.5);

//funciones anonimas, cómo podriamos definirlas
let funcionAnonima = function (a,b){
    operacion = a/b;
    console.log(operacion);
}

funcionAnonima(10,5);

/*return 

la sentencia return finaliza la ejecucion de la funcion, y especifica un valor para ser devuelto a quien llama la funcion. O lo que es lo mismo, usamos return para finalizar y tambien para poder asignar el resultado a una variable

*/
//funcion para dar un saludo personalizado

function saludo(){
    //declaro e iniciliazo mi variable del nombre
    let nombreSaludo="Angel";
    //uso el nombre para personalizar el saludo e imprimir en consola
    console.log("saludos " +  nombreSaludo);

    //finaliza la ejecuacion, y tomo el dato de la variable llamada nombreSaludo para poder verla(recordemos que esta en un contexto local) y tambien pora poder usarla despues en otras operaciones
    return nombreSaludo;

}

//para poder usar esta variable que hasta este momento sacamos de la funcion, pero que no sabrmos donde esta (porque esta en el limbo de las fucniones). y en esta nueva variable ponemos la invocacion de la funcion.

let nombreUsuario = saludo();
console.log(nombreUsuario);


 //uso de prompt, se pueden usar la cantidad deseada.
var nombreIngresadoNavegador = prompt("Introduce tu nombre");

var apellidosIngresadoNavegador = prompt("introduce apellido")
console.log("Gracias por entrar a mi pagina " + nombreIngresadoNavegador);

console.log("Gracias por entrar a mi pagina " + apellidosIngresadoNavegador);