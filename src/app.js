/* src/app.js */
import IMask from 'imask';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

// Styles
import 'styles/_app.scss'
import {initModals} from "./assets/scripts/modals/init-modals";

initModals();

if (document.getElementById('phone-mask')) {
  new IMask(
    document.getElementById('phone-mask'), {
      mask: '+{7}(000)-000-00-00'
    });
}
if (document.querySelector('.ferula-block__slider')) {
  new Swiper('.ferula-block__slider .swiper', {
    slidesPerView: 4,
    spaceBetween: 18,
    navigation: {
      nextEl: '.ferula-block__slider-button-next',
      prevEl: '.ferula-block__slider-button-prev',
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
    },
  });
}

if (document.querySelector(".steps-block-slider__content")) {

  let swiper = new Swiper('.steps-block-slider__content .swiper', {
    slidesPerView: 1,
    effect: "fade",
  });

  const navItem = document.querySelectorAll('.steps-block-slider__nav-item');
  navItem.forEach(item => {
    item.addEventListener('click', function () {
      swiper.slideTo(item.dataset.id);
    });
  });

  swiper.on('slideChangeTransitionEnd', function () {
    document.querySelector('.steps-block-slider__nav-item.is-active').classList.remove('is-active');
    const getActiveId = document.querySelector('.swiper-slide-active').dataset.slide;
    navItem.forEach(item => {
      if (item.dataset.id === getActiveId) {
        console.log(item.dataset.id)
        item.classList.add('is-active');
      }
    });
  });
}
