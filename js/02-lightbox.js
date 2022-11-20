import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const gallery = document.querySelector('.gallery');

function createGallery(items) {
    return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
};

const addCreateGallery = createGallery(galleryItems);
gallery.innerHTML = addCreateGallery;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});
