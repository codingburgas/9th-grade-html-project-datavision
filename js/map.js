const map = L.map('map').setView([42.6977, 23.3219], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const incidentMarker = L.marker([42.6977, 23.3219]).addTo(map)
  .bindPopup("Произшествие: Пожар на ул. Пирин.")
  .openPopup();
