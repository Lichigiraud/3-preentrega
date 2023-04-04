// const productosDiv = document.getElementById("productos");

// const contenedorCarrito = document.getElementById('carrito-contenedor')

// const precioTotal = document.getElementById('precioTotal')

// let carrito = [];

// document.addEventListener('DOMContentLoaded', ()=>{
//     if (localStorage.getItem('carrito')){
//         carrito= JSON.parse(localStorage.getItem('carrito'))
//         actualizarCarrito()
//     }
// })

// producto.forEach((bebida) => {
//     const card = `
//     <div class= "tarjeta">
//         <div class= "card">
//             <img src="${bebida.imagen}" alt="${bebida.titulo}">
//             <h2 class= "cardTitle">${bebida.titulo}</h2>
//             <p>$${bebida.precio}</p>
//             <button class="guardar" id="agregar${bebida.id}">Añadir al carrito</button>
//         </div>
//     </div>`;
    
//     productosDiv.insertAdjacentHTML("beforeend", card);

//     const boton = document.getElementById(`agregar${bebida.id}`);
//     boton.addEventListener(`click`, () => {
//         agregarAlCarrito(bebida.id);
//         console.log(carrito);
//     });
// });

// const agregarAlCarrito = (prodId) => {
//     const item = producto.find((prod) => prod.id === prodId);
//     carrito.push(item);
//     actualizarCarrito()
// };
// const eliminarDelCarrito = (prodId) =>{
//     const index = carrito.findIndex((prod) => prod.id === prodId)
//     carrito.splice(index, 1)
//     localStorage.setItem('carrito', JSON.stringify(carrito))
//     actualizarCarrito()
// }
// const actualizarCarrito = () => {
//     contenedorCarrito.innerHTML = ""

//     carrito.forEach((prod) => {
//         const div = document.createElement('div');
//         div.className = ('productoEnCarrito');
//         div.innerHTML = `
//             <p>${prod.titulo}</p>
//             <p>Precio: $${prod.precio}</p>
//             <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
//         `;
//         contenedorCarrito.appendChild(div);
//         localStorage.setItem('carrito',JSON.stringify(carrito))

//         precioTotal.innerText = carrito.reduce ((acc, prod) => acc + prod.precio, 0)

//         localStorage.setItem('carrito', JSON.stringify(carrito))
//     });
// };


// HTML

// <!-- <div class="modal-contenedor">
//             <div class="modal-carrito">
//                 <h3>Carrito</h3>
//                 <button id="carritoCerrar"><i class="bi bi-cart3"></i></button>
//                 <div id="carrito-contenedor">
//                 </div>
//                 <p class="precioProducto">Precio total: $<span id="precioTotal">0</span></p>
//             </div>
//         </div> -->
        
//         <!-- <div class="container-xl">
//             <div class="modal" tabindex="-1" role="dialog" id="modal">
//                 <div class="modal-dialog" role="document">
//                     <div class="modal-content">
//                     <div class="modal-header">
//                     <h5 class="modal-title">Carrito</h5>
//                     <button
//                         type="button"
//                         class="close"
//                         data-bs-dismiss="modal"
//                         aria-label="Close"
//                     >
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                     </div>
//                     <div class="modal-body"></div>
//                     <div class="modal-footer">
//                     <button type="button" class="btn btn-danger" id="vaciarCarrito">
//                         Vaciar carrito
                        
//                     </button>
//                     <button type="button" id="procesarCompra" class="btn btn-primary">
//                         Continuar compra
//                     </button>
//                     <button
//                         type="button"
//                         class="btn btn-secondary"
//                         data-bs-dismiss="modal"
//                     >
//                         Cerrar
//                     </button>
//                     <span>Precio total:$</span>
//                     <p class="text-center" id="precioTotal"></p>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </div> -->