// Yandex map
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

//Hamburger menu
const hamburgerMenu = document.querySelector('#hamburger-nav');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.overlay__close');


hamburgerMenu.addEventListener('click', function (event) {
  event.preventDefault();
  overlay.classList.add('overlay__show');
});

close.addEventListener('click', function (event) {
  event.preventDefault();
  overlay.classList.remove('overlay__show');
});

overlay.addEventListener('click', function (event) {
  if (event.target.className == 'overlay overlay__show') {
    overlay.classList.remove('overlay__show');
  }
});

// Menu
const menuItem = document.querySelectorAll('.menu__item');
const menuTitle = document.querySelectorAll('.menu__item-title')
const menuTextWrapper = document.querySelectorAll('.menu__text-wrapper')
const menuText = document.querySelectorAll('.menu__text')
// menuTextWrapper[1].style.width = '100px';
for (let i = 0; i < menuItem.length; i++) {
  menuTitle[i].addEventListener('click', function (event) {
    event.preventDefault();
    if (menuItem[i].classList == 'menu__item') {
      for (let j = 0; j < menuItem.length; j++) {
        if (menuItem[j].classList == 'menu__item menu__item-active') {
          menuTextWrapper[j].style.transitionDelay = '.3s';
          menuItem[j].classList.remove('menu__item-active');
          menuText[i].style.transitionDelay = '.6s';
        }
        menuItem[i].classList.add('menu__item-active');
      }
    }
    else if (menuItem[i].classList == 'menu__item menu__item-active') {
      menuTextWrapper[i].style.transitionDelay = '.3s';
      menuText[i].style.transitionDelay = '0s';
      menuItem[i].classList.remove('menu__item-active');
    }
  });
}