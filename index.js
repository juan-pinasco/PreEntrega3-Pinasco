const productos = [
  { nombre: "Pan masa madre", precio: "100" },
  { nombre: "Budin masa madre", precio: "200" },
  { nombre: "Alfajor integral", precio: "300" },
  { nombre: "Mermelada natural", precio: "400" },
];

let carrito = [];

let seleccion = parseInt(
  prompt(`Hola, desea comprar algun producto?\n Si = 1\n No = 0 `)
);

while (seleccion != 1 && seleccion != 0) {
  alert("Por favor, ingrese:\n 1 = Si\n 0 = No");
  deseaComprarAlgo();
}
if (seleccion === 1) {
  alert(
    "A continucacion nuestra lista de productos:\n\n-Seleccione el producto con su numero indicado y agregalo al carrito."
  );
} else if (seleccion === 0) {
  alert("gracias por visitarnos, hasta pronto");
}

while (seleccion != 0) {
  let precio = 0;
  let nuestrosProductos = productos.map(
    (producto, index) =>
      index + 1 + "-  " + producto.nombre + " " + " $" + producto.precio
  );
  let opcionesDeProductoPorSeleccionar = parseInt(
    prompt(nuestrosProductos.join("\n"))
  );
  if (
    opcionesDeProductoPorSeleccionar == 1 ||
    opcionesDeProductoPorSeleccionar == 2 ||
    opcionesDeProductoPorSeleccionar == 3 ||
    opcionesDeProductoPorSeleccionar == 4
  ) {
    switch (opcionesDeProductoPorSeleccionar) {
      case 1:
        nombre = "Pan masa madre";
        precio = 100;
        break;
      case 2:
        nombre = "Budin masa madre";
        precio = 200;
        break;
      case 3:
        nombre = "Alfajor integral";
        precio = 300;
        break;
      case 4:
        nombre = "Mermelada natural";
        precio = 400;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("¿cuantas unidades quiere llevar?"));
    carrito.push({ nombre, unidades, precio });
  } else {
    alert("no tenemos ese producto");
  }
  deseaComprarAlgo();
  while (seleccion === 0) {
    let mensaje = `Gracias por confiar en nosotros. Tu carrito es el siguiente:\n\n`;
    carrito.map((carritoFinal) => {
      mensaje += ` -Producto: ${carritoFinal.nombre}, Unidades: ${
        carritoFinal.unidades
      }, Total a pagar por producto $${
        carritoFinal.unidades * carritoFinal.precio
      }\n`;
    });
    alert(mensaje);
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`El total a pagar es: $${total}`);

function deseaComprarAlgo() {
  seleccion = parseInt(prompt("Desea seguir comprando??\n 1 = Si\n 0 = No"));
}
