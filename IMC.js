/*
El IMC resulta a de la división de la masa del individuo (en kg) entre el cuadrado de la estatura (en metros). El índice de masa corporal es un indicador del peso de una persona en relación con su altura. 
Clasificación del IMC de acuerdo con la OMS de la ONU:
・Menor a 16: Criterio de ingreso.
・16 a 16.9: infrapeso.
・17 a 18.4: bajopeso
・18.5 a 24.9: peso normal.
・25 a 29.9: sobrepeso
・30 a 34.9: obesidad premórbida
・50 a 45: obesidad mórbida
・Mayor a 45: obesidad hipérmorbida

Escriba un programa que dado el peso de una persona en libras (1 libra = 0.453592 kg) y su estatura en centímetros, calcule su IMC e indique como salida el peso en kilogramos, el valor de IMC de la person a y la categoría en la cual fue clasificado.
*/

let pesoLibras = prompt("Ingrese su peso en libras");
let estaturaCM = prompt("Ingrese su estatura en centímetros");
     
function calculoIMC() {
    pesoKG = pesoLibras * 0.453592;
    estaturaMetros = estaturaCM / 100;
    indiceMasa = pesoKG / (estaturaMetros ** 2);
    console.log("Su peso en kilogramos es:", pesoKG);
    console.log("Su estatura en metros es:", estaturaMetros);
    console.log("Su IMC es", indiceMasa);
    if (indiceMasa < 16) {
        console.log("Criterio de ingreso");
    } else if (indiceMasa >= 16 && indiceMasa <= 16.9) {
        console.log("Infrapeso");
    } else if (indiceMasa >= 17 && indiceMasa <= 18.4) {
        console.log("Bajopeso");
    } else if (indiceMasa >= 18.5 && indiceMasa <= 24.9) {
        console.log("Peso normal");
    } else if (indiceMasa >= 25 && indiceMasa <= 29.9) {
        console.log("Sobrepeso");
    } else if (indiceMasa >= 30 && indiceMasa <= 34.9) {
        console.log("Obesidad premórbida");
    } else if (indiceMasa >= 35 && indiceMasa <= 45) {
        console.log("Obesidad mórbida");
    } else if (indiceMasa > 45) {
        console.log("Obesidad hipérmorbida");
    }
}

calculoIMC();