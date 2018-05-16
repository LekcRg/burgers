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