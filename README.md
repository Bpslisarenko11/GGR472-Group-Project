# GGR472 Group Project

This repository contains HTML files, a Javascript file, a css file, and a data folder containing all used geojson datasets

The map contains multiple different layers that can be toggled on and off, they are
    1. Affordable Housing layer
    2. Hospitals layer
    3. Subways layer
    4. Schools layer (divided into seven different layers based on school type)

The Affordable Housing layer displays projects undertaken that have been either already completed or are still in development, and these distinctions are indicated by differing colours.

The Hospitals layer shows the locations of hospitals across Toronto.

The Subways layer displays the location of all subway stations across Toronto

The Schools layer displays all listed schools across Toronto, and these have been divided into seven different layers based on the type of school, such as Private, English Public, English Catholic, French Public, French Catholic, Universities, and Colleges. And these seven different layers are contained within a dropdown.


Features of this map include:
    1. pop-up windows for each of the different layers, that displays information specific to clicked point
    2. checkboxes for each layer that can be toggled to display or hide the layer
    3. A button to called "reset zoom" to change the map extent to what it was on the original map load
    4. A dropdown which contains checkboxes for each of the seven different school type layers
    5. A geocoder which allows for any Toronto address to be searched for, and will display any of the Hospitals, Schools or Subways points within a 500m radius of the address.

Features Specific to the Affordable Housing layer
    1. Within the Affordable Housing layer pop-up there is a "Zoom to Feature" button that will zoom the map in towards that point when clicked
    2. Also within the pop-up, there is a "Walking Distances Isochrones" checkbox, which when checked, will add an isochrone layer around that point. The Isochrone displays three different colour gradients which represent different estimated walking time distances from the selected Affordable Housing point

Additionally, in the navigation bar at the top of the webpage, there are different pages that can be clicked, which are "data", "features", and "info". 

The "data" page contains additional information about all of the datasets used in the webmap, and links to the source for each dataset.

The "Features" page contains detailed information about all of the maps features, and how they can be used.

The "info" page contains some additional information about the purpose of this map, and a link to a similar map which inspired the making of this one.