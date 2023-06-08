//1. creamos un arreglo de objetos para nuestras tareas, estas tareas tendran atributos como id, titulo, estatus completado o no completado.

//donde se ejecuta? del lado del cliente

let tareas = [
    {
        id: 1,
        titulo: "Baniar al perro",
        estatus: true
    }
    ,
    {
        id:2,
        titulo:"preparar la comida",
        estatus: false
    }

]

//enviar ese arreglo al servidor

let tareasJSON=JSON.stringify(tareas);
console.log(tareasJSON);

//ejemplo del carrito de compras
//declaramo un arreglo de objetos vacio

let carritoDeCompras =[];
//Producto de mi catalogo
let producto = {
    id : 1,
    nombre : "Camisa de Pokemon",
    precio: 299.99,
    cantidad: 1
};

//Mostrar informacion del carrito de compras
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //undefined

//Agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto);

//Muestro la nueva informacion de mi carrito
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1

//actualizar la cantidad de productos en el carrito
let idProductoAModificar=1;
let nuevaCantidad = 3;
//Verifico si mi producto existe dentro del carrito de compras para poder modificarlo, si exsite, actualizo la cantidad, si no, no hago nada. Todo esto se evalua con base en el id que estoy buscando y este debe coincidir con el id del producto que deberia tener dentro de mi carrito de compras.
let productoExiste = carritoDeCompras.find(function(producto){
    return producto.id === idProductoAModificar; //true or false
})
if (productoExiste) {
    productoExiste.cantidad = nuevaCantidad;
}

console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1

console.log(producto);



/*
//Con funcion flecha 
carritoDeCompras.find(producto => producto.id === productoId);


//Sin funcion flecha

carritoDeCompras.find(function(producto){
    return producto.id === productoID; //true or false
})

*/

//eliminar producto del carrito
//reviso el id de l producto a lemmimnar en cada uno de los indices de mi arreglo si encuentro un indice que dentro tenga un  objeto que coincida con el id que quiero borrar , entonces eliminao
let productoAEliminar = 1;
let indiceProductoAEliminar = carritoDeCompras.findIndex(function(producto){
    return producto.id ===productoAEliminar;
})
//verificar si el indice del elemento que se encuentro es valido. con el findindex por devolvera el primer indice del elemento que cumpla con la condicion . si no se encuentra el elemento que coincida con la condicion, entonces vamos a devolver un -1, esto para evitar borrar un elemento que no sea(pensando que tenemos un indice 0)
if(indiceProductoAEliminar!==-1){//0,1,2,3, disparan true y se activa el if, que el ..1 dispara un false y no se activa el if
    carritoDeCompras.splice(indiceProductoAEliminar,1);
}





//comprar productos
carritoDeCompras.push(producto);

let total = 0;
 carritoDeCompras.forEach(function(producto){

    total+=producto.precio * producto.cantidad;
 });

 console.log("El total de tu carrito es de: ", total);

 let carritoJSON = JSON.stringify(carritoDeCompras);
 console.log(carritoJSON);


 //callbacks, promises, Async/Await
 /*
 sincrono: 1 solo thread  ejecucion sucesiva de las tareas, esperando que se ejecute en una determinada accion. 
 asincrono.multiples hilos

 procesos asincronos, recursos externos, para que la ejecución del resto de la pagina puede seguir el flujo
 conectarse a un servidor debe hacerse de manera asincrona. procesos en segundo plano
 sincrono. funciones de eventos de botones o ciclos, que se ejecutan en el momento de la llamada.
 
 */
