function procesarArray(arr) {
  if (!arr.every(elem => typeof elem === "number")) {
    alert("Error");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }

  const todosPares = arr.every(num => num % 2 === 0);

  if (todosPares) {
    alert("Éxito");
  } else {
    alert("Error");
  }
}

procesarArray([1, 2, 3]);
procesarArray([1, "a", 3]);
procesarArray([2, 5, 7]);
procesarArray([2.5, 3, 4]);   