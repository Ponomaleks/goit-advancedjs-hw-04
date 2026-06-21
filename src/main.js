import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const EMPTY_QUERY_MESSAGE =
  'Sorry, there are no images matching your search query. Please try again!';
const TOAST_TIMEOUT = 3000;

const searchForm = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more-button');

let currentPage;
let images = [];
let total;
let query;

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

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  currentPage = 1;
  query = event.target.elements['search-text'].value.trim();
  if (query) {
    clearGallery();
    showLoader();
    await fetchAndRenderImages();
  }
});

loadMoreButton.addEventListener('click', async () => {
  currentPage++;
  showLoader();
  await fetchAndRenderImages();
  scrollDownPage();
});

async function fetchAndRenderImages() {
  hideLoadMoreButton();
  try {
    const data = await getImagesByQuery(query, currentPage);
    images = data.hits;
    total = data.totalHits;

    if (images.length === 0) {
      iziToast.error(toastErrorOptions);
      return;
    }
    const isLastPage = currentPage * PER_PAGE >= total;
    if (!isLastPage) {
      showLoadMoreButton();
    }
    createGallery(images);
    const galleryImages = document.querySelectorAll('.gallery-item img');

    await Promise.all(
      [...galleryImages].map(img => {
        if (img.complete) return Promise.resolve();

        return new Promise(resolve => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
        });
      })
    );
  } catch (error) {
    iziToast.error({
      ...toastErrorOptions,
      message:
        'An error occurred while fetching images. Please try again later.',
    });
    console.error('Error:', error);
  } finally {
    hideLoader();
  }
}

function scrollDownPage() {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const { height: cardHeight } = galleryItem.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
