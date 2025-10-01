function sumaLongitudes(...args) {
    if (!args.every(arg => typeof arg === "string")) {
        throw new Error("Todos los argumentos deben ser cadenas.");
    }
    const total = args.reduce((acc, str) => acc + str.length, 0);
    console.log(`La suma total de las longitudes es: ${total}`);
}


sumaLongitudes("Hey", "Bienvenido", "javascript");
sumaLongitudes("a", "b", "c", "d"); 
sumaLongitudes("Adios"); 

