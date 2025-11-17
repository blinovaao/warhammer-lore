const navButton = document.querySelector('.main-nav__button');
const headerMenu = document.querySelector('.main-nav__inner');

navButton.addEventListener('click', () => {
  headerMenu.classList.toggle('main-nav__inner--opened');
  navButton.classList.toggle('main-nav__button--opened');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    headerMenu.classList.remove('main-nav__inner--opened');
    navButton.classList.remove('main-nav__button--opened');
  }
});
