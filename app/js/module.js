// Yandex map
ymaps.ready(init);
var myMap,
    myPlacemark;

function init() {
  myMap = new ymaps.Map("map", {
    center: [59.947041, 30.385038],
    zoom: 11
  });

  var myPlacemark = new ymaps.Placemark([59.947041, 30.385038], 
    {
      hintContent: 'Ул. ыфвафывафыва, д. 212'
    },
    {
    iconLayout: 'default#image',
    iconImageHref: '../img/icons/map-marker.svg',
    iconImageSize: [57, 46],
    iconImageOffset: [-30, -42],
    hasHint: true
  });

  myPlacemark.name = 'Helllow';

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
  myMap.behaviors.disable('drag');
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
// const menuTitle = document.querySelectorAll('.menu__item-title');
// console.log($(window).width());

// menuTitle.forEach(function(element) {
//   element.addEventListener('click', function (event) {
//     event.preventDefault();

//     menuItem = element.parentElement.parentElement;
//     menuItemClass = menuItem.classList;

//     const menuListChild = element.parentElement.parentElement.parentElement.childNodes;
//     const menuText = menuItem.childNodes[3].childNodes[1];
//     const menuTextWrapper = menuItem.childNodes[3];
//     let menuActiveText;
//     let menuActiveTextWrapper;

//     function bigWidth() {
//       console.log('asdf')
//       if ($(window).width() < 768) {
//         menuTextWrapper.style.width = '100px';
//       }
//     }
//     function smallWidth() {
//       menuTextWrapper.style.width = '';
//     }

//     menuActive = document.querySelector('.menu__item-active');
//     if (menuActive == null) {
//       menuItemClass.add('menu__item-active');
//       bigWidth();
//       menuTextWrapper.style.transitionDelay = '0s';
//       menuText.style.transitionDelay = '.3s';
//     }else {
//       if (!menuItemClass.contains('menu__item-active')) {
//         menuActiveText = menuActive.childNodes[3].childNodes[1];
//         menuActiveTextWrapper = menuActive.childNodes[3];


//         menuActiveText.style.transitionDelay = '0s';
//         menuActiveTextWrapper.style.transitionDelay = '.2s';

//         menuActive.classList.remove('menu__item-active');
//         menuItemClass.add('menu__item-active');
//         menuTextWrapper.style.transitionDelay = '.2s';
//         menuText.style.transitionDelay = '.5s';
//       }else {
//         menuTextWrapper.style.transitionDelay = '.2s';
//         menuText.style.transitionDelay = '0s';
//         menuItemClass.remove('menu__item-active');
//       }
//     }
//   })
// });



$('.menu__item-title').on('click', function (event) {
  event.preventDefault();
  $this = $(this);

  const closeItem = $('<a>', {
    class: 'overlay__close modal__close',
    href: '#'
  });

  const activeItem = $this.closest('.menu__item');
  const menuList = $this.closest('.menu__list');
  const wasActiveItem = menuList.find('.menu__item-active');
  const $window = $(window)
  let linkWidth = parseInt($this.css('width'));
  let menuTextWrapperActive = activeItem.find('.menu__text-wrapper');

  if (activeItem.hasClass('menu__item-active')) {
    activeItem.removeClass('menu__item-active');
    menuTextWrapperActive.css('width', '0');
    menuTextWrapperActive.find('.overlay__close').remove();
    menuList.css('transform', 'translateX(0)');
  } else if (wasActiveItem.length > 0) {
    wasActiveItem.removeClass('menu__item-active');
    wasActiveItemTextWrapper = wasActiveItem.find('.menu__text-wrapper');
    activeItem.addClass('menu__item-active');
    if ($window.width() < 768 && $window.width() > 480) {
      menuTextWrapperActive.css('width', $window.width() - linkWidth * 3 + 'px')
      wasActiveItemTextWrapper.css('width', '0');
      wasActiveItemTextWrapper.find('.overlay__close').remove()
    } else if ($window.width() < 480) {
      menuTextWrapperActive.css('width', $window.width() - linkWidth + 'px');
      menuTextWrapperActive.append(closeItem);
      wasActiveItemTextWrapper.css('width', '0');
      wasActiveItemTextWrapper.find('.overlay__close').remove()
    }
  }else {
    activeItem.addClass('menu__item-active');
    if ($window.width() < 768 && $window.width() > 480) {
      menuTextWrapperActive.css('width', $window.width() - linkWidth * 3 + 'px')
    } else if ($window.width() < 480) {
      menuTextWrapperActive.css('width', $window.width() - linkWidth + 'px')
      menuTextWrapperActive.append(closeItem);
      console.log(activeItem.index());
      
      menuList.css('transform', 'translateX(' + -activeItem.index() * linkWidth + 'px');
    }
  }

  console.log(activeItem.index());
  closeItem.on('click', function (event) {
    event.preventDefault();

    activeItem.removeClass('menu__item-active');
    menuTextWrapperActive.css('width', '0');
    menuTextWrapperActive.find('.overlay__close').remove()
    menuList.css('transform', 'translateX(0)');
  })
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> a059d7c538aedfb47e1f656f62e14794581a6349
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

if (device.mobile() || device.tablet()){
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
  });
}

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

if (device.mobile() || device.tablet()){
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
}

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
<<<<<<< HEAD
function createModal(text, head) {
  const modalBg = $('<div>', { class: 'modal__bg' });
  const modal = $('<div>', { class: 'modal' });
  const modalText = $('<p>', { class: 'reviews__text modal__text' });
  const modalClose = $('<a>', {
    class: 'overlay__close modal__close',
=======
function createModalRev(text, head) {
  const modalBg = $('<div>', { class: 'modal__bg' });
  const modal = $('<div>', { class: 'modal' });
  const modalText = $('<p>', { class: 'reviews__text modal__text' });
  const modalClose = $('<a>', {
    class: 'overlay__close modal__close',
    href: '#'
  });
  $('body').append(modalBg.append(modal));
  modalBg.fadeIn(500);
  modalText.text(text);
  modal.append(head);
  modal.append(modalText);
  modal.append(modalClose);

  modalBg.on('click', function (event) {
    ourTarget = event.target;
    if ($(ourTarget).hasClass('modal__bg')) {
      modalBg.fadeOut(500, () => modalBg.remove());
    }
  })
  modalClose.on('click', function (ev) {
    ev.preventDefault();
    modalBg.fadeOut(500, () => modalBg.remove());
  })
}

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
  
  createModalRev(reviewsText, reviewsName);
});

// Form
function createModalDelivery(text) {
  const modalBg = $('<div>', { class: 'modal__bg' });
  const modal = $('<div>', { class: 'modal msg-modal' });
  const modalText = $('<p>', { class: 'reviews__text modal__text' });
  const modalClose = $('<a>', {
    class: 'red-btn',
>>>>>>> a059d7c538aedfb47e1f656f62e14794581a6349
    href: '#'
  }).text('Закрыть');
  $('body').append(modalBg.append(modal));
  modalBg.fadeIn(500);
  modalText.text(text);
<<<<<<< HEAD
  modal.append(head);
=======
>>>>>>> a059d7c538aedfb47e1f656f62e14794581a6349
  modal.append(modalText);
  modal.append(modalClose);

  modalBg.on('click', function (event) {
    ourTarget = event.target;
    if ($(ourTarget).hasClass('modal__bg')) {
      modalBg.fadeOut(500, () => modalBg.remove());
    }
  })
  modalClose.on('click', function (ev) {
    ev.preventDefault();
    modalBg.fadeOut(500, () => modalBg.remove());
  })
}
<<<<<<< HEAD

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
  
  createModal(reviewsText, reviewsName);
});

// Form

$('.form__delivery').on('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  let form = $(event.target),
      data = form.serialize(),
      url = form.attr('action'),
      type = form.attr('methode');

  ajaxForm = $.ajax({
    url: url,
    dataType: 'json',
    data: data,
    success: console.log()
  });
  
  ajaxForm.done(function(msg) {
    console.log(msg.mes);
  });
}
=======
});
>>>>>>> parent of e146e75... a lot of new options
=======
$('.form__delivery').on('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  let form = $(event.target),
      data = form.serialize(),
      url = form.attr('action'),
      type = form.attr('method');

  ajaxForm = $.ajax({
    type: type,
    url: url,
    dataType: 'json',
    data: data
  });
  
  ajaxForm.done(function(msg) {
    createModalDelivery(msg.mes);
  });
}

// landscape
function orientationChange() {
  let focusInput = $('.form__input').is(':focus') || $('.form__textarea').is(':focus');
  if (innerHeight < 400 && !focusInput) {
    $('.orientation').css('display', 'flex');
  }else {
    $('.orientation').css('display', 'none');
  }
}

if (device.mobile()) {
  orientationChange();
  window.addEventListener("resize", function () {
    orientationChange();
  });
}
>>>>>>> a059d7c538aedfb47e1f656f62e14794581a6349
