/*
Control de Flujo orden en el que se ejecutan las instrucciones en un programa.

Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

Condicionales:

Son estructuras o condiciones que nos permiten modificar el orden natural de ejecucion de nuestro programa. Son sentencias especificas que nos ayudara a decidir si una ocndicion se cumple o no(verdadero o falso). a aprtir de esta respues se ejecuta una o varias instrucciones.

ejemplo: tengo limpia mi playera dea la suerte?
    true: Entonces voy a la fiesta
    false: Entonces me quedo a mimir

*/

/*Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.


Estructura basica de un if


if (condicion){
    //Ejecuto este bloque de codigo
}

*/

//Felipe tiene 17 anios, y quiere ir a una fiesta. Dicha fiesta solo es para personas adultas (mayores de 18 anios). Ayuda a Felipe decidir si puede ir a la fiesta o no.


//Evaluamos solo una expresion (si Felipe tiene menos de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).


let edadFelipe = 17;

if(edadFelipe < 18){
    console.log("Lo siento Felipe, no puedes ir a la fiesta")
}

/*
Else (de otro modo- si no)
utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.

estructura básica:

if(condicion){
    instrucciones se ejecuta si la condicion es verdadera

}else{
    instrucciones sino este otro codigo si la condicion es false
}

*/

let edadAxel = prompt ("indica tu edad");
let edadParaEntrarALaFiesta = 18;
if(edadAxel<edadParaEntrarALaFiesta){
    console.log("Lo siento, no puedes entrara a la fiesta");
}else{
    console.log("Felicidades, tienes la edad permitida para entrar a la fiesta");
}

/* Test de nuestro programa (valores que tambien se evaluan como falsos)
-"false"(string):
-"null"
-false(boolean dispara verdadero)

*/


/*Else if (ademas si / si no entonces)

Enta condicional nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estrucutra else. 


Estructura basica del else if


if (condicion 1) {
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo se ejecuta si la condicon 1 es falsa, y si la condicon 2 tambien es falsa
}else{
    //bloque de codigo que se ejecuta si la condicion 1, 2 y 3 son falsas.
}

Se pueden anidar x cantidad de else if entre el if que evalua la condicion inicial y el else que termina toda la expresion. 

*/

let hora = prompt("Ingrese la hora actual");

if(hora < 12){
    console.log("Buenos dias");
}else if(hora <= 19){
    console.log("Buenas tardes ya, que barbaro como pase el tiempo");
}else{
    console.log("Buenas noches, vamos a mimir");
}
