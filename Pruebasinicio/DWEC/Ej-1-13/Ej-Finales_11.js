function numerosPares(...numeros) {
  const pares = numeros.filter(n => typeof n === "number" && n % 2 === 0);
  console.log("Números pares:", pares);
}

numerosPares(1, 2, 3, 4, 5, 6, "hola", 8);
numerosPares(10, 15, 22, 33, 42);
