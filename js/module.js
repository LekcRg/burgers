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

//Hamburger menu ;)
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

// Slider

function moveSlide(container, number) {
  const sliderList = container.find('.slider__list');
  const sliderItem = sliderList.children();
  let slideActive = container.find('.slider__active');

  sliderList.css('left', -number * 100 + '%');
  slideActive.removeClass('slider__active');
  sliderItem.eq(number).addClass('slider__active');
}

$('.slider__list').swipe({
  swipeLeft: function () {
    let $this = $(this);
    const sliderContainer = $this.closest('.slider__container');
    let nextSlide = sliderContainer.find('.slider__active').next();
    if (nextSlide.length) {
      let slideNum = nextSlide.index();
      moveSlide(sliderContainer, slideNum);
    } else {
      moveSlide(sliderContainer, 0);
    }
  },
  swipeRight: function () {
    let $this = $(this);
    const sliderContainer = $this.closest('.slider__container');
    let prevSlide = sliderContainer.find('.slider__active').prev();
    if (prevSlide.length) {
      let slideNum = prevSlide.index();
      moveSlide(sliderContainer, slideNum);
    } else {
      moveSlide(sliderContainer, sliderContainer.find('.slider__item:last-child').index());
    }
  }
})

$('.arrow__link').on('click', function (event) {
  event.preventDefault();

  let $this = $(this);
  const sliderContainer = $this.closest('.slider__container');
  
  if ($this.hasClass('arrow__next')) {
    let nextSlide = sliderContainer.find('.slider__active').next();
    if (nextSlide.length) {
      let slideNum = nextSlide.index();
      moveSlide(sliderContainer, slideNum);
    } else {
      moveSlide(sliderContainer, 0);
    }
    
  }else if ($this.hasClass('arrow__prev')){
    let prevSlide = sliderContainer.find('.slider__active').prev();
    if (prevSlide.length) {
      let slideNum = prevSlide.index();
      moveSlide(sliderContainer, slideNum);
    }else {
      moveSlide(sliderContainer, sliderContainer.find('.slider__item:last-child').index());
    }
  }
});

// One page scroll
let screen = $('.screen');
const pointsWrapper = $('.points');
for (let i = 0; i < screen.length; i++) {
  const pointDot = $('<li>', {
    class: 'points__dot'
  });
  const pointLink = $('<a>', {
    class: 'points__link',
    href: '#',
    'data-index': i
  })
  if (screen.eq(i).hasClass('section__active')) {
    pointDot.addClass('points__active');
  }
  pointsWrapper.append(pointDot);
  pointDot.append(pointLink);
}

let inScroll = false;
function ops(container, index) {
  if (inScroll) return;
  inScroll = true;
  
  const sections = container.children('.screen');
  const points = pointsWrapper.children('.points__dot');
  const sectionActive = container.find('.section__active');
  const pointActive = pointsWrapper.find('.points__active');

  container.css('transform', 'translateY(' + -index * 100 + '%)');
  sectionActive.removeClass('section__active');
  pointActive.removeClass('points__active');
  
  sections.eq(index).addClass('section__active');
  points.eq(index).addClass('points__active');
  points.eq(index).css('transition-delay', '.2s');

  transitionDuration = parseFloat(container.css('transition-duration'));
  setTimeout(() => {
    inScroll = false;
  }, transitionDuration * 1000 + 100);

  points.eq(index).css('transition-delay', '0s');
}


$('.maincontant').on('wheel', function (event) {
  $this = $(this);
  const deltaY = event.originalEvent.deltaY;
  const sectionActive = $this.find('.section__active');
  let sectionIndex = deltaY > 0 ? sectionActive.next().index() : sectionActive.prev().index();
  if (sectionActive.next().length && deltaY > 0) {
    ops($this, sectionIndex);
  } else if (sectionActive.prev().length && deltaY < 0) {
    ops($this, sectionIndex);
  }
});
$('.maincontant').swipe({
  swipeUp: function () {
    $this = $(this);
    
    sectionActive = $('.maincontant').find('.section__active');
    sectionIndex = sectionActive.next().index();
    if (sectionActive.next().length) {
      ops($this, sectionIndex);
    }
  },
  swipeDown: function () {
    $this = $(this);

    sectionActive = $('.maincontant').find('.section__active');
    sectionIndex = sectionActive.prev().index();
    if (sectionActive.prev().length) {
      ops($this, sectionIndex);
    }
  }
});

const findByIndex = (index) => {
  mainContent = $('.maincontant');
  dataIndex = parseInt(index.attr('data-index'));
  ops(mainContent, dataIndex);
}

$('.nav__link').on('click', function (event) {
  event.preventDefault();
  findByIndex($(this));
});

$('.overlay__link').on('click', function (event) {
  $this = $(this);
  overlayShow = $this.closest('.overlay__show');
  overlayShow.removeClass('overlay__show');
});

$('.points__link').on('click', function (event) {
  event.preventDefault();
  findByIndex($(this));
});

$('#to-order').on('click', function (event) {
  event.preventDefault();
  findByIndex($(this));
});

$('.welcome-link').on('click', function (event) {
  event.preventDefault();
  findByIndex($(this));
});

// reviews popup
let reviewsText = 'Мысли все о них и о них, о них и о них. Нельзя устоять, ' +
'невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, ' +
'котлетка такой сочной, а сыр таким расплавленным. Мысли все о них и о них, о них и о ' +
'них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть ' +
'такими мягкими, котлетка такой сочной, а сыр таким расплавленным.';
$('.reviews__btn').on('click', function (event) {
  event.preventDefault();
  const $this = $(this);
  const textWrapper = $this.closest('.reviews__item-text');
  const reviewsName = textWrapper.find('.reviews__name').clone();
  

  const modalBg = $('<div>', { class: 'modal__bg' });
  const modal =     $('<div>', { class: 'modal' });
  const modalText = $('<p>', { class: 'reviews__text modal__text' });
  const modalClose = $('<a>', {
    class: 'overlay__close modal__close', 
    href: '#'
  });
  $('body').append(modalBg.append(modal));
  modalBg.fadeIn(500);
  modalText.text(reviewsText);
  modal.append(reviewsName);
  modal.append(modalText);
  modal.append(modalClose);
  
  modalBg.on('click', function (event) {
    ourTarget = event.target;
    if ($(ourTarget).hasClass('modal__bg')){
      modalBg.fadeOut(500, () => modalBg.remove());
    }
  })
  modalClose.on('click', function (ev) {
    ev.preventDefault();
    modalBg.fadeOut(500, () => modalBg.remove());
  })
  
});

