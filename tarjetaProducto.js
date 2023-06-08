//1. obtener los elementos del html para guardarlos en variables
//almaceno el lugar de destino de mi tarjeta en una constante

const container = document.getElementById("product-container");
const botonAgregarProductos = document.getElementById("agregarProducto");

//almacenar elemntos del formulario en varibales de js
var nombreProducto = document.getElementById("nombreProducto");
var descripcionProducto=document.getElementById("descripcionProducto");
var imagenProducto=document.getElementById("imagenProducto");



function agregarProductos(){

    //guardo los valores de mis inputs

    let valorInputProducto = nombreProducto.value;
    let valorInputDescripcion =descripcionProducto.value;
    let valorInputImagen = imagenProducto.value;
    console.log(valorInputImagen);
    //quiero que cada tarjetita tenga su propio div o contenedor
    
    const productCard = document.createElement("div");
    productCard.innerHTML = `
        <img src="${valorInputImagen}" alt = "Producto">
        <h3> ${valorInputProducto} </h3>
        <p>Descripcion: ${valorInputDescripcion}</p>
        <p> Precio: $9.99</p>
        <button clas="btn"> Agregar al carrito</button>

    `
    //agregar esa tarjeta de producto al container especificado

    container.appendChild(productCard);
}


//creamos el evento



botonAgregarProductos.addEventListener("click",agregarProductos)
