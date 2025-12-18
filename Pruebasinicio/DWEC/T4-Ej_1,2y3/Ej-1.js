var disco = {
    titulo: "Thriller",
    autor: "Michael Jackson",
    anio: 1982,
    ventas: 66000000,
    getInfo() {
        return "Título: " + this.titulo + "\n" +
               "Autor: " + this.autor + "\n" +
               "Año: " + this.anio + "\n" +
               "Ventas: " + this.ventas + " unidades";
    }
};
var calle = {
    nombre: "Calle Mayor",
    longitud: 1500,
    establecimientos: ["Café Central", "Librería El Globo", "Panadería La Esquina"],
    getInfo() {
        let establecimientosLista = this.establecimientos.join(", ");
        return "Nombre: " + this.nombre + "\n" +
               "Longitud: " + this.longitud + " metros\n" +
               "Establecimientos: " + establecimientosLista;
    }
};
var coche = {
    modelo: "Modelo 3",
    dueño: {
        nombre: "Juan Pérez",
        edad: 34
    },
    marca: {
        nombre: "Tesla",
        anioCreacion: 2003
    },
    getInfo() {
        return "Modelo: " + this.modelo + "\n" +
               "Dueño: " + this.dueño.nombre + " (Edad: " + this.dueño.edad + ")\n" +
               "Marca: " + this.marca.nombre + " (Año de creación: " + this.marca.anioCreacion + ")";
    }
};
var obraTeatro = {
    titulo: "Romeo y Julieta",
    fechaEstreno: "1597-01-01",
    director: {
        nombre: "William",
        apellidos: "Shakespeare",
        nacimiento: 1564,
        obras: ["Hamlet", "Macbeth", "Otelo"]
    },
    actores: [
        { nombre: "Leonardo DiCaprio", edad: 50, representaciones: 15 },
        { nombre: "Claire Danes", edad: 46, representaciones: 12 },
        { nombre: "John Leguizamo", edad: 60, representaciones: 10 }
    ],
    getInfo() {
        let actoresInfo = this.actores.map(actor => 
            "- " + actor.nombre + " (Edad: " + actor.edad + ", Representaciones: " + actor.representaciones + ")"
        ).join("\n");
        let obrasDirector = this.director.obras.join(", ");
        return "Título: " + this.titulo + "\n" +
               "Fecha de estreno: " + this.fechaEstreno + "\n" +
               "Director: " + this.director.nombre + " " + this.director.apellidos + 
               " (Nacimiento: " + this.director.nacimiento + ", Obras: " + obrasDirector + ")\n" +
               "Actores:\n" + actoresInfo;
    }
};

console.log(disco.getInfo());
console.log(calle.getInfo()); 
console.log(coche.getInfo());  
console.log(obraTeatro.getInfo());