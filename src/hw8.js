 import importedImages from './gallery-items.js';


const gallery = document.querySelector('ul');
let currentIndex;

const createGalleryMarkup = (images) => {
    const markup = images.map(({ preview, original, description },index) => {
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
      data-index="${index}"
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
    currentIndex = e.target.dataset.index;
    modalWindow.classList.add('is-open');
    console.log(currentIndex);
};
const modalClose = (e) => {
    if (!e.target.classList.contains('lightbox__button') && !e.target.classList.contains('lightbox__overlay')) {
        return
    }
    modalImage.src = '';
    modalImage.alt = '';
    modalWindow.classList.remove('is-open');
}
const onKeyDown = (e) => {
    console.log(e.key)
     if (e.key==='Escape') {
        modalImage.src = '';
    modalImage.alt = '';
    modalWindow.classList.remove('is-open');
     }
    
    if (e.key === 'ArrowRight') {
        if (importedImages.length < currentIndex + 2) { currentIndex = 0 }
        else { 
        currentIndex = parseInt(currentIndex) + 1;
        }
        console.log(currentIndex);
        modalImage.src = importedImages[currentIndex].original;
    modalImage.alt = importedImages[currentIndex].alt;
        
    }
    if (e.key === 'ArrowLeft') {
        if (currentIndex-1 < 0) { currentIndex = importedImages.length-1  }
        else {currentIndex = parseInt(currentIndex) - 1; }
       console.log(currentIndex);
       modalImage.src = importedImages[currentIndex].original;
    modalImage.alt = importedImages[currentIndex].alt;
        
    }
}

// const arrowRight = (e) => {
//     if (!e.key === 'ArrowRight') {
//         return
//     }
//     const currentImageSec = document.querySelector('lightbox__image');
//     const currentGallery = document.querySelector('img.')
// }
const colorChanger = (e) => {
    console.log(e.key);
    console.log(e.target);
   
}


gallery.addEventListener('click', galleryOnClick);
modalWindow.addEventListener('click', modalClose);
document.addEventListener('keydown', onKeyDown);


