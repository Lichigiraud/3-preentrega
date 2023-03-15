const producto = [
    {
        titulo: "Fernet Branca", 
        precio: 2000,
    },
    {
        titulo: "Fernet Buhero Negro", 
        precio: 1600,
    },
    {
        nombre: "Vodka Smirnoff", 
        precio: 1750,
    },
    {
        nombre: "Vino Termidor", 
        precio: 725,
    },
    {
        nombre: "Jaggermeister",
        precio: 7000,
    },
    {
        nombre: "Gin Bombay",
        precio: 6000,
    },
    {
        nombre: "Cerveza Andes rubia X6" ,
        precio: 1500,
    } 
];
const tarjeta = document.getElementById('tarjeta');

const boton1 = document.getElementById('1');
const productoBranca = producto [0]
boton1.addEventListener('click', function()
    {
        localStorage.setItem('datosProducto1', JSON.stringify(productoBranca));
    });


const productoBN = producto [1]
const boton2 = document.getElementById('2');
boton2.addEventListener('click', function()
    {
        localStorage.setItem('datosProducto2', JSON.stringify(productoBN));
    });

const productoVodka = producto [2]
const boton3 = document.getElementById('3');
boton3.addEventListener('click', function()
    {
        localStorage.setItem('datosProducto3', JSON.stringify(productoVodka));
    });


const productoTermi = producto [3]
const boton4 = document.getElementById('4');
boton4.addEventListener('click', function()
    {
        localStorage.setItem('datosProducto4', JSON.stringify(productoTermi));
    });

const productoJagger = producto [4]
const boton5 = document.getElementById('5');
boton5.addEventListener('click', function()
    {
        localStorage.setItem('datosProducto5', JSON.stringify(productoJagger));
    });

const productoBombay = producto [5]
const boton6 = document.getElementById('6');
boton6.addEventListener('click', function()
    {
        localStorage.setItem('datosProducto6', JSON.stringify(productoBombay));
    });

const productoCAndes= producto [6]
const boton7 = document.getElementById('7');
boton7.addEventListener('click', function()
    {
        localStorage.setItem('datosProducto7', JSON.stringify(productoCAndes));
    });

