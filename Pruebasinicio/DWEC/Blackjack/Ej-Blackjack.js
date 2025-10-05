const palos = ["Corazones", "Picas", "Treboles", "Diamantes"];
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jota", "Reina", "Rey"];

function repartirCarta() {
  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];
  return [palo, valor];
}

function valorCarta(carta) {
  if (["Jota", "Reina", "Rey"].includes(carta[1])) return 10;
  return carta[1];
}

function calcularTotal(mano) {
  return mano.reduce((total, carta) => total + valorCarta(carta), 0);
}

function mostrarMano(mano, jugador) {
  console.log(`\nCartas de ${jugador}:`);
  mano.forEach(carta => console.log(" -", carta));
  console.log(`Total: ${calcularTotal(mano)}\n`);
}

function jugarBlackjack() {
  console.clear();
  console.log("Bienvenido");

  let jugador = [repartirCarta(), repartirCarta()];
  let crupier = [repartirCarta(), repartirCarta()];

  mostrarMano(jugador, "Jugador");

  let seguir = true;
  while (seguir && calcularTotal(jugador) < 21) {
    let respuesta = prompt("¿Deseas otra carta? (s/n)").toLowerCase();
    if (respuesta === "s") {
      const nueva = repartirCarta();
      jugador.push(nueva);
      console.log("Carta nueva:", nueva);
      mostrarMano(jugador, "Jugador");
      if (calcularTotal(jugador) > 21) {
        console.log("Te pasaste de 21. ¡Pierdes!");
        return;
      }
    } else {
      seguir = false;
    }
  }

  while (calcularTotal(crupier) < 17) {
    crupier.push(repartirCarta());
  }

  mostrarMano(crupier, "Crupier");

  const totalJugador = calcularTotal(jugador);
  const totalCrupier = calcularTotal(crupier);

  console.log("Resultado final:");
  if (totalCrupier > 21 || totalJugador > totalCrupier) {
    console.log("Ganaste");
  } else if (totalJugador < totalCrupier) {
    console.log("Perdiste");
  } else {
    console.log("Empate.");
  }
}

jugarBlackjack();
