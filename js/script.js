function initMap() {
	var uluru = {lat: 23.037875, lng: 72.579730};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

 