import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
galleryList.style.listStyle = 'none';

const markup = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
   </a>
</li>`
  )
  .join('');

galleryList.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery__item a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
