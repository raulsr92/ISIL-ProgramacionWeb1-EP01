
// Crear objeto de productos de la tienda

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

//Capturar contenedor de la imagen de la card

let cardsContenedor = document.querySelector("#cards-container");
console.log(cardsContenedor);


 
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

