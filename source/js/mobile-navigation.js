const navMain = document.querySelector('.main-menu');
const navToggle = document.querySelector('.main-menu__toggle');

navMain.classList.add('main-menu--closed');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-menu--closed')) {
    navMain.classList.remove('main-menu--closed');
    navMain.classList.add('main-menu--opened');
  } else {
    navMain.classList.add('main-menu--closed');
    navMain.classList.remove('main-menu--opened');
  }
});
