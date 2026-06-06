import axios from 'axios';

const PIXABAY_API_KEY = '56186699-b79b9418fe736184280ccca48';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: PIXABAY_API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

function fetchImages(query, page = 1, perPage = 12) {
  return axios
    .get('/', {
      params: {
        q: query,
        page,
        per_page: perPage,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}

export function getImagesByQuery(query) {
  return fetchImages(query);
}
