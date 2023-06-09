
// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

const galleryItemsEl = galleryItems.map(el => {
    return `<a class = "gallery__item" href="${el.original}"> 
    <img class = "gallery__image" src="${el.preview}" alt="${el.description}" title = "${el.description}"/>
    </a>
    `
})
    .join("");


galleryContainer.insertAdjacentHTML('beforeend',  galleryItemsEl);

  new SimpleLightbox('.gallery a', {
        captionDelay: 250,
    });