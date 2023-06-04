import Swiper, { Autoplay, Pagination, Navigation, Thumbs } from 'swiper';
import { throttle } from '../functions/throttle';

Swiper.use([Autoplay, Pagination, Navigation, Thumbs]);

function initMobileSlider(parent, wrapper, items, breakpoint = 1024,  options, watchResize = false) {
  if (!options) {
    options = {
      spaceBetween: 30,
      slidesPerView: 3,
      autoplay: {
        delay: 3000,
      },
    };
  }

  let swiper = null;

  function init() {
    const $parent = document.querySelector(parent);
    const $wrapper = $parent.querySelector(wrapper);
    const $items = $wrapper.querySelectorAll(items);

    if (
      window.innerWidth <= breakpoint &&
      !$parent.classList.contains('swiper')
    ) {
      $parent.classList.add('swiper');
      $wrapper.classList.add('swiper-wrapper');
      $items.forEach((slide) => slide.classList.add('swiper-slide'));

      swiper = new Swiper(parent, options);
    } else if (
      window.innerWidth > breakpoint &&
      $parent.classList.contains('swiper')
    ) {
      swiper?.destroy();

      $parent.classList.remove('swiper');
      $wrapper.classList.remove('swiper-wrapper');
      $items.forEach((slide) => slide.classList.remove('swiper-slide'));
    }
  }

  init();

  if (watchResize) {
    let throttledInit = throttle(init);

    window.addEventListener('resize', throttledInit);
  }
}

// initMobileSlider('.hero__benefits', '.hero__cards', '.hero__card', 760);

const heroSwiper = new Swiper('.hero__slider .swiper', {
  navigation: {
    nextEl: '.hero__slider .slider__button-next',
    prevEl: '.hero__slider .slider__button-prev',
  },
})

const productsSwiper = new Swiper('.products-slider__inner .swiper', {
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.products-slider__inner .slider__button-next',
    prevEl: '.products-slider__inner .slider__button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 'auto',
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 1201
    1201: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
})

// const productThumbs  = new Swiper('.product__thumbs', {
//   spaceBetween: 20,
//   slidesPerView: 3
// })

// const productSwiper = new Swiper('.product__slider', {
//   spaceBetween: 50,
//   navigation: {
//     nextEl: '.product__slider .slider-button-next',
//     prevEl: '.product__slider .slider-button-prev',
//   },
//   pagination: {
//     el: '.product__slider .slider-pagination',
//     clickable: true
//   },
//   thumbs:{
//     swiper: productThumbs
//   }
// })
