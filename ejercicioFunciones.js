function calculaRapidez(distancia, tiempo){
    
    let velocidad = distancia/tiempo
    let unidadesDistancia = "metros"
    let unidadesTiempo = "segundos"
    let unidadesRapidez=`${unidadesDistancia}/${unidadesTiempo}`
    console.log("la distancia es "+ distancia +" " +unidadesDistancia);
    console.log("el tiempo es "+ tiempo + " "+unidadesTiempo);

    console.log("La  magnitud de la velocidad del objeto es: "+ velocidad+ " " +unidadesRapidez);
}

calculaRapidez(100, 2);