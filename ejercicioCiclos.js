
var numero=parseInt(prompt("Introducir el numero que desea saber si es primo o no"));
var divisor=0;

for(var numberTest=2;numberTest<=numero;numberTest++){
    if(numero%numberTest==0){
        divisor=divisor+1;
    }
}

if(divisor==1){
    var state="es primo";
}else{
    state = "no es primo";
}

console.log("La informacion indica que el numero", numero, state);


/*

notas de la clase solucion

//escribir un programa que pida al usuario unn numero entero y muestre en pantalla si es un numero primo o no

//un numero primo puede dividirse entre 1 y entre sí mismo



//pedir datos al usuario

var numeroIngresado = prompt("ingresa un numero entero");

//evaluamos los dos posibles escenarios: sea o no primo (estado inicial de mis numeros)

var esNumeroPrimo=true;

//operacion para demostrar si es o no primo

if(numeroIngresado<=1){
    esNumeroPrimo=false;
}else{
    let divisor=2;
    while(divisor<=numeroIngresado/2 && esNumeroPrimo){
    if(numeroIngresado%divisor===0){
        esNumeroPrimo=false; //no es primo
    }

        divisor++;

    }
}

*/

