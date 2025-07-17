//18.5601° N, 68.3725° W
var coordinates =[18.5601, -68.3725];

let map = L.map("map", {
  center: coordinates,
  zoom: 10
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let circlemarker =L.circle(coordinates, {
  color: "black",
  fillcolor: "yellow",
  fillOpacity:0.25,
  radius: 50
}).bindpopup(`<iframe width="280" height="160" src="https://www.youtube.com/embed/xiN4ZkEc1O0?si=dbVgWhL6aKYurppt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`).addTo(map);
