//Traer o referenciar toos los elementos del html y los vamos a guardar en variables para poder utilizarlos despues

//metodos de seleccion

let numeroContador = document.getElementById("numeroContador");
let botonIncremento = document.getElementById("botonIncrementar");
let botonDecremento =document.getElementById("botonDecrementar");
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document.querySelector("#memeRandom");


//declaraar una variable con un estado inicial

var valorContador = 0;

//logica de negocios


function incrementar(){
    valorContador++;
    numeroContador.innerHTML=valorContador;

    if(valorContador%10==0){
        mostrarImagen();
    }

    }


function decrementar(){
    valorContador--;
    numeroContador.innerHTML=valorContador;
    if(valorContador%10==0){
        mostrarImagen();
    }
}

function resetear(){
    valorContador = 0;
    numeroContador.innerHTML=valorContador;
}

//incrementar();
//la intencion de esta funcion es que cuando sea invocada, recorra el arreglo y tome uno d elos elementos de forma aleatoria(index)

function mostrarImagen(){
    var coleccionImagenes =["./assets/imgs/meme1.png", "./assets/imgs/meme2.png", "./assets/imgs/meme3.png", "./assets/imgs/meme4.png", "./assets/imgs/meme5.png"]

    //generar indice random
    let indexRandom = Math.floor(Math.random()*coleccionImagenes.length);

    //obtnener la url o direccion de la imagen
    let urlAleatoria = coleccionImagenes[indexRandom]
   
    memeRandom.src = urlAleatoria;
    memeRandom.style.display = "block";

}

botonDecremento.addEventListener("click", decrementar);
botonIncremento.addEventListener("click", incrementar);
botonResetear.addEventListener("click", resetear);





//function decrementar()

//function resetear()

//function mostrarImagen()

