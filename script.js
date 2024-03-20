mapboxgl.accessToken = "pk.eyJ1Ijoic3BibGlzYXJlbmtvMTIiLCJhIjoiY2xzMjlodmljMGthcjJrbXRibnRwZ2d3eCJ9.gxylQolcBDuJTH_WfI6MrA"; //accesstoken for map style

const map = new mapboxgl.Map({
    container: "my-map", //ID for my-map container
    center: [-79.34390704282365, 43.69777081498133], //starting position coordinates in longitude and latitude
    zoom: 10, //starting zoom for the map

});

// Zoom controls
map.addControl(new mapboxgl.NavigationControl(), "top-left");

// Full screen control
map.addControl(new mapboxgl.FullscreenControl(), "top-left");


// Add event listener that changes the zoom level and poistion when button is clicked
document.getElementById('reset-button').addEventListener('click', () => {
    map.flyTo({
        center: [-79.34390704282365, 43.69777081498133],
        zoom: 10,
        essential: true
    });
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
            'circle-radius': 4,
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
            'circle-radius': 4,
            'circle-color': '#000000'
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
            'circle-radius': 4,
            'circle-color': '#098a00'
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], "PR"],
    });

    map.addLayer({
        'id': 'schools2',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': 4,
            'circle-color': '#098a00'
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'EP']

    });

    map.addLayer({
        'id': 'schools3',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': 4,
            'circle-color': '#098a00'
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'ES']

    });

    map.addLayer({
        'id': 'schools4',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': 4,
            'circle-color': '#098a00'
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'FP']

    });

    map.addLayer({
        'id': 'schools5',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': 4,
            'circle-color': '#098a00'
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'FS']

    });

    map.addLayer({
        'id': 'schools6',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': 4,
            'circle-color': '#098a00'
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'U']

    });

    map.addLayer({
        'id': 'schools7',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': 4,
            'circle-color': '#098a00'
        },
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'C']

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
            'circle-radius': 4,
            'circle-color': '#ff0000'
        },

    });
})


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
        e.target.checked ? 'visible' : 'none'
    );
});

document.getElementById('schools-id-PR').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools1',
        'visibility',
        e.target.checked ? 'visible' : 'none'
    );
});

document.getElementById('schools-id-EP').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools2',
        'visibility',
        e.target.checked ? 'visible' : 'none'
    );
});

document.getElementById('schools-id-ES').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools3',
        'visibility',
        e.target.checked ? 'visible' : 'none'
    );
});

document.getElementById('schools-id-FP').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools4',
        'visibility',
        e.target.checked ? 'visible' : 'none'
    );
});

document.getElementById('schools-id-FS').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools5',
        'visibility',
        e.target.checked ? 'visible' : 'none'
    );
});

document.getElementById('schools-id-U').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools6',
        'visibility',
        e.target.checked ? 'visible' : 'none'
    );
});

document.getElementById('schools-id-C').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools7',
        'visibility',
        e.target.checked ? 'visible' : 'none'
    );
});

document.getElementById('subways-id').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'subwaystops',
        "visibility",
        e.target.checked ? 'visible' : 'none'
    );
});



let schooltypes

//Add new event listener
document.getElementById("school-type-filter").addEventListener('click',(e) => { 
    //Set the value of the areapoints variable  
    schooltypes = document.getElementById('school-class').value;

    //Create conditional if statements which based on the value of areapoints, detemrines the features of the geojson layer that get filtered or removed
    if (schooltypes == 'PR') {
        map.setFilter(
            "schools1",
            [ "==", ["get", "SCHOOL_TYPE"], "PR"]
        );
    }

    if (schooltypes == 'EP') {
        map.setFilter(
            "schools1",
            [ "==", ["get", "SCHOOL_TYPE"], "EP"]
        );
    }

    if (schooltypes == 'ES') {
        map.setFilter(
            "schools1",
            [ "==", ["get", "SCHOOL_TYPE"], "ES"]
        );
    }

    if (schooltypes == 'FP') {
        map.setFilter(
            "schools1",
            [ "==", ["get", "SCHOOL_TYPE"], "FP"]
        );
    }

    if (schooltypes == 'FS') {
        map.setFilter(
            "schools1",
            [ "==", ["get", "SCHOOL_TYPE"], "FS"]
        );
    }

    if (schooltypes == 'U') {
        map.setFilter(
            "schools1",
            [ "==", ["get", "SCHOOL_TYPE"], "U"]
        );
    }

    if (schooltypes == 'C') {
        map.setFilter(
            "schools1",
            [ "==", ["get", "SCHOOL_TYPE"], "C"]
        );
    }

    if (schooltypes == 'All-schools') {
        map.setFilter(
            "schools1",
            ["has", "SCHOOL_TYPE"]
        );
    }


})

var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}