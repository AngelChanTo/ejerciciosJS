console.log("-aqui comienza el ejercicio individual---")

var carreritas = ["sofia", "ramiro", "jorge", "andrea", "roberto"]

//
//[jose,andrea,sofia, jorge, ramiro]


//jorge adelanta a roberto

carreritas.splice(2,1);
carreritas.push("jorge");
//['sofia', 'ramiro', 'andrea', 'roberto', 'jorge']

//ramiro adelanta a jorge
carreritas.splice(1,1);
carreritas.push("ramiro");

//['sofia', 'andrea', 'roberto', 'jorge', 'ramiro']

//roberto se lesiona
carreritas.splice(2,1);
//andrea baja una posicion
carreritas.splice(1,1);
carreritas.unshift("andrea");
//ramiro mantiene su posicion

//quinto lugar reemplazado por jose
carreritas.unshift("jose");

//carreritas.splice(carreritas.indexOf("roberto"),1);

console.log(carreritas);
