class Musica {
    constructor(titulo, autor, anioPublicado, ventas) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicado = anioPublicado;
        this.ventas = ventas;
    }
    setTitulo(titulo) { this.titulo = titulo; }
    setAutor(autor) { this.autor = autor; }
    setAnioPublicado(anio) { this.anioPublicado = anio; }
    setVentas(ventas) { this.ventas = ventas; }
    getInfo() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anioPublicado}, Ventas: ${this.ventas}`;
    }
}

class Calle {
    constructor(nombre, longitud, establecimientos) {
        this.nombre = nombre;
        this.longitud = longitud;
        this.establecimientos = establecimientos;
    }
    setNombre(nombre) { this.nombre = nombre; }
    setLongitud(longitud) { this.longitud = longitud; }
    setEstablecimientos(establecimientos) { this.establecimientos = establecimientos; }
    getInfo() {
        return `Calle: ${this.nombre}, Longitud: ${this.longitud}m, Establecimientos: ${this.establecimientos.join(", ")}`;
    }
}

class Coche {
    constructor(modelo, dueno, marca) {
        this.modelo = modelo;
        this.dueno = dueno; 
        this.marca = marca; 
    }
    setModelo(modelo) { this.modelo = modelo; }
    setDueno(dueno) { this.dueno = dueno; }
    setMarca(marca) { this.marca = marca; }
    getInfo() {
        return `Modelo: ${this.modelo}, Dueño: ${this.dueno.nombre} (${this.dueno.edad} años), Marca: ${this.marca.nombre} (Creada en ${this.marca.anioCreacion})`;
    }
}

class Teatro {
    constructor(titulo, fechaEstreno, director, actores) {
        this.titulo = titulo;
        this.fechaEstreno = fechaEstreno;
        this.director = director; 
        this.actores = actores;   
    }
    setTitulo(titulo) { this.titulo = titulo; }
    setFechaEstreno(fecha) { this.fechaEstreno = fecha; }
    setDirector(director) { this.director = director; }
    setActores(actores) { this.actores = actores; }
    getInfo() {
        let info = `Obra: ${this.titulo}\nFecha de estreno: ${this.fechaEstreno}\n`;
        info += `Director: ${this.director.nombre} ${this.director.apellidos} (Nacido en ${this.director.nacimiento})\n`;
        info += `Obras del director: ${this.director.obras.join(", ")}\n`;
        info += `Actores:\n`;
        this.actores.forEach(actor => {
            info += `- ${actor.nombre}, Edad: ${actor.edad}, Veces representada: ${actor.veces}\n`;
        });
        return info;
    }
}

// Disco de música
const disco = new Musica("Thriller", "Michael Jackson", 1982, 66000000);
console.log("Disco de música:", disco.getInfo());

// Calle de una ciudad
const calle = new Calle("Gran Vía", 1300, ["Café Central", "Teatro Lope de Vega", "Hotel Emperador"]);
console.log("Calle de una ciudad:", calle.getInfo());

// Coche
const coche = new Coche(
    "Golf",
    { nombre: "Raul", edad: 23 },
    { nombre: "Volkswagen", anioCreacion: 1937 }
);
console.log("Coche:", coche.getInfo());

// Teatro
const director = {
    nombre: "Juan",
    apellidos: "Pérez García",
    nacimiento: 1970,
    obras: ["El viaje", "La sombra", "Luz de luna"]
};

const actores = [
    { nombre: "Irene López", edad: 20, veces: 15 },
    { nombre: "Carlos Ruiz", edad: 23, veces: 20 },
    { nombre: "Marta Díaz", edad: 25, veces: 18 }
];

const teatro = new Teatro("La Obra", "2025-10-20", director, actores);
console.log(teatro.getInfo());