require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {
    esriConfig.apiKey = "AAPK5c5a8ece12214f40bc6e26716c031b6bxdGRfHT0VxMHAIp2xDtb2PDhsj3ASGxazyLElM3-0uo-8VXSftrtTHi6EWYCNcIy";

    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    });

    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element
    });
  });

/* leaflef */
let myMap = L.map('mapid').setView([-16.130,-64.534], 7)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 15,
}).addTo(myMap);

let iconMarker = L.icon({
    iconUrl: 'static/image/icons.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})

let marker2 = L.marker([-14.442222, -67.528333], { icon: iconMarker }).addTo(myMap)
let marker3 = L.marker([-14.85195, -66.74954], { icon: iconMarker }).addTo(myMap)
let marker4 = L.marker([-15.77305, -68.64973], { icon: iconMarker }).addTo(myMap)
let marker5 = L.marker([-15.1812827,-68.9974937], { icon: iconMarker }).addTo(myMap)

myMap.doubleClickZoom.disable()
myMap.on('dblclick', e => {
  let latLng = myMap.mouseEventToLatLng(e.originalEvent);

  L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(myMap)
})

document.getElementById("select-location").addEventListener('change', function(e){
    coords = e.target.value.split(","),
    myMap.flyTo(coords, 13)
});