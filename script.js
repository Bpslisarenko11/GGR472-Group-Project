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
        data: "https://raw.githubusercontent.com/Bpslisarenko11/GGR472-Group-Project/main/Health-Services.geojson", // Link to GeoJSON link in GitHub
    
    });

    map.addLayer({
        'id': 'hospitals1',
        'type': 'circle',
        'source': 'hospitals',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#000000'
        }

    });

    map.addSource("schools", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/Bpslisarenko11/GGR472-Group-Project/main/School-locations.geojson", // Link to GeoJSON link in GitHub
    
    });

    map.addLayer({
        'id': 'schools1',
        'type': 'circle',
        'source': 'schools',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#00fadd'
        }

    });

    map.addSource("subways1", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/Bpslisarenko11/GGR472-Group-Project/main/Subways.geojson", // Link to GeoJSON link in GitHub
    
    });

    map.addLayer({
        'id': 'subwaystops',
        'type': 'circle',
        'source': 'subways1',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#ff0000'
        }

    });
})