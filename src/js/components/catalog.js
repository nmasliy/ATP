import headerMenu from './menu';
import Menu from '../functions/Menu';
import { throttle } from '../functions/throttle';

const catalogBtn = document.querySelector('.header__catalog');
const catalogMenu = document.querySelector('.menu');
const catalogHoverItems = document.querySelectorAll('.submenu');
const catalogOverlay = document.querySelector('.catalog-overlay');

let width = window.innerWidth;

// const menu = new Menu({
//   menu: document.querySelector('.catalog-menu'),
//   burger: catalogBtn,
//   close: document.querySelector('.catalog-menu__close'),
//   overlay: document.querySelector('.catalog-overlay'),
//   navLinks: document.querySelectorAll('.catalog-menu li a'),
//   burgerCaption: 'Открыть каталог',
//   burgerActiveCaption: 'Закрыть каталог',
//   transitionDelay: 400,
//   breakpoint: 1200,
// });

const checkWidth = () => {
  width = window.innerWidth;
}

catalogHoverItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    catalogOverlay.style.display = 'block';
    catalogOverlay.classList.add('is-active');
  })
  item.addEventListener('mouseleave', () => {
    catalogOverlay.style.display = '';
    catalogOverlay.classList.remove('is-active');
  })
})

// catalogBtn.addEventListener('click', (e) => {
//   headerMenu.close();

//   if (width <= 1200) {
//     e.preventDefault();
//   }
// });

// window.addEventListener('resize', throttle(checkWidth));

// catalogMenu?.addEventListener('click', (e) => {
//   const link = e.target.closest('.submenu > a');

//   if (link && width <= 1200) {
//     e.preventDefault();
//     link.closest('.submenu').classList.toggle('is-active');
//   }
// });

