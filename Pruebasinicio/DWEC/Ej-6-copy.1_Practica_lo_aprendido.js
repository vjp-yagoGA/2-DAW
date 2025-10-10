const colores = ["red", "blue", "green", "yellow"];
const contenedor = document.getElementById("contenedorGeneral");

function crearMatriz(filas, columnas) {
    contenedor.style.display = "grid";
    contenedor.style.gridTemplateColumns = `repeat(${columnas}, 50px)`;
    contenedor.style.gridGap = "10px";

    for (let i = 0; i < filas * columnas; i++) {
        const boton = document.createElement("button");
        boton.style.width = "50px";
        boton.style.height = "50px";
        asignarEventos(boton);
        contenedor.appendChild(boton);
    }
}

function asignarEventos(boton) {
    boton.addEventListener("mousedown", (evento) => {
        evento.preventDefault();
        let colorActual = boton.style.backgroundColor || "white";
        let indice = colores.indexOf(colorActual);

        if (indice === -1) indice = -1;

        if (evento.button === 0) {
          
            indice = (indice + 1) % colores.length;
            boton.style.backgroundColor = colores[indice];
        } else if (evento.button === 2) {
      
            indice = (indice - 1 + colores.length) % colores.length;
            boton.style.backgroundColor = colores[indice];
        } else if (evento.button === 1) {
          
        }
    });

    boton.addEventListener("contextmenu", (e) => e.preventDefault());
}

crearMatriz(10, 10);
