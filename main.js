
const producto = [
    {
        titulo: "Fernet Branca", 
        precio: 2000,
        imagen: "Assets/FernetBranca.jpg",
        "id": 1
    },
    {
        titulo: "Fernet Buhero Negro", 
        precio: 1600,
        imagen: "Assets/FernetBN.jpg",
        "id": 2
    },
    {
        titulo: "Vodka Smirnoff", 
        precio: 1750,
        imagen: "Assets/vodka.jpg",
        "id": 3
    },
    {
        titulo: "Vino Termidor", 
        precio: 725,
        imagen: "Assets/termidor.jpg",
        "id": 4
    },
    {
        titulo: "Jaggermeister",
        precio: 7000,
        imagen: "Assets/jagger.jpg",
        "id": 5
    },
    {
        titulo: "Gin Bombay",
        precio: 6000,
        imagen: "Assets/bombay.jpg",
        "id": 6
    },
    {
        titulo: "Cerveza Andes rubia X6" ,
        precio: 1500,
        imagen: "Assets/andes.jpg",
        "id": 7
    } 
];

const productosDiv = document.getElementById("productos");

producto.forEach(bebida => {
const card = `
        <div class="card">
        <img src="${bebida.imagen}" alt="${bebida.titulo}">
        <h2>${bebida.titulo}</h2>
        <p>${bebida.precio}</p>
        <button class="guardar" id="${bebida.id}">Añadir al carrito</button>
        </div>`;
productosDiv.insertAdjacentHTML("beforeend", card);

    const boton = document.getElementById(bebida.id);
    boton.addEventListener("click", function() {

    const productoJSON = {
        id: bebida.id,
        titulo: bebida.titulo,
        precio: bebida.precio,
        imagen: bebida.imagen,
        cantidad: 1
    };


    const clave = "producto_" + bebida.id;
    const productoTexto = JSON.stringify(productoJSON);
    localStorage.setItem(clave, productoTexto);
});
});


function buscarProductoPorNombre(nombre) {
    return producto.filter(function(p) {
        return p.titulo.toLowerCase().indexOf(nombre.toLowerCase()) !== -1;
    });
}
const input = document.getElementById('buscar-input');

input.addEventListener('input', function() {
    const nombre = input.value;
    const productosEncontrados = buscarProductoPorNombre(nombre);
    
});
