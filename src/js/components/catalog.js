import headerMenu from './menu';
import Menu from '../functions/Menu';
import { throttle } from '../functions/throttle';

const catalogBtn = document.querySelector('.header__catalog');
let width = window.innerWidth;

const menu = new Menu({
  menu: document.querySelector('.catalog-menu'),
  burger: catalogBtn,
  close: document.querySelector('.catalog__close'),
  overlay: document.querySelector('.catalog-overlay'),
  navLinks: document.querySelectorAll('.nav li a'),
  burgerCaption: 'Открыть каталог',
  burgerActiveCaption: 'Закрыть каталог',
  transitionDelay: 400,
  breakpoint: 1200,
});

catalogBtn.addEventListener('click', (e) => {
  headerMenu.close();

  if (width <= 1200) {
    e.preventDefault();
  }
});

const catalogMenu = document.querySelector('.catalog-menu');

catalogMenu?.addEventListener('click', (e) => {
  const link = e.target.closest('.submenu > a');

  if (link) {
    e.preventDefault();
    link.closest('.submenu').classList.toggle('is-active');
  }
});

const checkWidth = () => {
  width = window.innerWidth;
}

window.addEventListener('resize', throttle(checkWidth));

