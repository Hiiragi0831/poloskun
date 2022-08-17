/* src/app.js */
import IMask from 'imask';

// Styles
import 'styles/_app.scss'


if (document.getElementById('phone-mask')) {
  new IMask(
    document.getElementById('phone-mask'), {
      mask: '+{7}(000)-000-00-00'
    });
}
if (document.querySelector(".ferula-block__slider")) {
  new Swiper(".ferula-block__slider .swiper", {
    slidesPerView: 4,
    spaceBetween: 18,
    navigation: {
      nextEl: ".ferula-block__slider-button-next",
      prevEl: ".ferula-block__slider-button-prev",
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

  let swiper = new Swiper(".steps-block-slider__content .swiper", {
    slidesPerView: 1,
    effect: "fade",
  });

  const navItem = document.querySelectorAll('.steps-block-slider__nav-item');
  navItem.forEach(item => {
    item.addEventListener('click', function () {
      document.querySelector('.steps-block-slider__nav-item.is-active').classList.remove('is-active');
      swiper.slideTo(item.dataset.id);
      item.classList.add('is-active');
    });
  });
}
