import Menu from '../functions/Menu';
import { moveElementOnBreakpoint } from '../functions/move-element';

const catalogBtn = document.querySelector('.header__catalog');
const overlay = document.querySelector('.header-catalog-overlay');


const menu = new Menu({
  menu: document.querySelector('.header-catalog'),
  burger: catalogBtn,
  overlay: document.querySelector('.header-catalog-overlay'),
  navLinks: document.querySelectorAll('.nav li a'),
  burgerCaption: 'Открыть каталог',
  burgerActiveCaption: 'Закрыть каталог',
  transitionDelay: 400,
  breakpoint: 99999,
  disableScroll: false,
  // animate: false
});

moveElementOnBreakpoint(
  '.header-catalog',
  { fromSelector: '.header__body', fromPosition: 'beforeend' },
  { toSelector: '.header__catalog', toPosition: 'afterend' },
  1200
);
