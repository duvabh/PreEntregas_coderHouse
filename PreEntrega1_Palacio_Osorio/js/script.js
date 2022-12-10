let nombre = prompt("¡Bienvenido! \n ¿como te llamas?");
alert(`Hola ${nombre}, si deseas continuar dale clic en aceptar...`);
let menu = parseInt(
  prompt(
    "elije la opción del menú que deseas utilizar: \n 1. Calculadora de area de una Figura(Cuadrado, Triangulo, Circulo, etc...) \n 2. Calculador de promedio estudiante. \n 3. Salir"
  )
);

//Funcion para sacar promedio de notas
function promedioNotas() {
  let totalNotas = 0;
  let calFinal = 0;
  let nuMate = parseInt(prompt("Ingrese la cantidad de notas a promediar"));
  for (let i = 1; i < nuMate; i++) {
    let cal = parseInt(prompt("Introduce la calificacion de la materia " + i));
    totalNotas = totalNotas + cal;
  }
  calFinal = totalNotas / nuMate;
  return calFinal;
}

//Selección del menu de opciones
if (menu === 1) {
  let base = 0;
  let altura = 0;
  let radio = 0;
  let area = prompt("Ingrese la figura la cual desea conocer el area");

  switch (area) {
    case "triangulo":
      base = parseInt(prompt("Ingrese la base"));
      altura = parseInt(prompt("Ingrese la altura"));
      console.log(`El area del triangulo es ${(base * altura) / 2}`);
      break;
    case "cuadrado":
      base = parseInt(prompt("Ingrese la base"));
      altura = parseInt(prompt("Ingrese la altura"));
      console.log((arCuad = base * altura));
      break;
    case "circulo":
      let pi = 3.1416;
      radio = parseInt(prompt("Ingrese el radio del circulo"));
      console.log((arCirc = pi * radio * radio));
      break;
    default:
      console.log("Ingrese una figura valida");
      break;
  }
} else if (menu === 2) {
  calFinal = promedioNotas();
  console.log(`Tu promedio de nota final es: ${calFinal}`);
} else {
  alert("Lamentamos que te vayas y no poder ayudarte en lo que buscar");
}
