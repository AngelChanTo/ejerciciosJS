numMuniecas = 14;
numPayasos = 27;

individualWeightMuniecas = 75; 
individualWeightPayasos = 112;

weightMuniecas = numMuniecas*individualWeightMuniecas;
weightPayasos = numPayasos*individualWeightPayasos;

totalWeight= weightMuniecas + weightPayasos

console.log("el total del peso es "+totalWeight+" gramos");

//version 2 de las muniecas y payasos

//muñecas y payasos venta
let numMuñecas = prompt("Ingrese número de muñecas");
let numPayasos = prompt("Ingrese número de payasos");
const pesoMuñeca = 75;
const pesoPayaso = 112;

function calcularPeso (){
    const totalPesoMuñecas = numMuñecas * pesoMuñeca;
    const totalPesoPayasos = numPayasos * pesoPayaso;
    let totalPedido = totalPesoMuñecas + totalPesoPayasos;
    return totalPedido;
} 
      
alert("El peso total es " + calcularPeso() + " g.")