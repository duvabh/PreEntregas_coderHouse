let nombre = prompt("¡Bienvenido! \n ¿como te llamas?");
alert(`Hola ${nombre}, para continuar dale clic en aceptar.`);
let menu = parseInt(
  prompt(
    "elije la opción del menú que deseas utilizar: \n 1. Camisetas \n 2. Jeans \n 3. Accesorios \n 4. Salir"
  )
);

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
