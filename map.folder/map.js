// Initialize map
var map = L.map('map').setView([22.9734, 78.6569], 5);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Example institutions (schools & colleges with names)
const institutions = [
  { name: "Ryan International School", type: "School", coords: [28.7041, 77.1025] }, // Delhi
  { name: "Delhi University", type: "College", coords: [28.6893, 77.2089] }, // Delhi
  { name: "BITS Pilani", type: "College", coords: [28.3589, 75.5880] }, // Rajasthan
  { name: "St. Xavier's School", type: "School", coords: [19.0760, 72.8777] }, // Mumbai
  { name: "IIT Kharagpur", type: "College", coords: [22.3149, 87.3105] } // West Bengal
];

// Add markers with color-coded style
institutions.forEach(inst => {
  const color = inst.type === "School" ? "blue" : "green";

  const marker = L.circleMarker(inst.coords, {
    radius: 9,
    color: color,
    fillColor: color,
    fillOpacity: 0.85
  }).addTo(map);

  marker.bindPopup(<b>${inst.name}</b><br>Type: ${inst.type});
});