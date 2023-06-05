/*

bucles e iteraciones

en JS un bucle es una estrucura de control que permite repetir un bloque de instruccions, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas.


-while(mientras)
-do while (hacer mientras)
-for (para)

while
este bucle nos sirve para realizar una tarea repetitiva, mientras una condicion sea verdadera. a diferencia del if, que pregunta una vez y despues se ejecuta el bloque de codigo, el while pregunta continuamente la condicion y se ejecuta el bloque de codigo hasta que la condicion devuelva false.

esta es la estructura de un while infinito

while(true){
    //bloque de instrucciones
}

*/

//estructura basica del while
/*
while(tenerSuenio && ternUnaCamita){
    //hacer la dormicion
}

let rolDeUsuario = "registrado";

while(!"registrado"){
    function registrarUsuario(){
        console.log("Usuario Registrado" )
    }
}
*/

//codigo de mi sopita de verduras con pollo
//declaro e inicializo un array con mis ingredientes

var ingredientes = ["zanahorias", "cebollas", "apio", "papa", "espinacas","pollito"] //6 elementos

var IngredientesAgregadosALaOlla= 0;

//delcaramos una variable llamada contador inicializado en 0, para usarlo como un contador

while (IngredientesAgregadosALaOlla < ingredientes.length){
    console.log("Agregando ", ingredientes[IngredientesAgregadosALaOlla]), "a la olla";

    IngredientesAgregadosALaOlla++;
}

function imprimirAsteriscos(){
    console.log("****************************")
}

imprimirAsteriscos();

/*
casos de uso del ciclo while
-para verificar si un usuario esta registrado o no
- erificamos la disponibillidad de un producto en stock
-realizar acciones sobre nuestro carrito de compras(revisar productos, aplicar descuentps, impuestos, actualizar informacion, etc.)
-recorrer publicaciones de un usuario
-contador de likes
*/

/*
Do-While (hacer mientras)

Es similar al while, con al diferencia de que la condicion se evalua despues de cada itercion. Esto garantiza que el bloque de codigo se ejecute al menos una vez, incluso si la condicion inicial es falsa.

estructura

do{
    //bloque
} while(condicion)

*/

console.log("ejemplo de galletitas con Do-While")

var tiempoTranscurridoDeCoccion = 0;
//usamos el ciclo do-while

do{
    console.log("Hornenado las galletas...");
    tiempoTranscurridoDeCoccion+=5;


    //todo el bloque de codigo se va a evaluar mientras el tiempo de coccion sea menor a 30 minutos. Esto es porque las galletas se pueden concinar en 5, 10,15,20,25 minutos, teniendo un maximo de 30. Si pasamos de ese tiempo, puede que las galletas se quemen.

//Esto es como si revisaramos el horno cada 5 minutos

}while(tiempoTranscurridoDeCoccion<35);

//for (para)

/*
se utiliza cuando se conoce el numero exacto de iteraciones que se realizaran. consiste en tres partes: inicializacion, condicion, expresion final.

el bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejcuta la expresion final.

sintaxis

for(inicializacion; condicion; expresion de iteracion){

    -inicialización: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

    -condicion: se verifica antes de cada iteracion, y si se evalau como vervadero, el bucle se ejecuta

    -expresion de iteracion: se ejcuta al final de cada iteracion y se utliza para actualziar o modificar la variable de control
}

*/

imprimirAsteriscos();

console.log("ejemplo de la pizza con el uso de for");

var pasosDeReceta = ["preparar masa", "agregar los ingredientes", "hornear la pizza"];

var tiempoPorPaso = [15,10,20];

//El ciclo for para cada paso se tiene un tiempo estimado

//para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso, voy incrementando mi variable paso para saber cuantos pasos me quedan pendientes. cuando ya no haya pasos termino el proceso
for (var paso = 0; paso < pasosDeReceta.length;paso++){
    console.log("realizando paso "+pasosDeReceta[paso]);
    console.log("esperando " + tiempoPorPaso[paso]+"minutos");
}

for(let i=10;i>=0;i--){
    console.log("Faltan",i,"segundos para el despegue");
}
console.log("despegando");

//ejemplo de for para cupones de descuento

for(let cupones = 10; cupones>0; cupones--){

    console.log("tienes un cupon de descuento, nos quedan " +cupones);

}

