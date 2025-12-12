document.getElementById("enviar").onclick = function () {
  const nombre = document.getElementById("nombre").value.trim();
  if (!nombre) return alert("Introduce un nombre.");
  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");
  if (usuarios[nombre]) {
    alert(`Edad de ${nombre}: ${usuarios[nombre]}`);
  } else {
    const edad = prompt("No existe ese nombre. Introduce la edad:");
    if (edad && !isNaN(edad)) {
      usuarios[nombre] = edad;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert(`Usuario ${nombre} añadido con edad ${edad}.`);
    } else {
      alert("Edad no válida.");
    }
  }
  document.getElementById("nombre").value = "";
};

document.getElementById("consultar").onclick = function () {
  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");
  const list = document.getElementById("list");
  list.innerHTML = "<h3>Usuarios registrados:</h3>";
  if (Object.keys(usuarios).length === 0) {
    list.innerHTML += "<div>No hay usuarios registrados.</div>";
  } else {
    Object.entries(usuarios).forEach(([nombre, edad]) => {
      list.innerHTML += `<div class="user">${nombre}: <strong>${edad}</strong> años</div>`;
    });
  }
};