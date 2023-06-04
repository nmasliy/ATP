import '../functions/mobile-100vh-fix';
import '../functions/header-height';
import Menu from '../functions/Menu';
import { moveElementOnBreakpoint } from '../functions/move-element';

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

