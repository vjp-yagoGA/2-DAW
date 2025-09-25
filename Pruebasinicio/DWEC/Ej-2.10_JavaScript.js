function ejercicio1() {
  let num1 = parseFloat(prompt("Introduce el primer número:"));
  let num2 = parseFloat(prompt("Introduce el segundo número:"));
  let num3 = parseFloat(prompt("Introduce el tercer número:"));
  let suma = num1 + num2 + num3;

  if (suma === 100) {
    alert("Exito");
  } else {
    alert("Fracaso");
  }
}


function ejercicio2() {
  setTimeout(() => {
    alert("Hola");
  }, 3000);
}


function ejercicio3() {
  let nombre = prompt("Introduce tu nombre:");
  setTimeout(() => {
    alert("Como estas? " + nombre);
  }, 3000);
}


function ejercicio3() {
  let cadena = prompt("Escribe una palabra o frase:");
  let longitud = cadena.length;

  let vocales = cadena.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g);
  let numVocales = vocales ? vocales.length : 0;

  let empiezaPorA = cadena.charAt(0).toLowerCase() === "a";

  alert(
    `Número de caracteres: ${longitud}\n` +
    `Número de vocales: ${numVocales}\n` +
    `¿Empieza por "A"? ${empiezaPorA ? "Sí" : "No"}`
  );
}

