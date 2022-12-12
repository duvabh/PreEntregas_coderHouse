// Declaración de variables
class creaProducto {
  constructor(marca, talla, precio) {
    this.marca = marca.toUpperCase();
    this.talla = talla.toUpperCase();
    this.precio = parseFloat(precio);
  }
}

// Array

const carrito = [];

// Función

function agregarProducto() {
  let marca = "";
  let talla = "";
  let precio = 0;
  let continuar = "";

  do {
    marca = prompt("Indica la marca del producto");
    talla = prompt("Ingrese la talla del producto agregar");
    precio = parseFloat(prompt("Ingrese el valor del producto $$$"));
    carrito.push(new creaProducto(marca, talla, precio)); // Agregar productos al array

    continuar = prompt(
      "Desea seguir agregando productos escibe SI, en lo contrario ingresa NO"
    );
    while (true) {
      //Validador de opciones de ingreso
      if (continuar == "si") {
        break;
      } else if (continuar == "no") {
        break;
      } else {
        alert("Opción invalida, vuelve a intentar");
        continuar = prompt("Desea seguir agregando productos");
      }
    }
  } while (continuar == "si");
  {
    console.log("Tus productos agregados son: ");
    carrito.forEach((prod) => {
      console.log(prod);
    });
  }
}

agregarProducto();

const precios = carrito.map((producto) => producto.precio);

const total = precios.reduce(
  (acumulador, elemento) => acumulador + elemento,
  0
);
alert(`El total de productos agregados es: $${total}`);
