console.log('Привет мир');

ymaps.ready(init);
var myMap,
  myPlacemark;

function init() {
  myMap = new ymaps.Map("map", {
    center: [59.947041, 30.385038],
    zoom: 11
  });

  var myPlacemark = new ymaps.Placemark([59.947041, 30.385038], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/icons/map-marker.svg',
    iconImageSize: [57, 46],
    iconImageOffset: [-30, -42]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('typeSelector');
}


