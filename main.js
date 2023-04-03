
const productosDiv = document.getElementById("productos");
const contenedorCarrito = document.getElementById('carrito-contenedor');
const precioTotal = document.getElementById('precioTotal');
const botonCarrito = document.getElementById('boton-carrito');
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    actualizarCarrito();
    }
});

producto.forEach((bebida) => {
    const card = `
    <div class="tarjeta">
        <div class="card">
        <img src="${bebida.imagen}" alt="${bebida.titulo}">
        <h2 class="cardTitle">${bebida.titulo}</h2>
        <p>$${bebida.precio}</p>
        <button class="guardar" id="agregar${bebida.id}">Añadir al carrito</button>
        </div>
    </div>`;

    productosDiv.insertAdjacentHTML("beforeend", card);

    const botonAgregar = document.getElementById(`agregar${bebida.id}`);
    botonAgregar.addEventListener(`click`, () => {
    agregarAlCarrito(bebida.id);
    console.log(carrito);
    });
});

const agregarAlCarrito = (prodId) => {
    const item = producto.find((prod) => prod.id === prodId);
    carrito.push(item);
    actualizarCarrito();
};

const eliminarDelCarrito = (prodId) => {
    const index = carrito.findIndex((prod) => prod.id === prodId);
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
};
// const actualizarCarrito = () => {
//     contenedorCarrito.innerHTML = "";

//     carrito.forEach((prod) => {
//     const div = document.createElement('div');
//     div.className = ('productoEnCarrito');
//     div.innerHTML = `
//         <p>${prod.titulo}</p>
//         <p>Precio: $${prod.precio}</p>
//         <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
//     `;
//     contenedorCarrito.appendChild(div);
//     localStorage.setItem('carrito', JSON.stringify(carrito));
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
            <p>${prod.titulo}</p>
            <p>Precio: $${prod.precio}</p>
            <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `;
        contenedorCarrito.appendChild(div);
        localStorage.setItem('carrito', JSON.stringify(carrito));

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    });

    const contadorCarrito = document.getElementById('contadorCarrito');
    contadorCarrito.innerText = carrito.length;

    const cart = document.getElementById("cart");
    const toggleButton = document.getElementById("boton-carrito");

    toggleButton.addEventListener("click", function() {
        if (cart.style.display === "none") {
        cart.style.display = "block";
        toggleButton.innerHTML = "Ocultar carrito";
        } else {
        cart.style.display = "none";
        toggleButton.innerHTML = "Mostrar carrito";
        }
    });
}




