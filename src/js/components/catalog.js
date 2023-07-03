import headerMenu from './menu';
import Menu from '../functions/Menu';
import { throttle } from '../functions/throttle';

const catalogBtn = document.querySelector('.header__catalog');
const catalogMenu = document.querySelector('.menu');
const catalogHoverItems = document.querySelectorAll('.submenu');
const catalogOverlay = document.querySelector('.catalog-overlay');
const catalogFilter = document.querySelector('.catalog-filter');

if (catalogFilter) {
  const catalogFilterCollapse = catalogFilter.querySelector('.catalog-filter__collapse');

  catalogFilterCollapse.addEventListener('click', (e) => {
    if (catalogFilter.classList.contains('is-active')) {
      catalogFilter.classList.remove('is-active');
      catalogFilterCollapse.textContent = catalogFilterCollapse.dataset.show;
    } else {
      catalogFilter.classList.add('is-active');
      catalogFilterCollapse.textContent = catalogFilterCollapse.dataset.hide;
    }
  })
}

let width = window.innerWidth;

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
