let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  
  


  map = new Map(document.getElementById("mapContainer"), {
    center: { lat: 36.3570052, lng: 6.6390282 },
    zoom: 18,
  });
}

initMap();