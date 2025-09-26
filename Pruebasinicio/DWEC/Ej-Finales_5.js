function ordenarArray(arr) {

    let array = [...arr];  
    let n = array.length;
    let intercambiado;

    do {
        intercambiado = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
              
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                intercambiado = true;
            }
        }
        n--;
    } while (intercambiado);

    return array;
}


console.log(ordenarArray([5, 3, 8, 4, 2]));  
console.log(ordenarArray([10, 1, 7, 6, 14])); 
