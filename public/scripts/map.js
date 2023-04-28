let map = L.map("map").setView([45.86171130602756, 24.91298097356613], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//Marker Icon
let icon = L.icon({
  iconUrl: "/images/mapIcon.png",
  iconSize: [35, 30],
});

//Markers
let markerPitesti = L.marker([44.87689563129526, 24.855929477032046], {
  icon: icon,
}).addTo(map);

let markerBucuresti = L.marker([44.439993, 26.087717], {
  icon: icon,
}).addTo(map);

let markerBacau = L.marker([46.56767211679754, 26.915024605157587], {
  icon: icon,
}).addTo(map);

let markerConstanta = L.marker([44.19345777247842, 28.638951841931895], {
  icon: icon,
}).addTo(map);

let markerCluj = L.marker([46.777386091514565, 23.589568489558477], {
  icon: icon,
}).addTo(map);

let markerBaiaMare = L.marker([47.6526043269586, 23.55910517125853], {
  icon: icon,
}).addTo(map);

//44.86171130602756, 24.791298097356613;
//44.87689563129526, 24.855929477032046 - pitesi marker
//44.439993, 26.087717 - bucuresti marker
//46.56767211679754, 26.915024605157587 - bacau marker
//44.19345777247842, 28.638951841931895 - constanta marker
//46.777386091514565, 23.589568489558477 - cluj marker
//47.6526043269586, 23.55910517125853 - baiaMare marker
