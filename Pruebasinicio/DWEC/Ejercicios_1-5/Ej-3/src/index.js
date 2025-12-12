import L from "leaflet";
import "leaflet/dist/leaflet.css";

const barIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

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
        const comidaText =
          bar.comida === "Sí"
            ? "<span style='color:green;font-weight:bold;'>Sí</span>"
            : "<span style='color:red;font-weight:bold;'>No</span>";
        const popupContent = `
          <div style="min-width:180px;">
            <h3 style="margin:0 0 8px 0;">${bar.nombre}</h3>
            <div><strong>Teléfono:</strong> ${bar.telefono || "No disponible"}</div>
            <div><strong>Sirve comida:</strong> ${comidaText}</div>
          </div>
        `;

        L.marker([lat, lng], { icon: barIcon })
          .addTo(map)
          .bindPopup(popupContent);
      }
    });
  })
  .catch((error) => console.error("Error:", error));