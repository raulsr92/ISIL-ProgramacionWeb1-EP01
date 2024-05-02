// =================== Interacción N° 01: Alert al cargar la página

Swal.fire({
    title: "Bienvenidos a la Tienda Blanquiazul",
    text: "Encuentra tu producto favorito",
    imageUrl: "/img/AL-logo-dorado.png",
    background: "#0F3B73",
    color:"#807C5A",
    confirmButtonColor: "#807C5A",
    confirmButtonText: "INGRESAR",
    backdrop: `
    rgba(0, 13, 30,0.6)
    url("./img/background-barra.jpeg")
    left top
    repeat 
    `
});

// =================== Interacción N° 02: Cargar la lista de productos desde un array de objetos

// Paso 1: Crear objeto de productos de la tienda

const productos =[
    {
        producto: "Camiseta Away Mujer 2024",
        precio: 249.9,
        precioIntimo:229.9,
        imagen: "./img/Producto1-AL.jpg"
    },

    {
        producto: "Camiseta Home Adulto 2024 Con Sponsors",
        precio: 269.9,
        precioIntimo:249.9,
        imagen: "./img/Producto2-AL.jpg"
    },

    {
        producto: "Camiseta Away Adulto 2024 Con Sponsors",
        precio: 269.9,
        precioIntimo:249.9,
        imagen: "./img/Producto3-AL.jpg"
    },

    {
        producto: "Gorra Alianza Lima Nike 2024",
        precio: 89.9,
        precioIntimo:79.9,
        imagen: "./img/Producto4-AL.jpg"
    },
    {
        producto: "Camiseta Alterna Adulto 2023 Sin Sponsors + Parche Campeón",
        precio: 219.9,
        precioIntimo:169.9,
        imagen: "./img/Producto5-AL.jpg"
    },
    {
        producto: "Camiseta Alterna Adulto 2023 Con Sponsors + Parche Campeón",
        precio: 299.9,
        precioIntimo: 219.9,
        imagen: "./img/Producto6-AL.jpg"
    },
    {
        producto: "Polo de Algodón Azul Alianza Lima",
        precio: 99.9,
        precioIntimo: 79.9,
        imagen: "./img/Producto7-AL.jpg"
    },
    {
        producto: "Polo Nike Azul de concentración",
        precio: 159.0,
        precioIntimo: 149.9,
        imagen: "./img/Producto8-AL.jpg"
    },
    {
        producto: "Bandera Oficial Club Alianza Lima",
        precio: 39.90,
        precioIntimo: 34.9,
        imagen: "./img/Producto9-AL.jpg"
    },
    {
        producto: "Banderín oficial - Club Alianza Lima",
        precio: 99.90,
        precioIntimo: 89.9,
        imagen: "./img/Producto10-AL.jpg"
    },
    {
        producto: "Rompecabezas Señor de los Milagros",
        precio: 79.90,
        precioIntimo: 69.9,
        imagen: "./img/Producto11-AL.jpg"
    }
    ,
    {
        producto: "Audifonos Sudio True Wireless Edición Alianza Lima",
        precio: 169.90,
        precioIntimo: 159.9,
        imagen: "./img/Producto12-AL.jpg"
    }
]

// Paso 2: Capturar contenedor de las cards

let cardsContenedor = document.querySelector("#cards-container");
console.log(cardsContenedor);
 
// Paso 3: Recorrer el array de objetos con el método forEach() para añadir contenido a la página desde JavaScript

productos.forEach((element)=>{
    console.log(element.imagen)

    cardsContenedor.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card card-container">
                <a href="#" class="enlace-img-products"><img src="${element.imagen}" class="card-img-top" alt="..."></a>
                <div class="card-body">
                    <h5 class="card-title p-cards text-center">${element.producto}</h5>
                    <p class="p-cards p-cards__intimo text-center mb-2">S/ ${element.precioIntimo} <span class="badge text-bg-danger">Precio íntimo</span></p>
                    <p class="p-cards text-center mb-3">S/ ${element.precio}</p>
                    <a href="#" class="btn btn-primary btn-main w-100">¡Lo quiero!</a>
                </div>
            </div>
        </div>`
})

// =================== Interacción N° 03: Evento de Click al carrito de compras

// Paso 1: Capturar al carrito de compras a través de su ID

let cart = document.querySelector("#cartShopping")
console.log(cart)

// Paso 2: Declarar evento de click

cart.addEventListener("click", showCart);

function showCart() {
    console.log("Hola")
    Swal.fire({
        title: "<strong>CARRITO DE COMPRAS</strong>",
        html: `
          <p>Tu carrito de compras esta vacío</p>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: true,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> OK
        `,
        background: "#CCCFD2",
        color:"#000D1E",
        confirmButtonColor: "#807C5A",
      });
}

// =================== Interacción N° 04: Evento de Click al icono de USUARIO (inicio sesión)

// Paso 1: Capturar al ícono de usuario a través de su ID

let userIcon = document.querySelector("#userEnter")
console.log(userIcon)

// Paso 2: Capturar al formulario

let formRegistration = document.querySelector(".form-container")

// Paso 3: Declarar evento de click

userIcon.addEventListener("click", showForm);

function showForm() {
    formRegistration.classList.toggle("inactive")    
}

// Paso 4: Complementar que al hacer click X se cierreel formulario

let closeIcon = document.querySelector(".icon-closed");

closeIcon.addEventListener("click", closeForm)

function closeForm() {
    formRegistration.classList.add("inactive")
}


/*
// Paso 5: Complementar que al hacer click en cualquier parte de la página y el formulario este en pantalla, se oculte

window.addEventListener("click", hideForm)

function hideForm() {
    const isFormClosed = formRegistration.classList.contains("inactive")
    console.log(isFormClosed)

    if (!isFormClosed ) {
        formRegistration.classList.add("inactive")
    }

}
*/