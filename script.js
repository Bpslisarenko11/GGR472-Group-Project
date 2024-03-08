mapboxgl.accessToken = "pk.eyJ1Ijoic3BibGlzYXJlbmtvMTIiLCJhIjoiY2xzMjlodmljMGthcjJrbXRibnRwZ2d3eCJ9.gxylQolcBDuJTH_WfI6MrA"; //accesstoken for map style

const map = new mapboxgl.Map({
    container: "my-map", //ID for my-map container
    center: [-79.37390704282365, 43.64777081498133], //starting position coordinates in longitude and latitude
    zoom: 11, //starting zoom for the map
    maxBounds: [
        [-79.6, 43.4], // Maximum map zoom out coordinates Southwest
        [-79.2, 43.8]  // Maximum map zoom out coordinates Northeast
    ],

});

map.on('load',() => {
    
})