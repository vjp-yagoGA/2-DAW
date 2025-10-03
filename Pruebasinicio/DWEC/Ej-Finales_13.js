function eliminarRepetidos(array) {
  const unicos = [];
  const repetidos = [];

  array.forEach((item, index) => {
    if (!unicos.includes(item)) {
      unicos.push(item);
    } else if (!repetidos.includes(item)) {
      repetidos.push(item);
    }
  });

  console.log("Array sin repetidos:", unicos);
  console.log("Elementos repetidos:", repetidos);
}

eliminarRepetidos([1, 2, 3, 2, 4, 5, 1, 6, 3, 7]);
eliminarRepetidos(["a", "b", "a", "c", "b", "d"]);
