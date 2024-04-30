
// Crear objeto de productos de la tienda

const productos =[
    {
        producto: "Camiseta Away Mujer 2024",
        precio: 249.9,
        precioIntimo:229.9,
        imagen: "./img/Producto1.jpg"
    },

    {
        producto: "Camiseta Home Adulto 2024 Con Sponsors",
        precio: 269.9,
        precioIntimo:249.9,
        imagen: "./img/Producto2.jpg"
    },

    {
        producto: "Camiseta Away Adulto 2024 Con Sponsors",
        precio: 269.9,
        precioIntimo:249.9,
        imagen: "./img/Producto3.jpg"
    },

    {
        producto: "Gorra Alianza Lima Nike 2024",
        precio: 89.9,
        precioIntimo:79.9,
        imagen: "./img/Producto4.jpg"
    },
    {
        producto: "Camiseta Alterna Adulto 2023 Sin Sponsors + Parche Campeón",
        precio: 219.9,
        precioIntimo:169.9,
        imagen: "./img/Producto5.jpg"
    },
    {
        producto: "Camiseta Alterna Adulto 2023 Con Sponsors + Parche Campeón",
        precio: 299.9,
        precioIntimo: 219.9,
        imagen: "./img/Producto6.jpg"
    },
    {
        producto: "Polo de Algodón Azul Alianza Lima",
        precio: 99.9,
        precioIntimo: 79.9,
        imagen: "./img/Producto7.jpg"
    },
    {
        producto: "Polo Nike Azul de concentración",
        precio: 159.0,
        precioIntimo: 149.9,
        imagen: "./img/Producto8.jpg"
    },
    {
        producto: "Bandera Oficial Club Alianza Lima",
        precio: 39.90,
        precioIntimo: 34.9,
        imagen: "./img/Producto9.jpg"
    },
    {
        producto: "Banderín oficial - Club Alianza Lima",
        precio: 99.90,
        precioIntimo: 89.9,
        imagen: "./img/Producto10.jpg"
    },
    {
        producto: "Rompecabezas Señor de los Milagros",
        precio: 79.90,
        precioIntimo: 69.9,
        imagen: "./img/Producto11.jpg"
    }
    ,
    {
        producto: "Audifonos Sudio True Wireless Edición Alianza Lima",
        precio: 169.90,
        precioIntimo: 159.9,
        imagen: "./img/Producto12.jpg"
    }
]


productos.forEach((element)=>{
    console.log(element.imagen)
})