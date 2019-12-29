// map module

let map;
let mapBlock = document.querySelector('.map');
let mCenter = {lat: 40.6917159, lng: -73.9158478,};

map = new google.maps.Map(mapBlock, {
	center:mCenter,
	zoom:12,
	disableDefaultUI:true
});
let marker = new google.maps.Marker({
	position:mCenter,
	map:map,
	icon:'img/marker.png'
});

// slider

$('.news').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,
  arrows:true
});
