function sonInversas(cadena1, cadena2) {
    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        console.log("Ambos argumentos deben ser cadenas de texto");
        return;
    }

    const cadena2Invertida = cadena2.split('').reverse().join('');

    if (cadena1 === cadena2Invertida) {
        console.log(`"${cadena1}" es igual a "${cadena2}" del reves`);
    } else {
        console.log(`"${cadena1}" no es igual a "${cadena2}" del reves`);
    }
}


sonInversas("amor", "roma");       
sonInversas("sol", "los");      
sonInversas("gato", "perro");      
sonInversas("123", 321);           
sonInversas("bueno", "bueno");    
