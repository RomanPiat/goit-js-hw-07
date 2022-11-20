import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGallery(items) {
    return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
};

const addCreateGallery = createGallery(galleryItems);

gallery.innerHTML = addCreateGallery;

gallery.addEventListener('click', modalWindowImage);

function modalWindowImage(evt) {
   evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}"width="800" height="600">`);
     console.log(evt.target.dataset)
    instance.show();
    
    gallery.addEventListener("keydown", (evt) => {
        if (evt.code == "Escape") {
          instance.close();
        };
    })
};