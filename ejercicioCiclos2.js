/*Escribir un programa que calcule el valor aproximado de pi usando una serie*/

function aproxPi(n){
    var numerator=4;
    var denominator=1;
    var result=0;
    for(var i=0; i<n; i++ ){
        result+=Math.pow(-1,i)*(numerator/denominator);
        denominator+=2;
    }
    return result;
}

console.log(aproxPi(1000000));

//la ejecucion fue exitosa
