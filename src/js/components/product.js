import { moveElementOnBreakpoint } from '../functions/move-element';


moveElementOnBreakpoint(
  '.product__col:nth-child(2)',
  { fromSelector: '.product__col:first-child', fromPosition: 'afterend' },
  { toSelector: '.product__slider-wrapper', toPosition: 'afterend' },
  768
);

