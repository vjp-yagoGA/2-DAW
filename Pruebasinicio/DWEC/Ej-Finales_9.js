class PlatoCocina {
    constructor(nombrePlato, duracionMinutos, dificultad) {
        this.nombrePlato = nombrePlato;
        this.duracionMinutos = duracionMinutos;
        this.dificultad = dificultad;
    }

    toString() {
        return `${this.nombrePlato} (Duración: ${this.duracionMinutos} min, Dificultad: ${this.dificultad})`;
    }
}

const plato1 = new PlatoCocina("Paella", 45, 3);
const plato2 = new PlatoCocina("Ensalada César", 15, 1);
const plato3 = new PlatoCocina("Tarta de Chocolate", 60, 4);

let mapaPlatos = new Map();
mapaPlatos.set(plato1, ["Arroz", "Pollo", "Mariscos", "Pimiento", "Azafrán"]);
mapaPlatos.set(plato2, ["Lechuga", "Pollo", "Queso parmesano", "Pan tostado", "Salsa César"]);
mapaPlatos.set(plato3, ["Chocolate", "Harina", "Huevos", "Azúcar", "Mantequilla"]);

function pintarMapa() {
    let texto = "";
    mapaPlatos.forEach((ingredientes, plato) => {
        texto += `${plato.toString()} -> Ingredientes: ${ingredientes.join(", ")}\n`;
    });
    console.log(texto);
}

pintarMapa();