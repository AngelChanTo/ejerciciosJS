let numero1=13;
let numero2=25;
let numero3="25";

//operador de igua estrcta(evalua el valor y evalua el tipo de dato)

console.log("El valor 25 es igual que el valor 25?"+(numero2===numero3));
//otro jemplo de operador de igualdad estricta

console.log("el valor de 25 es igual que le valor 25?"+(25==="veinticinco"));

// ! (not)
console.log("El valor 13 no es igual al valor 25"+(numero1 != numero2));

//operador de desigualdad estricta !==

console.log("El valor 25 no es igual al valor 25?"+(numero2 !== numero3));

//presta atencion cuando es un numero en string la desigualdad lo asume como igual a uno del tipo numero, y su respuesta es false ("25"!=25) esto es falso porque los toma como iguales, no es el caso cuando usas desigualdad estricta

/*
Operadores logicos (&& (and), || (or) !(not))

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion, el resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar y los podemos poner en un orden especifico).


AND(&&)

Sirve para determinar si dos expresiones son verdaderas.

    -Si ambas expresiones son verdaderas, el resultado es verdadero.
    -Si una de las expresiones es falsa, todo el resultado es falso.


OR(||)
Sirve para determinar si al menos una de las expresiones es  verdadera .
    -   si cualquiera de esas afirmaciones es verdadera, todo es verdadero
    - si las dos afirmaciones son falsas, todo es falso.

Not(!)

sirve para mostrar lo contrario a lo que estamos devolviendo

*/

//Ejemplo AND

var num1=12;
var num2=24;

afirmacion1=(num1<num2); //true
afirmacion2=(num1!=num2); //true

console.log(afirmacion1 && afirmacion2); //true
//imprime true porque ambas afirmaciones son verdaderas.


afirmacion1=(num1>num2); //false
afirmacion2=(num1!=num2)//true
console.log(afirmacion1 && afirmacion2);

//ejemplo con OR(||)

afirmacion3=(num1 < num2); //true
afirmacion4=(num1 != num2); //true

console.log(afirmacion3 || afirmacion4); //imprime true al menos una afirmacion es verdadera.

afirmacion3=(num1 > num2); //false
afirmacion4=(num1 != num2); //true

console.log(afirmacion3 || afirmacion4); //imprime true al menos una afirmacion es verdadera.

afirmacion3=(num1 < num2); //verdadero
afirmacion4=(num1 !== num2); //verdadero

console.log(afirmacion3 || afirmacion4); //imprime true al menos una afirmacion es verdadera.

//ejemplo con NOT(!)

console.log(!afirmacion3);
console.log(!afirmacion4);

//ejercicio de combinacion de operaciones

numero1=12;
numero2=24;
numero3=25;
numero4=92;
numero5=91;

op =  (numero1 < numero2 || numero2 <numero3) && (!(numero1 !=numero2) &&  numero5 != numero3);

console.log(op);


//ejercicio de combiancion de operaciones 2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

operacion2 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);
console.log(operacion2);

/*
operadores aritmeticos (+, -, ,*, /, %, **,++,--)

+(suma): suma dos o más valores numericos

-(resta): resta dos o más valores númericos

+(multiplicacion): multiplcia dos o mas valores

/(division): divide dos o mas valores numericos

**(exponenciacion): retorna el resultado de una potencia. se escribe la base antes de los asteriscos.

++(incremento): increnta un valor de uno en uno
--(decremento): decrementa un valor de uno en uno
*/

let valor1=55;
let valor2=17;

console.log("Suma: ",(valor1 + valor2));
//usamos la coma para mostrar información en forma de numero 
// + puede ser usado para concatenar o para sumar
console.log(valor1 + valor2 + "suma")

//al usar la coma. se muestra en consola  el tipo de valor que es, al concatenar lo que obtenemos es una cadena de texto.

console.log("Resta: ", valor1-valor2);

console.log("multiplicacion:", valor1*valor2);

console.log("Division: ", valor1/valor2);

console.log("Residuo: ", valor1 % valor2);

console.log("Exponente: ", valor1**valor2);

console.log("Incremento: ", ++valor1);

console.log("Incremento: ", --valor2);

console.log(valor1);


//investigacion de operadores de cadena.





