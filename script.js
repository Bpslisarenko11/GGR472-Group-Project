mapboxgl.accessToken = "pk.eyJ1Ijoic3BibGlzYXJlbmtvMTIiLCJhIjoiY2xzMjlodmljMGthcjJrbXRibnRwZ2d3eCJ9.gxylQolcBDuJTH_WfI6MrA"; // Adds Mapbox access token

const map = new mapboxgl.Map({
    container: "my-map", //ID for my-map container
    center: [-79.39390704282365, 43.70777081498133], //starting position coordinates for the map in longitude and latitude
    style: "mapbox://styles/spblisarenko12/cluiujkk2004d01p2djhvhsrg", // Adds mapbox style
    zoom: 9.8, //starting zoom level for the map

});

// Zoom controls added to top left of map
map.addControl(new mapboxgl.NavigationControl(), "top-left");

// Full screen control added to top left of map
map.addControl(new mapboxgl.FullscreenControl(), "top-left");



// Add event listener that resets the zoom level and coordinates of the map to that of the original map load
document.getElementById('reset-button').addEventListener('click', () => {
    map.flyTo({
        center: [-79.39390704282365, 43.70777081498133], //original map load coordinates
        zoom: 9.8, //original map zoom level
        essential: true
    });
});

map.on('load', () => {

    //Add data source for the Affordable housing layer
    map.addSource("housing", {
        type: "geojson",
        data: 'https://bpslisarenko11.github.io/GGR472-Group-Project/Data/Affordable-housing.geojson', //Affordable housing GeoJSON link in GitHub
        
    });
    //Add the Affordable housing data as a new layer
    map.addLayer({
        "id": "houses",
        "type": "circle",
        "source": "housing",
        "paint": {
            "circle-color": [
                "case",
                ["boolean", ["==", ["get", "Actual_Construction_Completion"], ""], false], //Access the "Actual_Construction_Completion" property in the Geojson and determine if there is any value or not
                //Assign different colours based on whether the features have any value in the "Actual_Construction_Completion" property
                "#c994ff",
                "#8000ff"
            ],
            "circle-opacity": 1.0,
            "circle-radius": [
                //change the size of the circle points using a linear interpolation depending on the zoom level of the map 
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

    //Add data source for the hospitals layer
    map.addSource("hospitals", {
        type: "geojson",
        data: "https://bpslisarenko11.github.io/GGR472-Group-Project/Data/Health-Services.geojson", //Hospitals GeoJSON link in GitHub
    
    });

    //Add the Hospitals data as a new layer
    map.addLayer({
        'id': 'hospitals1',
        'type': 'circle',
        'source': 'hospitals',
        'paint': {
            "circle-radius": [
                //change the size of the circle points using a linear interpolation depending on the zoom level of the map 
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
        //Set the layer as not visible on the initial map load
        "layout": {
            "visibility": "none"
        }

    });

    //Add the data source for the Schools layer
    map.addSource("schools_all", {
        type: "geojson",
        data: "https://bpslisarenko11.github.io/GGR472-Group-Project/Data/School-locations.geojson", //Schools GeoJSON link in GitHub
    
    });

    //Add the schools data source as a new layer
    map.addLayer({
        'id': 'schools1',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                //change the size of the circle points using a linear interpolation depending on the zoom level of the map 
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
        'filter': ['==', ['get', 'SCHOOL_TYPE'], "PR"], //Filter the schools data to only add private schools in this layer
    
        //Set the layer as not visible on the initial map load
        "layout": {
            "visibility": "none"
        }
    });

    //Add another layer from the schools data 
    map.addLayer({
        'id': 'schools2',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                //change the size of the circle points using a linear interpolation depending on the zoom level of the map 
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
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'EP'], //Filter the schools data to only add English Public schools in this layer

        //Set the layer as not visible on the initial map load
        "layout": {
            "visibility": "none"
        }

    });

    //Add new layer from the schools data 
    map.addLayer({
        'id': 'schools3',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                //change the size of the circle points using a linear interpolation depending on the zoom level of the map 
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
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'ES'], //Filter the schools data to only add English Catholic schools in this layer

        //Set the layer as not visible on the initial map load
        "layout": {
            "visibility": "none"
        }

    });

    //Add a new layer from the schools data
    map.addLayer({
        'id': 'schools4',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            //change the size of the circle points using a linear interpolation depending on the zoom level of the map 
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
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'FP'], //Filter the schools data to only add French Public schools in this layer

        //Set the layer as not visible on the initial map load
        "layout": {
            "visibility": "none"
        }

    });

    //Add a new layer from the schools data
    map.addLayer({
        'id': 'schools5',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                //change the size of the circle points using a linear interpolation depending on the zoom level of the map 
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
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'FS'], //Filter the schools data to only add French Catholic schools in this layer

        //Set the layer as not visible on the initial map load
        "layout": {
            "visibility": "none"
        }

    });

    //Add a new layer from the schools data
    map.addLayer({
        'id': 'schools6',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                //change the size of the circle points using a linear interpolation depending on the zoom level of the map 
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
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'U'], //Filter the schools data to only add Universities in this layer

        //Set the layer as not visible on the initial map load
        "layout": {
            "visibility": "none"
        }

    });

    //Add a new layer from the schools data
    map.addLayer({
        'id': 'schools7',
        'type': 'circle',
        'source': 'schools_all',
        'paint': {
            'circle-radius': [
                //change the size of the circle points using a linear interpolation depending on the zoom level of the map 
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
        'filter': ['==', ['get', 'SCHOOL_TYPE'], 'C'], //Filter the schools data to only add Colleges in this layer

        //Set the layer as not visible on the initial map load
        "layout": {
            "visibility": "none"
        }

    });


    //Add the data source for the Subways layer
    map.addSource("subways1", {
        type: "geojson",
        data: "https://bpslisarenko11.github.io/GGR472-Group-Project/Data/Subways.geojson", //Subways GeoJSON link in GitHub
    
    });

    //Add the Subways data as a new layer
    map.addLayer({
        'id': 'subwaystops',
        'type': 'circle',
        'source': 'subways1',
        'paint': {
            'circle-radius': [
                //change the size of the circle points using a linear interpolation depending on the zoom level of the map 
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
        //Set the layer as not visible on the initial map load
        "layout": {
            "visibility": "none"
        }

    });


    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        zoom: 13,
        placeholder: 'Enter an address or place name',
        countries: 'ca',
        bbox: [-79.6393, 43.5806, -79.115, 43.8555] // Toronto bounding box
      });
    
      //Add geocoder to top right corner of the map container
      map.addControl(geocoder, "top-right")
    
      let marker = new mapboxgl.Marker({ color: "#f50049" }); // Declare marker outside event listener
    
      geocoder.on('result', async (event) => {
        const point = event.result.center;
    
        // Remove previous marker
        if (marker) {
          marker.remove();
        }
    
        marker = new mapboxgl.Marker({ color: "#f50049" }).setLngLat(point).addTo(map); // Assign new marker
    
        const tileset = "spblisarenko12.5wsb1te2"; //Add mapbox tileset to variable
        const radius = 500; //distance within which points from the tileset will be added
        const limit = 50;

        //Fetch api and apply tileset variable
        const query = await fetch(
          `https://api.mapbox.com/v4/${tileset}/tilequery/${point[0]},${point[1]}.json?radius=${radius}&limit=${limit}&access_token=${mapboxgl.accessToken}`,
          { method: 'GET' }
        );

        const json = await query.json(); //convert query variable to json, and store in json variable
        console.log(json);
    
        // Remove previous data source
        if (map.getSource(`tilequery-${tileset}`)) {
          map.removeLayer('tilequery-points');
          map.removeSource(`tilequery-${tileset}`);
        }
    
        // Add the new source
        map.addSource(`tilequery-${tileset}`, {
          type: 'geojson',
          data: json
        });
    
        // Add a layer to display the features
        map.addLayer({
          id: 'tilequery-points',
          type: 'circle',
          source: `tilequery-${tileset}`,
          paint: {
            'circle-radius': 7,
            'circle-color': "#f50049",
            'circle-opacity': 0.35
          }
        });
      });

});


map.on('mouseenter', ['houses', "hospitals1", "subwaystops", "schools1", "schools2", "schools3", "schools4", "schools5", "schools6", "schools7"], (e) => {
    map.getCanvas().style.cursor = 'pointer'; //When the mouse cursor is hovering over any of the data layers it will change to the pointer icon
});

map.on('mouseleave', ['houses', "hospitals1", "subwaystops", "schools1", "schools2", "schools3", "schools4", "schools5", "schools6", "schools7"], (e) => {
    map.getCanvas().style.cursor = ''; //When the pointer icon is no longer hovering over any of the data layers it reverses back to mouse cursor icon
});


map.on('click', 'houses', (e) => {

    
    coordinates1= e.lngLat //New variable which stores the latitude and longitude of the mouse click
    console.log(coordinates1)



    iso_coordinates = [] //Create new empty array
    for(let key in coordinates1) {
        iso_coordinates.push(coordinates1[key]) //push the elements from the coordinates1 variable to the array
    }
    console.log(iso_coordinates)


    map.removeLayer("walk_iso") //remove the walking distances isochrone layer each time a new affordable housing point is clicked on


    new mapboxgl.Popup() //Create a popup when clicking on the "houses" layer
    .setLngLat(e.lngLat) //set the pop-up to appear at the latitude and longitude of the click

        //set the elements from the "Affordable-housing" layer to get added to the pop-up
        .setHTML("<b>Address: </b>" + e.features[0].properties.Address + "<br>" +
            "<b>Number of Units proposed:</b> " + e.features[0].properties.Most_recent_number_of_affordab + "<br>" +
            "<b>Number of Units built:</b> " + e.features[0].properties.Units_Built_Num + "<br>" + 
            "<b>Construction start date:</b> " + e.features[0].properties.Construction_Start_Date + "<br>" + 
            "<b>Construction completion date:</b> " + e.features[0].properties.Actual_Construction_Completion + "<br>" + "<br>" +  
            '<input class="iso-checkbox" type="checkbox" value="" id="iso-id" unchecked> <b>Walking Distance Isochrones</b>' + "<br>" + "<br>" + //Adds a checkbox to the pop-up to toggle the walking isochrones on and off
            '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button class="btn btn-primary btn-sm" id="zoom-in">Zoom to Feature') //Adds a number of non-breaking spaces then add a small button to the pop-up for zooming to the housing feature
        .addTo(map) //Adds the pop-up to the map

        //Access the Id of the pop-up zoom button and add an event listener on a click
        document.getElementById('zoom-in').addEventListener('click', () => {
            //Use the flyTo method to move to the selected coordinates and zoom level when the button is clicked
            map.flyTo({
                center: coordinates1, //move to the coordinates stored in the coordinates1 variable
                zoom: 12.5, //increasses the zoom level
                essential: true
            });
        });


        //Accesses the Id of the checkbox in the pop-up and adds an event listener which changes the visible layers
        document.getElementById('iso-id').addEventListener('change', (e) => {
    
            fetchIsochroneData(iso_coordinates) //fetches the isochrones for the coordinates stored in variable "iso_coordinates"

            function fetchIsochroneData(iso_coordinates) {

            // Define the URL for the Isochrone API request
            const apiUrl = 'https://api.mapbox.com/isochrone/v1/mapbox/walking/';

            // Define the parameters for the Isochrone API request
            const params = {
                contours_minutes: [10, 20, 30], // Contour intervals in minutes
                polygons: true, // Include polygons in the response
                access_token: mapboxgl.accessToken // Access token for Mapbox API
            };

            // Construct the URL with parameters
            const url = `${apiUrl}${iso_coordinates[0]},${iso_coordinates[1]}.json?${new URLSearchParams(params)}`;
            console.log(url)

            // Make the request to the Isochrone API
            fetch(url)
            .then(response => response.json())
            .then(data => {
            // Add Isochrone data to the map as a GeoJSON source and layer
            map.addSource(`isochrone-${iso_coordinates.join('-')}`, {
                type: 'geojson',
                data: data
            });

            // Add Isochrone layer to the map
            map.addLayer({
                id: "walk_iso",
                type: 'fill',
                source: `isochrone-${iso_coordinates.join('-')}`,
                paint: {
                    'fill-color': {
                        property: 'contour',
                        stops: [
                        [10, '#fca90e'], // Color for 5-minute contour
                        [20, '#ff6f61'], // Color for 10-minute contour
                        [30, '#a34d91'] // Color for 15-minute contour
                    ]
                    },
                    'fill-opacity': 0.35 // Adjust opacity as needed
                },
        
        
            });
            map.moveLayer("walk_iso", "houses") //move the houses layer to be above the "walk_iso" layer on the map
            
            
            })
            .catch(error => {
                console.error('Error fetching Isochrone data:', error);
            });
            }

            //Change the visibility of the layer to visible when the pop-up checkbox is checked, and not visible when it's not checked
            map.setLayoutProperty(
                "walk_iso",
                "visibility",
                e.target.checked ? "visible" : "none",
                e.target.checked ? 'none' : 'visible'
            );

        }); 

});




map.on('click', 'hospitals1', (e) => {
    new mapboxgl.Popup() //Create a pop-up when clicking any point of the "hospitals1" layer
    .setLngLat(e.lngLat) //Place the pop-up at the latitude and longitude of the mouse click
        
        //Access the elements of name and address from the "Health-services.geojson" for the particular point clicked  
        .setHTML("<b>Hospital Name: </b>" + e.features[0].properties.AGENCY_NAME + "<br>" +
            "<b>Address:</b> " + e.features[0].properties.ORGANIZATION_ADDRESS)
        .addTo(map); //Add all the elements of the pop-up to the map
});


map.on('click', ["schools1", "schools2", "schools3", "schools4", "schools5", "schools6", "schools7"], (e) => {
    new mapboxgl.Popup() //Create a popup when clicking the any point that's part of the schools layer
    .setLngLat(e.lngLat) //Place the pop-up at the latitude and longitude of the mouse click
        
        //Access the elements of address and school type from the "School-locations.geojson" for the point that was clicked
        .setHTML("<b>School Name: </b>" + e.features[0].properties.NAME + "<br>" +
            "<b>Address:</b> " + e.features[0].properties.SOURCE_ADDRESS + "<br>" + 
            "<b>School Type:</b> " + e.features[0].properties.SCHOOL_TYPE_DESC)
        .addTo(map); //Add all the elements of the pop-up to the map
});


map.on('click', 'subwaystops', (e) => {
    new mapboxgl.Popup() //Create a popup when clicking on any point of the subways layer
    .setLngLat(e.lngLat) //Place the pop-up at the latitude and longitude of the click location

        //Access the elements of name of the station, station address, and station website from the "Subways.geojson" for the particluar point that was clicked
        .setHTML("<b>Station Name: </b>" + e.features[0].properties.STATION + "<br>" +
            "<b>Address:</b> " + e.features[0].properties.ADDRESS_FU + "<br>" + 
            "<b>Website:</b> " + e.features[0].properties.WEBSITE)
        .addTo(map); //Add all the elements of the pop-up to the map
});


//Access the Id of the affordable housing checkbox and add an event listener which changes the visbility of the layer
document.getElementById('affordable-housing-id').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'houses',
        'visibility',
        e.target.checked ? 'visible' : 'none' //layer is visible if the checkbox is checked, and not visible when it isn't
    );
});

//Access the Id of the hospitals checkbox and add an event listener which changes the visibility of the layer
document.getElementById('hospitals-id').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'hospitals1',
        'visibility',
        //make the layer visible when the checkbox is checked, and not visible when it isn't
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

//Access the Id of the Private schools checkbox and add an event listener which changes the visibility of the layer
document.getElementById('schools-id-PR').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools1',
        'visibility',
        //make the layer visible when the checkbox ischecked, and not visible when it isn't
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

//Access the Id of the English Public Schools checkbox and add an event listener which changes the visibility of the layer
document.getElementById('schools-id-EP').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools2',
        'visibility',
        //make the layer visible when the checkbox is checked, and not visible when it isn't
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

//Access the Id of the English Catholic School checkbox and add an event listener which changes the visibility of the layer
document.getElementById('schools-id-ES').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools3',
        'visibility',
        //make the layer visible when the checkbox is checked, and not visible when it isn't
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

//Access the Id of the French Public Schools checkbox and add an event listener which changes the visibility of the layer
document.getElementById('schools-id-FP').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools4',
        'visibility',
        //make the layer visible when the checkbox is checked, and not visible when it isn't
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

//Access the Id of the French Catholic Schools checkbox and add an event listener which changes the visibility of the layer
document.getElementById('schools-id-FS').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools5',
        'visibility',
        //make the layer visible when the checkbox is checked, and not visible when it isn't
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

//Access the Id of the Universities checkbox and add an event listener which changes the visibility of the layer
document.getElementById('schools-id-U').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools6',
        'visibility',
        //make the layer visible when the checkbox is checked, and not visible when it isn't
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

//Access the Id of the Colleges checkbox and add an event listener which changes the visibility of the layer
document.getElementById('schools-id-C').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'schools7',
        'visibility',
        //make the layer visible when the checkbox is checked, and not visible when it isn't
        e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});

//Access the Id of the Subways checkbox and add an event listener which changes the visiblity of the layer
document.getElementById('subways-id').addEventListener('change', (e) => {
    map.setLayoutProperty(
        'subwaystops',
        "visibility",
        //make the layer visible when the checkbox is checked, and not visible when it isn't
         e.target.checked ? "visible" : "none",
        e.target.checked ? 'none' : 'visible'
    );
});



