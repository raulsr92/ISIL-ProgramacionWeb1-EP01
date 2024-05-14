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

// ====================================== Interacción N° 02: Cargar la lista de productos desde un array de objetos

// Paso 1: Crear objeto de productos de la tienda

const productos =[
    {
        producto: "Camiseta Away <br> Mujer 2024",
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
        producto: "Gorra Alianza Lima <br> Nike 2024",
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
        producto: "Polo de Algodón Azul <br> Alianza Lima",
        precio: 99.9,
        precioIntimo: 79.9,
        imagen: "./img/Producto7-AL.jpg"
    },
    {
        producto: "Polo Nike Azul <br> de concentración",
        precio: 159.0,
        precioIntimo: 149.9,
        imagen: "./img/Producto8-AL.jpg"
    },
    {
        producto: "Bandera Oficial <br> Club Alianza Lima",
        precio: 39.90,
        precioIntimo: 34.9,
        imagen: "./img/Producto9-AL.jpg"
    },
    {
        producto: "Banderín oficial <br> Club Alianza Lima",
        precio: 99.90,
        precioIntimo: 89.9,
        imagen: "./img/Producto10-AL.jpg"
    },
    {
        producto: "Rompecabezas Señor <br> de los Milagros",
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
        <div class="col-11 col-md-6 col-lg-3 pb-3">
            <div class="card card-container">
                <a href="#" class="enlace-img-products"><img src="${element.imagen}" class="card-img-top" alt="..."></a>
                <div class="card-body">
                    <h5 class="card-title p-cards text-center">${element.producto}</h5>
                    <p class="p-cards p-cards__intimo text-center mb-2">S/ ${element.precioIntimo} <span class="badge text-bg-danger">Precio íntimo</span></p>
                    <p class="p-cards text-center mb-3">S/ ${element.precio}</p>
                    <a href="#" class="btn btn-primary btn-main w-100" id="btnComprar">¡Lo quiero!</a>
                </div>
            </div>
        </div>`
})

// ====================================== Interacción N° 03: Evento de Click al carrito de compras

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

// ====================================== Interacción N° 04: Evento de Click al icono de USUARIO (inicio sesión)

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

// Paso 4: Complementar que al hacer click X se cierre el formulario

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

let hamburgerIcon = document.querySelector(".navbar-toggler");

let navbarCollapse = document.querySelector(".navbar-collapse")

console.log(navbarCollapse)
navbarCollapse.style = "display: none";

hamburgerIcon.addEventListener("click", closeHeader);

function closeHeader() {
    if (navbarCollapse.style.display == "block" ) {
        navbarCollapse.style.display = "none"
        } else if(navbarCollapse.style.display == "none"){
            navbarCollapse.style.display = "block"
        }
        
}

// ====================================== Interacción N° 05: Evento de Click en botones de "Lo Quiero"

let btnPurchase = document.getElementsByClassName("btn-main");

console.log(btnPurchase);

for (let i = 0; i < btnPurchase.length; i++) {

    btnPurchase[i].addEventListener("click", registerRequirement);
    
}

function registerRequirement() {
    Swal.fire({
        title: "<strong>ANUNCIO</strong>",
        html: `
          <p>Debes registrarte para poder comprar.</p>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: true,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> OK
        `,
        background: "#0F3B73",
        color:"#F8F9FA",
        confirmButtonColor: "#807C5A",
      });
}

// ====================================== Interacción N° 06: Evento de Click en boton flotante

// capturar botón flotante
let btnFlotante = document.querySelector(".enlace-btn-flotante");
console.log(btnFlotante)

// capturar array de elementos h1 (para la ep02 se capturó array por el ´titulo añadido en la última sección)
let mainTitle = document.getElementsByClassName("mainTitle")

for (let j = 0; j < mainTitle.length; j++) {
    mainTitle[j].style.color = "#000D1E"
}

//capturar elementos span
let spanArray = document.getElementsByClassName("spanEdited")
console.log(spanArray);

// capturar elemento main
let mainPage = document.querySelector(".main")
console.log(mainPage);
console.log(mainPage.style.backgroundImage)

// capturar a los textos que indican la posicion del jugador (ultima seccion) -array

let textPosition = document.getElementsByClassName("players--position__title")
console.log(textPosition);

// capturar a a la caja que contiene la posicion del jugador (ultima seccion) - array

let boxPosition = document.getElementsByClassName("players--position__background")
console.log(boxPosition);

// capturar a a la caja que contiene la posicion del jugador (ultima seccion) - array

let linePlayers = document.getElementsByClassName("players--position")
console.log(linePlayers);

// capturar array de elementos h1 de publicidad

let mainElementsArray = document.getElementsByClassName("title-publicity")
console.log(mainElementsArray);
for (let j = 0; j < mainElementsArray.length; j++) {
    mainElementsArray[j].style.color = "#000D1E"
    console.log(mainElementsArray[j].style.color);
}

// capturar array de elementos p de publicidad

let pElementsArray = document.getElementsByClassName("parrafo-publicity")
console.log(pElementsArray);
for (let j = 0; j < mainElementsArray.length; j++) {
    pElementsArray[j].style.color = "#000D1E"
    console.log(mainElementsArray[j].style.color);
}

// llamado a evento click
btnFlotante.addEventListener("click", cambiarApariencia);

function cambiarApariencia() {

    //Cambiar color de título principal 

   /* if(mainTitle.style.color == "rgb(0, 13, 30)"){
        mainTitle.style.color = "#F8F9FA"
    } else{
        mainTitle.style.color = "#000D1E"
    }*/

    for (let i = 0; i < mainTitle.length; i++) {
        if(mainTitle[i].style.color == "rgb(0, 13, 30)"){
            mainTitle[i].style.color = "#F8F9FA"
        } else{
            mainTitle[i].style.color = "#000D1E"
        }
    
    }

    // Cambiar imagen fondo de la página

    const mainIsWhite = mainPage.classList.contains("backgroundWhite");

    if (mainIsWhite) {  // ¿El fondo es blanco?
        mainPage.classList.remove("backgroundWhite");
        mainPage.classList.add("backgroundBlack");
    } else{
        mainPage.classList.remove("backgroundBlack");
        mainPage.classList.add("backgroundWhite");   
    }

    // Cambiar de texto de la posicion de los jugadores

    for (let i = 0; i < textPosition.length; i++) {

        const textIsWhite = textPosition[i].classList.contains("text-color1");

        if (textIsWhite) {  // ¿El texto es blanco?
            textPosition[i].classList.remove("text-color1");
            textPosition[i].classList.add("text-color2");
        } else{
            textPosition[i].classList.remove("text-color2");
            textPosition[i].classList.add("text-color1");   
        }
    }


    // Cambiar de fondo de la caja que contiene la posicion de los jugadores

    for (let i = 0; i < boxPosition.length; i++) {

        const backisDark = boxPosition[i].classList.contains("mode1");

        if (backisDark) {  // ¿El fondo es oscuro?
            boxPosition[i].classList.remove("mode1");
            boxPosition[i].classList.add("mode2");
        } else{
            boxPosition[i].classList.remove("mode2");
            boxPosition[i].classList.add("mode1");   
        }
    }

    // Cambiar el color de la línea que está encima de la posición de c/ jugador

    for (let i = 0; i < linePlayers.length; i++) {

        const lineisDark = linePlayers[i].classList.contains("border-type-1");

        if (lineisDark) {  // ¿La línea es ocura?
            linePlayers[i].classList.remove("border-type-1");
            linePlayers[i].classList.add("border-type-2");
        } else{
            linePlayers[i].classList.remove("border-type-2");
            linePlayers[i].classList.add("border-type-1");   
        }
    }

    // Cambiar color de títulos de publicidad

    for (let i = 0; i < mainElementsArray.length; i++) {
        if(mainElementsArray[i].style.color == "rgb(0, 13, 30)"){
            mainElementsArray[i].style.color = "#F8F9FA"
        } else{
            mainElementsArray[i].style.color = "#000D1E"
        }
    
    }

    // Cambiar color de párrafos de publicidad

    for (let i = 0; i < pElementsArray.length; i++) {
        if(pElementsArray[i].style.color == "rgb(0, 13, 30)"){
            pElementsArray[i].style.color = "#F8F9FA"
        } else{
            pElementsArray[i].style.color = "#000D1E"
        }
    
    }

}


// =================== Evaluación Permanente N° 02 - API FETCH


let dataPlantilla = "../datos/plantilla.json";
let arrayPlantilla =[];

//capturar contenedor de las cards de jugadores

let arquerosContenedor = document.querySelector("#arqueros--container")
console.log(arquerosContenedor);

let defensasContenedor = document.querySelector("#defensas--container")

let volantesContenedor = document.querySelector("#volantes--container")

let delanterosContenedor = document.querySelector("#delanteros--container")

let cuerpoTecnicoContenedor = document.querySelector("#comando--container")


// Hacer fetch al archivo JSON de la plantilla de jugadores

fetch(dataPlantilla)
.then(resultado => {
    return resultado.json();
})
.then(datos =>{
    // Capturar array con toda la plantilla del club
    arrayPlantilla=datos.plantelAlianzaLima;

    console.log(arrayPlantilla);

    //Filtrar array con los arqueros  (método filter)

    let arrayArqueros = arrayPlantilla.filter(player => player.posicion=="arquero")
    console.log(arrayArqueros);

    //Recorrer array de arqueros y mostrarlos donde corresponde (método forEach)

    arrayArqueros.forEach(player => {
        arquerosContenedor.innerHTML += `
        <div class="col-9 col-sm-8 col-md-6 col-lg-4 col-xxl-3 p-2">
        <div class="outer-image">
          <div class="card inner-image">
            <div class="card-picture">
              <img src="./img/logo-dorado.jpg" alt="" style="width: 60px;" class="card-picture__logo">
              <a href="#">
                <img src="./img/${player.foto}" class="card-img-top" alt="...">
              </a>
            </div>

            <div class="card-body card-info">
              <p class="card-text card-info__dorsal">${player.dorsal}</p>
              <div class="card-info__cont"> 
                <p class="card-title card-info__name">${player.nombre}</p>

                <div class="card-info__personal">
                  <p class="card-info__year">${player.nacimiento}</p>
                  <p class="card-info__dot">| </p>
                  <div class="card-info__age">
                    <p>${player.edad}</p><span>años</span>
                  </div>
                </div>

              </div>
              <div class="card-info__country-container">
                <img class="card-info__country" src="./img/${player.paisFlag}" alt="" style="width: 40px;">
              </div>
            </div>
          </div>
        </div>
      </div>
        
        
        
        `
    });
    
    //Filtrar array con los defensas  (método filter)

    let arrayDefensas = arrayPlantilla.filter(player => player.posicion=="defensa")
    console.log(arrayDefensas);

    //Recorrer array de defensas y mostrarlos donde corresponde (método forEach)

    arrayDefensas.forEach(player => {
        defensasContenedor.innerHTML += `
        <div class="col-9 col-sm-8 col-md-6 col-lg-4 col-xxl-3 p-2">
        <div class="outer-image">
          <div class="card inner-image">
            <div class="card-picture">
              <img src="./img/logo-dorado.jpg" alt="" style="width: 60px;" class="card-picture__logo">
              <a href="#">
                <img src="./img/${player.foto}" class="card-img-top" alt="...">
              </a>
            </div>

            <div class="card-body card-info">
              <p class="card-text card-info__dorsal">${player.dorsal}</p>
              <div class="card-info__cont"> 
                <p class="card-title card-info__name">${player.nombre}</p>

                <div class="card-info__personal">
                  <p class="card-info__year">${player.nacimiento}</p>
                  <p class="card-info__dot">| </p>
                  <div class="card-info__age">
                    <p>${player.edad}</p><span>años</span>
                  </div>
                </div>

              </div>
              <div class="card-info__country-container">
                <img class="card-info__country" src="./img/${player.paisFlag}" alt="" style="width: 40px;">
              </div>
            </div>
          </div>
        </div>
      </div> 
        `
    });

    //Filtrar array con los volantes  (método filter)

    let arrayVolantes = arrayPlantilla.filter(player => player.posicion=="volante")
    console.log(arrayVolantes);

    //Recorrer array de volantes y mostrarlos donde corresponde (método forEach)

    arrayVolantes.forEach(player => {
        volantesContenedor.innerHTML += `
        <div class="col-9 col-sm-8 col-md-6 col-lg-4 col-xxl-3 p-2">
        <div class="outer-image">
          <div class="card inner-image">
            <div class="card-picture">
              <img src="./img/logo-dorado.jpg" alt="" style="width: 60px;" class="card-picture__logo">
              <a href="#">
                <img src="./img/${player.foto}" class="card-img-top" alt="...">
              </a>
            </div>

            <div class="card-body card-info">
              <p class="card-text card-info__dorsal">${player.dorsal}</p>
              <div class="card-info__cont"> 
                <p class="card-title card-info__name">${player.nombre}</p>

                <div class="card-info__personal">
                  <p class="card-info__year">${player.nacimiento}</p>
                  <p class="card-info__dot">| </p>
                  <div class="card-info__age">
                    <p>${player.edad}</p><span>años</span>
                  </div>
                </div>

              </div>
              <div class="card-info__country-container">
                <img class="card-info__country" src="./img/${player.paisFlag}" alt="" style="width: 40px;">
              </div>
            </div>
          </div>
        </div>
      </div>
        
        
        
        `
    });

    
    //Filtrar array con los delanteros  (método filter)

    let arrayDelanteros = arrayPlantilla.filter(player => player.posicion=="delantero")
    console.log(arrayDelanteros);

    //Recorrer array de volantes y mostrarlos donde corresponde (método forEach)

    arrayDelanteros.forEach(player => {
        delanterosContenedor.innerHTML += `
        <div class="col-9 col-sm-8 col-md-6 col-lg-4 col-xxl-3 p-2">
        <div class="outer-image">
          <div class="card inner-image">
            <div class="card-picture">
              <img src="./img/logo-dorado.jpg" alt="" style="width: 60px;" class="card-picture__logo">
              <a href="#">
                <img src="./img/${player.foto}" class="card-img-top" alt="...">
              </a>
            </div>

            <div class="card-body card-info">
              <p class="card-text card-info__dorsal">${player.dorsal}</p>
              <div class="card-info__cont"> 
                <p class="card-title card-info__name">${player.nombre}</p>

                <div class="card-info__personal">
                  <p class="card-info__year">${player.nacimiento}</p>
                  <p class="card-info__dot">| </p>
                  <div class="card-info__age">
                    <p>${player.edad}</p><span>años</span>
                  </div>
                </div>

              </div>
              <div class="card-info__country-container">
                <img class="card-info__country" src="./img/${player.paisFlag}" alt="" style="width: 40px;">
              </div>
            </div>
          </div>
        </div>
      </div>
        
        
        
        `
    });


    //Filtrar array con los miembros del comando técnico  (método filter)

    let arrayComando = arrayPlantilla.filter(player => player.posicion=="comando")
    console.log(arrayComando);

    //Recorrer array de volantes y mostrarlos donde corresponde (método forEach)

    arrayComando.forEach(player => {
        cuerpoTecnicoContenedor.innerHTML += `
        <div class="col-9 col-sm-8 col-md-6 col-lg-4 col-xxl-3 p-2">
        <div class="outer-image">
          <div class="card inner-image">
            <div class="card-picture">
              <img src="./img/logo-dorado.jpg" alt="" style="width: 60px;" class="card-picture__logo">
              <a href="#">
                <img src="./img/${player.foto}" class="card-img-top" alt="...">
              </a>
            </div>

            <div class="card-body card-info">
              <p class="card-text card-info__dorsal">${player.dorsal}</p>
              <div class="card-info__cont"> 
                <p class="card-title card-info__name">${player.nombre}</p>

                <div class="card-info__personal">
                  <p class="card-info__year">${player.nacimiento}</p>
                  <p class="card-info__dot">| </p>
                  <div class="card-info__age">
                    <p>${player.edad}</p><span>años</span>
                  </div>
                </div>

              </div>
              <div class="card-info__country-container">
                <img class="card-info__country" src="./img/${player.paisFlag}" alt="" style="width: 40px;">
              </div>
            </div>
          </div>
        </div>
      </div>
      `
    });    

})