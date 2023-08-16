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

const productsSliders = document.querySelectorAll('.products-slider');

productsSliders.forEach(el => {
  const productsSwiper = new Swiper(el.querySelector('.swiper'), {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: el.querySelector('.slider__button-next'),
      prevEl: el.querySelector('.slider__button-prev'),
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 'auto',
      },
      768: {
        slidesPerView: 3,
      },
      // when window width is >= 1201
      1201: {
        slidesPerView: 4,
      },
      1920: {
        slidesPerView: 6,
      }
    }
  })
})


const productThumbs  = new Swiper('.product__thumbs', {
  spaceBetween: 10,
  slidesPerView: 5
})

const productSwiper = new Swiper('.product__slider', {
  spaceBetween: 50,
  thumbs:{
    swiper: productThumbs
  }
})

const aboutPageSliders = document.querySelectorAll('.about-page__images');

aboutPageSliders.forEach(slider => {
  const aboutSlider  = new Swiper(slider, {
    spaceBetween: 30,
    navigation: {
      nextEl: slider.querySelector('.swiper-button-next'),
      prevEl: slider.querySelector('.swiper-button-prev'),
    },
  })

})

