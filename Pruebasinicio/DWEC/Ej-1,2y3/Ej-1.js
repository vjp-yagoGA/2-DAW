var persona = {
    nombre: "Jorge",
    "edad": 30,
    trabajos: [
        { descripcion: "Informatico", duracion: "2021-2024" },
        { descripcion: "Electricista", duracion: "2009-2015" }
    ],
    getInfo: function () {  
        let cadenaDevuelta = "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años. ";
        cadenaDevuelta += "Trabajos realizados: ";
        for (let i = 0; i < this.trabajos.length; i++) {
            cadenaDevuelta += this.trabajos[i].descripcion + " (" + this.trabajos[i].duracion + ")";
            if (i < this.trabajos.length - 1) {
                cadenaDevuelta += ", ";
            }
        }
        return cadenaDevuelta;
    }
};

console.log(persona.getInfo());

