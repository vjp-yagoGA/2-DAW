class Trabajador {
    constructor(nombre, numHorasSemanales, salarioPorHora) {
        this.nombre = nombre;
        this.numHorasSemanales = numHorasSemanales;
        this.salarioPorHora = salarioPorHora;
    }

    pintarInfo() {
        return "El nombre del trabajador es: " + this.nombre + "\n" +
               "El número de horas semanales: " + this.numHorasSemanales + "\n" +
               "El precio/hora: " + this.salarioPorHora;
    }

    getSaldoSemanal() {
        return this.numHorasSemanales * this.salarioPorHora;
    }
}
class Restaurante {
    constructor(nombre) {
        this.nombre = nombre;
        this.trabajadores = [];
    }

    anadirTrabajador(trabajador) {
        this.trabajadores.push(trabajador);
    }

    pintarInfo() {
        let info = "INFORMACIÓN DEL RESTAURANTE " + this.nombre + "\n";
        if (this.trabajadores.length === 0) {
            info += "No hay trabajadores!";
        } else {
            this.trabajadores.forEach((trabajador, index) => {
                info += "Trabajador " + index + ":\n" + trabajador.pintarInfo() + "\n";
            });
        }
        return info;
    }

    getPagosSemanales() {
        return this.trabajadores.reduce((total, trabajador) => total + trabajador.getSaldoSemanal(), 0);
    }
}
let restaurante = new Restaurante("La tapería");
console.log(restaurante.pintarInfo()); 
restaurante.anadirTrabajador(new Trabajador("Pepe", 40, 10));
restaurante.anadirTrabajador(new Trabajador("Laura", 35, 15));
restaurante.anadirTrabajador(new Trabajador("Marcos", 20, 10));
console.log(restaurante.pintarInfo()); 
console.log("Mantener a los trabajadores del restaurante cuesta: " + restaurante.getPagosSemanales());