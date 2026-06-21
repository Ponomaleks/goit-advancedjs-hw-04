import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery;

function getLightboxSingleton() {
  if (!gallery) {
    gallery = createLightbox();
  }
  return gallery;
}

function createGallery(images) {
  getLightboxSingleton();
  const galleryContainer = document.querySelector('.gallery');
  const galleryMarkup = createGalleryMarkup(images);
  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
  gallery.refresh();
}

function createGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        comments,
        views,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <ul class="gallery-info">
            <li class="gallery-info-item">
              <b>Likes</b> ${likes}
            </li>
            <li class="gallery-info-item">
              <b>Views</b> ${views}
            </li>
            <li class="gallery-info-item">
              <b>Comments</b> ${comments}
            </li>
            <li class="gallery-info-item">
              <b>Downloads</b> ${downloads}
            </li>
          </ul>
        </li>
      `;
      }
    )
    .join('');
}

function clearGallery() {
  getLightboxSingleton();
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = '';
}

function createLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  return lightbox;
}

function showLoader() {
  document.body.classList.add('loading');
}

function hideLoader() {
  document.body.classList.remove('loading');
}

function showLoadMoreButton() {
  const galleryContainer = document.querySelector('.gallery');
  const loadMoreButton = document.querySelector('.load-more-button');
  loadMoreButton.disabled = false;
  galleryContainer.classList.add('show-load-more');
}

function hideLoadMoreButton() {
  const galleryContainer = document.querySelector('.gallery');
  const loadMoreButton = document.querySelector('.load-more-button');
  loadMoreButton.disabled = true;
  galleryContainer.classList.remove('show-load-more');
}

export {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
};
