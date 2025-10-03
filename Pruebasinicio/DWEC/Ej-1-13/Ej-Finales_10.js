function sumaLongitudes(...cadenas) {
  if (!cadenas.every(c => typeof c === "string")) {
    console.error("Todos los elementos deben ser cadenas.");
    return;
  }

  const suma = cadenas.reduce((acc, cadena) => acc + cadena.length, 0);
  console.log("La suma de las longitudes es:", suma);
}

sumaLongitudes("Hola", "mundo", "JS");
sumaLongitudes("abc", "defgh");

