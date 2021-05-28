 import importedImages from '/src/gallery-items.js';


const gallery = document.querySelector('ul');

const createGalleryMarkup = (images) => {
    const markup = images.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
  <a
    class="gallery__link"
    href="${preview}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
    }).join('');
    
    gallery.insertAdjacentHTML('beforeend', markup);
}

const galleryMarkup = createGalleryMarkup(importedImages);

const modalWindow = document.querySelector('div.lightbox');
let modalImage = document.querySelector('img.lightbox__image');

const closeBtn = document.querySelector("body > div > button");

const galleryOnClick = (e) => {
    console.log(e.target);
    e.preventDefault();
    const isImage = !e.target.classList.contains('gallery__image');
    if (isImage) {
        return
    }
    modalImage.src = e.target.dataset.source;
    modalImage.alt = e.target.alt;
    modalWindow.classList.add('is-open');
    console.log(e.target);
};
const modalClose = (e) => {
    if (!e.target.classList.contains('lightbox__button') && !e.target.classList.contains('lightbox__overlay')) {
        return
    }
    modalImage.src = '';
    modalImage.alt = '';
    modalWindow.classList.remove('is-open');
}
const modalCloseKey = (e) => {
    console.log(e.key)
     if (e.key==='Escape') {
        modalImage.src = '';
    modalImage.alt = '';
    modalWindow.classList.remove('is-open');
     }
    
    if (e.key === 'ArrowRight') {
        
    }
}


gallery.addEventListener('click', galleryOnClick);
modalWindow.addEventListener('click', modalClose);
document.addEventListener('keydown', modalCloseKey);
