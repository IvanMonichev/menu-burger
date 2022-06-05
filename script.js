const headerBurgerElement = document.querySelector('.header__burger');
const headerMenuElement = document.querySelector('.header__menu');
const bodyElement = document.querySelector('body');

const toggleMenuHeader = () => {
  headerBurgerElement.classList.toggle('header__burger_is-active');
  headerMenuElement.classList.toggle('header__menu_is-active');
  bodyElement.classList.toggle('lock');
}

headerBurgerElement.addEventListener('click', toggleMenuHeader);