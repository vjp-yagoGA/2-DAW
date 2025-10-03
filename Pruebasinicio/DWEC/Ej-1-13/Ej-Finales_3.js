function analizarArray(arr) {
    if (!Array.isArray(arr)) {
        console.log("El argumento debe ser un array.");
        return;
    }

    let numeros = [];
    let cadenas = [];
    let otros = [];

    for (let elem of arr) {
        if (typeof elem === 'number') {
            numeros.push(elem);
        } else if (typeof elem === 'string') {
            cadenas.push(elem);
        } else {
            otros.push(elem);
        }
    }

    console.log(`Números (${numeros.length}):`, numeros);
    console.log(`Cadenas (${cadenas.length}):`, cadenas);
    console.log(`Otros (${otros.length}):`, otros);
}


console.log("Prueba 1");
analizarArray([1, "hola", true, 42, "adiós", null, undefined]);

console.log("\nPrueba 2");
analizarArray(["uno", "dos", "tres"]);

console.log("\nPrueba 3");
analizarArray([100, 200, 300]);

console.log("\nPrueba 4");
analizarArray([{}, [], "texto", 10, NaN, Symbol("x")]);

console.log("\nPrueba 5 (error)");
analizarArray("esto no es un array");
