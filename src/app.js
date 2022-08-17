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

