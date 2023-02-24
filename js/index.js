/*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- Me traigo el id del div padre de todo el contenido(mainContenido) a js --⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
const mainContenido = document.getElementById("mainContenido");

/*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- Me traigo el id del h1 en html (icono de carrito) al js  --⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
const verCarrito = document.getElementById("verCarrito");

/*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- Me traigo el id del div contenedorVentanaEmergente en html al js --⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
const contenedorVentanaEmergente = document.getElementById(
  "contenedorVentanaEmergente"
);

/*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- me traigo el id del span cantidadCarrito en html al js--⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
const cantidadCarrito = document.getElementById("cantidadCarrito");

/*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- Creo el array de carrito vacio + el get item del local storage--⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
let carrito = JSON.parse(localStorage.getItem("carro")) || []; // get "obtener" de local storage

/*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- Busco con forEach todos los productos y los inserto en forma de cards en html--⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
productos.forEach((bienes) => {
  let contenidoDeCadaUnaDeLasCards = document.createElement("div");
  contenidoDeCadaUnaDeLasCards.className = "card";
  contenidoDeCadaUnaDeLasCards.innerHTML = `
  <img src="${bienes.Img}">
  <h3>${bienes.nombre}</h3>
  <p class="precio">$ ${bienes.precio}</p>`;

  /*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- inserto las cards en el div padre, en html --⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
  mainContenido.append(contenidoDeCadaUnaDeLasCards);

  /*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- creo boton comprar de cada producto --⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
  let botonComprar = document.createElement("button");
  botonComprar.innerText = `Comprar`;
  botonComprar.className = `boton-comprar`;

  /*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- inserto en cada card el boton comprar en html --⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
  contenidoDeCadaUnaDeLasCards.append(botonComprar);

  /*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- cuando se clickea el boton "comprar" que se fije si hay 2 id repetidos  --⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
  botonComprar.addEventListener("click", () => {
    const repetido = carrito.some(
      (productoRepetido) => productoRepetido.id === bienes.id
    );

    /*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- En el caso de que si halla 2 id repetidos, que me sume su cantidad en carrito --⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
    if (repetido) {
      carrito.map((prod) => {
        if (prod.id === bienes.id) {
          prod.cantidad++;
        }
      });

      /*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- En caso contrario, que me pushee todo los datos del bien o prooducto al array --⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
    } else {
      carrito.push({
        id: bienes.id,
        nombre: bienes.nombre,
        precio: bienes.precio,
        Img: bienes.Img,
        cantidad: bienes.cantidad,
      });
    }
    /*⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-- cada vez que se clickea el boton comprar se activa la funcion de contar cantidad y guardar en el local storage --⬇⬇⬇⬇⬇⬇⬇⬇⬇  */
    contadorCarrito();
    guardarEnLocal();
  });
});

/* set "guardar" en local storage */
const guardarEnLocal = () => {
  localStorage.setItem("carro", JSON.stringify(carrito));
};
