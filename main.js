const productosDiv = document.getElementById("productos");

const contenedorCarrito = document.getElementById('carrito-contenedor')

let carrito = [];

producto.forEach((bebida) => {
    const card = `
    <div class= "tarjeta">
        <div class= "card">
            <img src="${bebida.imagen}" alt="${bebida.titulo}">
            <h2 class= "cardTitle">${bebida.titulo}</h2>
            <p>$${bebida.precio}</p>
            <button class="guardar" id="agregar${bebida.id}">Añadir al carrito</button>
        </div>
    </div>`;
    
    productosDiv.insertAdjacentHTML("beforeend", card);

    const boton = document.getElementById(`agregar${bebida.id}`);
    boton.addEventListener(`click`, () => {
        agregarAlCarrito(bebida.id);
        console.log(carrito);
    });
});

const agregarAlCarrito = (prodId) => {
    const item = producto.find((prod) => prod.id === prodId);
    carrito.push(item);
    actualizarCarrito()
};

const eliminarDelCarrito = (prodId) =>{
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()

}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
            <p>${prod.titulo}</p>
            <p>Precio: $${prod.precio}</p>
            <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `;
        contenedorCarrito.appendChild(div);
    });
};

