
//^================= метод appendChild ============================================
// export function addImagesToGallery(images) {
//     const gallery = document.getElementById('gallery');
//     gallery.innerHTML = '';
//     images.forEach(image => {
//         const container = document.createElement('div');
//         container.classList.add('image-container');

//         const img = document.createElement('img');
//         img.src = image.webformatURL;
//         img.alt = image.tags;
//         container.appendChild(img);

//         const caption = document.createElement('div');
//         caption.classList.add('image-caption');
//         caption.innerHTML = `
//             <span>Likes: ${image.user_likes}</span>
//             <span>Views: ${image.user_views}</span>
//             <span>Comments: ${image.user_comments}</span>
//             <span>Downloads: ${image.user_downloads}</span>
//         `;
//         container.appendChild(caption);

//         gallery.appendChild(container);
//     });
// }

//^================= метод innerHTML ============================================

// export function addImagesToGallery(images) {
//     const gallery = document.getElementById('gallery');
//     gallery.innerHTML = ''; // Очищаем галерею перед добавлением новых изображений

//     images.forEach(image => {
//         // Создаем HTML-разметку для каждого изображения и его информации
//         const imageMarkup = `
//             <div class="image-container">
//                 <img src="${image.webformatURL}" alt="${image.tags}">
//                 <div class="image-caption">
//                     <span>Likes: ${image.user_likes}</span>
//                     <span>Views: ${image.user_views}</span>
//                     <span>Comments: ${image.user_comments}</span>
//                     <span>Downloads: ${image.user_downloads}</span>
//                 </div>
//             </div>
//         `;

//         // Добавляем HTML-разметку в галерею с помощью innerHTML
//         gallery.innerHTML += imageMarkup;
//     });
// }

//^================= №2 метод innerHTML ============================================
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a');

export function createGalleryMarkup(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = images
        .map(
            (image) => `
    <div class="photo-card">
      <a href="${image.largeImageURL}" target="_blank">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
       <p><i class="img-text">Likes </i><span>${image.likes}</span></p>
        <p><i class="img-text">Views </i><span>${image.views}</span></p>
        <p><i class="img-text">Comments </i><span>${image.comments}</span></p>
        <p><i class="img-text">Downloads </i><span>${image.downloads}</span></p>
      </div>
    </div>
  `
        )
        .join('');
    lightbox.refresh();
}
