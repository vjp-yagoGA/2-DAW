function compararCadenas(cadena1, cadena2) {
    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        console.log("Error: Ambos argumentos deben ser cadenas de texto.");
        return;
    }

    if (cadena1.length < cadena2.length) {
        console.log(`La cadena mas corta es: "${cadena1}"`);
    } else if (cadena2.length < cadena1.length) {
        console.log(`La cadena mas corta es: "${cadena2}"`);
    } else {
        console.log("Ambas cadenas tienen la misma longitud.");
    }
}


compararCadenas("Bienvenido", "adiós");    
compararCadenas("Elefante", "Rinoceronte");      
compararCadenas("Uno", 123);      
compararCadenas("Corto", "Largo");  