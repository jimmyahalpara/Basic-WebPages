function updateMap() {
    fetch("/58. Plotting COVID Cases/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;

                if (cases > 2550) {
                    color = "rgb(255, 0, 0)";
                } else {
                    color = `rgb(${cases/10}, 0, 0)`;
                }

                new mapboxgl.Marker({
                        draggable: false,
                        color: color
                    }).setLngLat([longitude, latitude])
                    .addTo(map)
            })







            // mark on the map


        });
}

// setInterval(updateMap, 2000);
updateMap();