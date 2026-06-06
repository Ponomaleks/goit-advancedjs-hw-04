# Image Search Gallery

A small responsive image gallery built with Vite and vanilla JavaScript that
fetches images from the Pixabay API. The app supports searching by keyword and responsive rendering. API logic is implemented in
`js/pixabay-api.js` and rendering helpers live in `js/render-functions.js`.

## Features

- Search images by keyword using the Pixabay API
- Responsive gallery layout with accessible markup
- Clear separation of API logic and rendering helpers
- Built with Vite for fast development and bundling

## Tech stack

- Vanilla JavaScript (ES modules)
- Vite (dev server & build)
- Pixabay API
- AXIOS (for API requests)
- iziToast (for notifications)
- HTML & CSS (styles under `src/css/`)

## Quick start

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Usage

- Open the app in the browser (Vite will show the local URL).
- Enter a search term and submit to fetch images.

## Project structure (important files)

- `index.html` — app entry HTML
- `src/main.js` — app bootstrap
- `js/pixabay-api.js` — Pixabay API wrapper and fetch logic
- `js/render-functions.js` — DOM rendering helpers for the gallery
- `src/css/` — styles (layout, gallery, header, form)