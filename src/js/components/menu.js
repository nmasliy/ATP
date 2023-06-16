import '../functions/mobile-100vh-fix';
import '../functions/header-height';
import { throttle } from '../functions/throttle';
import Menu from '../functions/Menu';
import { moveElementOnBreakpoint } from '../functions/move-element';
import changeHeaderHeight from '../functions/header-height';

const header = document.querySelector('.header');

const menu = new Menu({
  menu: document.querySelector('.burger-menu'),
  burger: document.querySelector('.burger'),
  close: document.querySelector('.menu__close'),
  overlay: document.querySelector('.menu-overlay'),
  navLinks: document.querySelectorAll('.nav li a'),
  burgerCaption: 'Открыть меню',
  burgerActiveCaption: 'Закрыть меню',
  transitionDelay: 400,
  breakpoint: 1200,
});

moveElementOnBreakpoint(
  '.header__body-items',
  { fromSelector: '.header__logo', fromPosition: 'afterend' },
  { toSelector: '.burger-menu', toPosition: 'beforeend' },
  1200
);
moveElementOnBreakpoint(
  '.header__top-inner',
  { fromSelector: '.header__top .container', fromPosition: 'afterbegin' },
  { toSelector: '.burger-menu', toPosition: 'beforeend' },
  1200
);

function toggleHeader() {

  if (window.scrollY > 100) {
    header.classList.add('is-fixed');
  } else {
    header.classList.remove('is-fixed');
  }
  changeHeaderHeight();
}

document.addEventListener('scroll', throttle(toggleHeader));

export default menu;
