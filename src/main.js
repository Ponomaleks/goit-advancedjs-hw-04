import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  createLightbox,
  showLoader,
  hideLoader,
} from './js/render-functions';

const EMPTY_QUERY_MESSAGE =
  'Sorry, there are no images matching your search query. Please try again!';
const TOAST_TIMEOUT = 3000;

const searchForm = document.querySelector('.form');
const toastOptions = {
  timeout: TOAST_TIMEOUT,
  position: 'topRight',
  layout: 2,
  progressBar: false,
  transitionIn: 'fadeIn',
};

const toastErrorOptions = {
  ...toastOptions,
  message: EMPTY_QUERY_MESSAGE,
  iconUrl: 'img/error-icon.svg',
  messageColor: '#fff',
  backgroundColor: '#fd4b3f',
};

const gallery = createLightbox();

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();
  if (query) {
    clearGallery();
    showLoader();
    getImagesByQuery(query)
      .then(data => {
        if (data.length === 0) {
          iziToast.error(toastErrorOptions);
          return;
        }
        createGallery(data);
        gallery.refresh();
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        hideLoader();
      });
  }
});
