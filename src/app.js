/* src/app.js */
import IMask from 'imask';
import AOS from 'aos';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import {initModals} from "./assets/scripts/modals/init-modals";
import {iosVhFix} from "./assets/scripts/utils/ios-vh-fix";

// Styles
import 'styles/_app.scss'
import 'simplebar/dist/simplebar.css';
import 'aos/src/sass/aos.scss';


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();


  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    AOS.init();


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
        autoplay: {
          delay: 5000,
        },
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
        autoplay: {
          delay: 5000,
        },
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

    const modalCheckBox = document.querySelector('.modal__check');
    if (modalCheckBox) {
      modalCheckBox.querySelector('#another').addEventListener('change', () => {
        if (modalCheckBox.querySelector('#another').checked) {
          modalCheckBox.querySelector('.modal__check-text').classList.add('is-visible')
        } else {
          modalCheckBox.querySelector('.modal__check-text').classList.remove('is-visible')
        }
      })
    }

    const city = document.querySelector('.city');
    if (city) {
      city.querySelector('.city__regoin').querySelectorAll('.city__item').forEach(item => {
        item.addEventListener('click', () => {
          city.querySelector('.city__item.is-active').classList.remove('is-active');
          item.classList.add('is-active');
          city.querySelector('.city__gorod').classList.add('is-visible');
        })
      })
    }
  });
});
