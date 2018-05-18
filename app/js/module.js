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

// Acco team
const accordionName = document.querySelectorAll('.accordion__name');

accordionName.forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();

    let accordionActive = document.querySelector('.accordion__active');
    const accordionItem = element.parentElement;
    let accordionItemClass = accordionItem.classList;
    let accordionActiveText;
    if (accordionActive == null) {
      accordionItemClass.add('accordion__active');
    }else {
      if (!accordionItemClass.contains('accordion__active')) {
        accordionActive.classList.remove('accordion__active');
        accordionItemText = accordionItem.childNodes[3];
        accordionItemText.style.transitionDelay = '.15s';
        console.log(accordionItem.style);
        accordionItemClass.add('accordion__active');
      } else {
        accordionItemClass.remove('accordion__active');
      }
    }
  })
});

// Acco menu
const menuTitle = document.querySelectorAll('.menu__item-title');

menuTitle.forEach(function(element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();

    menuItem = element.parentElement.parentElement;
    menuItemClass = menuItem.classList;

    const menuListChild = element.parentElement.parentElement.parentElement.childNodes;
    const menuText = menuItem.childNodes[3].childNodes[1];
    const menuTextWrapper = menuItem.childNodes[3];
    let menuActiveText;
    let menuActiveTextWrapper;

    menuActive = document.querySelector('.menu__item-active');
    if (menuActive == null) {
      menuItemClass.add('menu__item-active');
      menuTextWrapper.style.transitionDelay = '0s';
      menuText.style.transitionDelay = '.3s';
    }else {
      if (!menuItemClass.contains('menu__item-active')) {
        menuActiveText = menuActive.childNodes[3].childNodes[1];
        menuActiveTextWrapper = menuActive.childNodes[3];

        menuActiveText.style.transitionDelay = '0s';
        menuActiveTextWrapper.style.transitionDelay = '.2s';

        menuActive.classList.remove('menu__item-active');
        menuItemClass.add('menu__item-active');
        menuTextWrapper.style.transitionDelay = '.2s';
        menuText.style.transitionDelay = '.5s';
      }else {
        menuTextWrapper.style.transitionDelay = '.2s';
        menuText.style.transitionDelay = '0s';
        menuItemClass.remove('menu__item-active');
      }
      
    }
  })
});