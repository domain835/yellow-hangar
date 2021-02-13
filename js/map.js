DG.then(function () {
    var map,
        latLng = [54.93265,73.363814],
		popup;

    map = DG.map('map', {
        center: latLng,
        zoom: 18,
		dragging: true,
        touchZoom: true,
        scrollWheelZoom: false,
        doubleClickZoom: true,
        boxZoom: true,
        geoclicker: false,
        zoomControl: true,
        fullscreenControl: true
						
    });

    DG.ajax({
        url: 'http://catalog.api.2gis.ru/geo/search',
        data: {
            output: 'jsonp',
            key: '12345678',
            version: 1.3,
            q: latLng[1] + ',' + latLng[0]
        },
        success: function(data) {
            var marker = DG.marker(latLng),
                text = data.result[0].name + '.<br />';

            text += data.result[0].attributes.buildingname;
            marker.bindPopup(text);
            marker.addTo(map);
        },
        error: function(error) {
            console.log(error);
        }
    });
	popup = DG.popup({closeButton: false});
    popup.setLatLng(latLng)
    
		 .setContent('<p>Желтый ангар</p>')
	
	     .openOn(map);
});