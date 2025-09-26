function procesarArray(arr) {
if (!arr.every(elem => typeof elem === "number")) {
    alert("Error")
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    if (todosPares) {
    alert("Exito");
  } else {
    alert("Error");
  }
}
procesarArray([1, 2, 3]);     
procesarArray([1, "a", 3]);
procesarArray([2, 5, 7]);  
procesarArray([2.5,3,4])  