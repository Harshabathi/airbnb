mapboxgl.accessToken = window.mapToken;

if (typeof coordinates !== "undefined" && Array.isArray(coordinates)) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: coordinates,
        zoom: 9
    });

    const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h5>welcome</h5>`);

    new mapboxgl.Marker({ color: 'red' })
        .setLngLat(coordinates)
        .setPopup(popup) // attach popup to marker
        .addTo(map);

    //  const popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
    //     .setLngLat(e.lngLat)
    //     .setHTML("<h1>Hello World!</h1>")
    //     .setMaxWidth("300px")
    //     .addTo(map);

} else {
    console.error("Coordinates are not defined or invalid.");
}
