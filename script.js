mapboxgl.accessToken = "pk.eyJ1Ijoic3BibGlzYXJlbmtvMTIiLCJhIjoiY2xzMjlodmljMGthcjJrbXRibnRwZ2d3eCJ9.gxylQolcBDuJTH_WfI6MrA"; //accesstoken for map style

const map = new mapboxgl.Map({
    container: "my-map", //ID for my-map container
    center: [-79.39390704282365, 43.70777081498133], //starting position coordinates in longitude and latitude
    style: "mapbox://styles/spblisarenko12/cluiujkk2004d01p2djhvhsrg",
    zoom: 9.8, //starting zoom for the map

});

// Zoom controls
map.addControl(new mapboxgl.NavigationControl(), "top-left");

// Full screen control
map.addControl(new mapboxgl.FullscreenControl(), "top-left");


// Add event listener that changes the zoom level and poistion when button is clicked
document.getElementById('reset-button').addEventListener('click', () => {
    map.flyTo({
        center: [-79.39390704282365, 43.70777081498133],
        zoom: 9.8,
        essential: true
    });
});

let cycle;

// Use fetch method to access URL for GeoJSON and add it to variable
fetch("https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information")
    .then(response => response.json())
    .then(response => {
        console.log(response);
        cycle = response;
    })

map.on('load', () => {
    

    let bpoints;
    

    bpoints = {
        "type": "FeatureCollection",
        "features": [bpoints]
    }


    map.addSource("stations", {
        type: "geojson",
        data: "cycle", // Link to GeoJSON link in GitHub
        
    });
    //Add the GeoJSON link source as a new layer
    map.addLayer({
        "id": "stations",
        "type": "circle",
        "source": "stations",
        "paint": {
            "circle-color": "#000000"
        }
    });
    
    map.addSource("housing", {
        type: "geojson",
        data: 'https://raw.githubusercontent.com/Bpslisarenko11/GGR472-Group-Project/main/Affordable-housing.geojson', // Link to GeoJSON link in GitHub
        
    });
    //Add the GeoJSON link source as a new layer
    map.addLayer({
        "id": "houses",
        "type": "circle",
        "source": "housing",
        "paint": {
            "circle-color": [
                "case",
                ["boolean", ["==", ["get", "Actual_Construction_Completion"], ""], false], // Access the Area property of the Geojson
                //Assign colours based on Area values of each feature in the Geojson
                "#c994ff",
                "#8000ff"
            ],
            "circle-opacity": 1.0,
            "circle-radius": [
                "interpolate",
                ["linear"],
                ["zoom"],
                10, 4,
                22, 12
            ],
            "circle-stroke-color": "#000000",
            "circle-stroke-width": 0.5
    
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
            "circle-radius": [
                "interpolate",
                ["linear"],
                ["zoom"],
                10, 4,
                22, 12
            ],
            'circle-color': '#990042',
            "circle-stroke-color": "#000000",
            "circle-stroke-width": 0.5
        },
        "layout": {
            "visibility": "none"
        }

    });

    map.addSource("schools_all", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/Bpslisarenko11/GGR472-Group-Project/main/School-locations.geojson", // Link to GeoJSON link in GitHub
    
    });

    map.addLayer({
        'id': 'schools1',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                "interpolate",
                ["linear"],
                ["zoom"],
                10, 4,
                22, 12
            ],
            'circle-color': '#00ccff',
            "circle-stroke-color": "#000000",
            "circle-stroke-width": 0.5
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], "PR"],
        "layout": {
            "visibility": "none"
        }
    });

    map.addLayer({
        'id': 'schools2',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                "interpolate",
                ["linear"],
                ["zoom"],
                10, 4,
                22, 12
            ],
            'circle-color': '#00ccff',
            "circle-stroke-color": "#000000",
            "circle-stroke-width": 0.5
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'EP'],
        "layout": {
            "visibility": "none"
        }

    });

    map.addLayer({
        'id': 'schools3',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                "interpolate",
                ["linear"],
                ["zoom"],
                10, 4,
                22, 12
            ],
            'circle-color': '#00ccff',
            "circle-stroke-color": "#000000",
            "circle-stroke-width": 0.5
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'ES'],
        "layout": {
            "visibility": "none"
        }

    });

    map.addLayer({
        'id': 'schools4',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                "interpolate",
                ["linear"],
                ["zoom"],
                10, 4,
                22, 12
            ],
            'circle-color': '#00ccff',
            "circle-stroke-color": "#000000",
            "circle-stroke-width": 0.5
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'FP'],
        "layout": {
            "visibility": "none"
        }

    });

    map.addLayer({
        'id': 'schools5',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                "interpolate",
                ["linear"],
                ["zoom"],
                10, 4,
                22, 12
            ],
            'circle-color': '#00ccff',
            "circle-stroke-color": "#000000",
            "circle-stroke-width": 0.5
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'FS'],
        "layout": {
            "visibility": "none"
        }

    });

    map.addLayer({
        'id': 'schools6',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                "interpolate",
                ["linear"],
                ["zoom"],
                10, 4,
                22, 12
            ],
            'circle-color': '#00ccff',
            "circle-stroke-color": "#000000",
            "circle-stroke-width": 0.5
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'U'],
        "layout": {
            "visibility": "none"
        }

    });

    map.addLayer({
        'id': 'schools7',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                "interpolate",
                ["linear"],
                ["zoom"],
                10, 4,
                22, 12
            ],
            'circle-color': '#00ccff',
            "circle-stroke-color": "#000000",
            "circle-stroke-width": 0.5
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'C'],
        "layout": {
            "visibility": "none"
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
            'circle-radius': [
                "interpolate",
                ["linear"],
                ["zoom"],
                10, 4,
                22, 12
            ],
            'circle-color': '#ff0000',
            "circle-stroke-color": "#000000",
            "circle-stroke-width": 0.5
        },
        "layout": {
            "visibility": "none"
        }

    });

});


map.on('mouseenter', ['houses', "hospitals1", "subwaystops", "schools1", "schools2", "schools3", "schools4", "schools5", "schools6", "schools7"], (e) => {
    map.getCanvas().style.cursor = 'pointer'; //When hovering over "parks-shapes layer" change the mouse icon to pointer
    console.log(parklabel)
});

map.on('mouseleave', ['houses', "hospitals1", "subwaystops", "schools1", "schools2", "schools3", "schools4", "schools5", "schools6", "schools7"], (e) => {
    map.getCanvas().style.cursor = ''; //When pointer icon is no longer over "parks-shapes" layer reverse back to mouse cursor icon
});

map.on('click', 'houses', (e) => {
    coordinates1= e.lngLat
    console.log(coordinates1)
    new mapboxgl.Popup() //Create a popup when clicking the "parks-shapes" layer
    .setLngLat(e.lngLat) //Popup appears at the longitude and latitude of the click
        .setHTML("<b>Address: </b>" + e.features[0].properties.Address + "<br>" +
            "<b>Number of Units proposed:</b> " + e.features[0].properties.Most_recent_number_of_affordab + "<br>" +
            "<b>Number of Units built:</b> " + e.features[0].properties.Units_Built_Num + "<br>" + 
            "<b>Construction start date:</b> " + e.features[0].properties.Construction_Start_Date + "<br>" + 
            "<b>Construction completion date:</b> " + e.features[0].properties.Actual_Construction_Completion + "<br>" + "<br>" +  
            '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button class="btn btn-primary btn-sm" id="zoom-in">Zoom to Feature') //Access "parks-shapes" data to add name and location data to popup
        .addTo(map) //Add the pop up to the map
        document.getElementById('zoom-in').addEventListener('click', () => {
            map.flyTo({
                center: coordinates1,
                zoom: 13,
                essential: true
            });
        });
});

map.on('click', 'hospitals1', (e) => {
    new mapboxgl.Popup() //Create a popup when clicking the "parks-shapes" layer
    .setLngLat(e.lngLat) //Popup appears at the longitude and latitude of the click
        .setHTML("<b>Hospital Name: </b>" + e.features[0].properties.AGENCY_NAME + "<br>" +
            "<b>Address:</b> " + e.features[0].properties.ORGANIZATION_ADDRESS)
        .addTo(map); //Add the pop up to the map
});

map.on('click', ["schools1", "schools2", "schools3", "schools4", "schools5", "schools6", "schools7"], (e) => {
    new mapboxgl.Popup() //Create a popup when clicking the "parks-shapes" layer
    .setLngLat(e.lngLat) //Popup appears at the longitude and latitude of the click
        .setHTML("<b>School Name: </b>" + e.features[0].properties.NAME + "<br>" +
            "<b>Address:</b> " + e.features[0].properties.SOURCE_ADDRESS + "<br>" + 
            "<b>School Type:</b> " + e.features[0].properties.SCHOOL_TYPE_DESC)
        .addTo(map); //Add the pop up to the map
});

map.on('click', 'subwaystops', (e) => {
    new mapboxgl.Popup() //Create a popup when clicking the "parks-shapes" layer
    .setLngLat(e.lngLat) //Popup appears at the longitude and latitude of the click
        .setHTML("<b>Station Name: </b>" + e.features[0].properties.STATION + "<br>" +
            "<b>Address:</b> " + e.features[0].properties.ADDRESS_FU + "<br>" + 
            "<b>Website:</b> " + e.features[0].properties.WEBSITE)
        .addTo(map); //Add the pop up to the map
});


document.getElementById('affordable-housing-id').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'houses',
        'visibility',
        e.target.checked ? 'visible' : 'none'
    );
});

document.getElementById('hospitals-id').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'hospitals1',
        'visibility',
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

document.getElementById('schools-id-PR').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools1',
        'visibility',
         e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

document.getElementById('schools-id-EP').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools2',
        'visibility',
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

document.getElementById('schools-id-ES').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools3',
        'visibility',
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

document.getElementById('schools-id-FP').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools4',
        'visibility',
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

document.getElementById('schools-id-FS').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools5',
        'visibility',
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

document.getElementById('schools-id-U').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools6',
        'visibility',
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

document.getElementById('schools-id-C').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools7',
        'visibility',
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

document.getElementById('subways-id').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'subwaystops',
        "visibility",
         e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});