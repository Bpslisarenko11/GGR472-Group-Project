mapboxgl.accessToken = "pk.eyJ1Ijoic3BibGlzYXJlbmtvMTIiLCJhIjoiY2xzMjlodmljMGthcjJrbXRibnRwZ2d3eCJ9.gxylQolcBDuJTH_WfI6MrA"; //accesstoken for map style

const map = new mapboxgl.Map({
    container: "my-map", //ID for my-map container
    center: [-79.37390704282365, 43.64777081498133], //starting position coordinates in longitude and latitude
    zoom: 11, //starting zoom for the map

});

map.on('load',() => {
    
    map.addSource("housing", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/Bpslisarenko11/GGR472-Group-Project/main/Affordable-housing.geojson", // Link to GeoJSON link in GitHub
    
    });

    map.addLayer({
        'id': 'houses',
        'type': 'circle',
        'source': 'housing',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#600094'
        }

    });

    map.addSource("hospitals", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/Bpslisarenko11/GGR472-Group-Project/main/Affordable-housing.geojson", // Link to GeoJSON link in GitHub
    
    });
})