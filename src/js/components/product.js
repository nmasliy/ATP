import { moveElementOnBreakpoint } from '../functions/move-element';

function initProductStock() {
  const productCardsButtons = document.querySelectorAll('.product-card__stock');

  if (productCardsButtons.length <= 0) return;

  document.body.addEventListener('click', function(e) {
    const stockBtn = e.target.closest('.product-card__stock');

    if (stockBtn && !stockBtn.classList.contains('.product-card__stock--no')) {
      stockBtn.classList.toggle('is-active');
    } else {
      const active = document.querySelector('.product-card__stock.is-active');

      if (active) {
        active.classList.remove('is-active');
      }
    }

  })
}

moveElementOnBreakpoint(
  '.product__col:nth-child(2)',
  { fromSelector: '.product__col:first-child', fromPosition: 'afterend' },
  { toSelector: '.product__slider-wrapper', toPosition: 'afterend' },
  768
);


initProductStock();
