import { root } from "../_vars";
import { throttle } from './throttle';

const changeHeaderHeight = () => {
  const headerHeight = document.querySelector('.header')?.offsetHeight;
  const headerBodyHeight = document.querySelector('.header__body')?.offsetHeight;

  root.style.setProperty('--header-height', `${headerHeight}px`);
  root.style.setProperty('--header-body-height', `${headerBodyHeight}px`);
}

changeHeaderHeight();

window.addEventListener('resize', throttle(changeHeaderHeight));

export default changeHeaderHeight;
