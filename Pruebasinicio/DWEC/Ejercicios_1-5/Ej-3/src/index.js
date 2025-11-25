import L from "leaflet";
import "leaflet/dist/leaflet.css";

const map = L.map("map").setView([39.475, -6.372], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
}).addTo(map);

fetch("https://raw.githubusercontent.com/jesusredondo/backupOpendataCCJSON/master/bares.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((bar) => {
      const lat = parseFloat(bar.latitud);
      const lng = parseFloat(bar.longitud);
      if (!isNaN(lat) && !isNaN(lng)) {
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            `<b>${bar.nombre}</b><br>Teléfono: ${bar.telefono || "No disponible"}<br>Sirve comida: ${bar.comida || "No especificado"}`
          );
      }
    });
  })
  .catch((error) => console.error("Error:", error));