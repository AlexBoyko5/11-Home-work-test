// Функція для очищення галереї
export function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
}
// Функція для додавання карток зображень до галереї
export function addImagesToGallery(images) {
    const gallery = document.getElementById('gallery');
    images.forEach(image => {
        gallery.innerHTML += `
        <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}">
        
        <div class="image-info">
        <span>Likes:${image.likes}</span>
        <span>Views:${image.views}</span>
        <span>Comments:${image.comments}</span>
        <span>Downloads:${image.downloads}</span>

        </div>
        </a>`;
    });
    // Оновити lightbox після додавання нових елементів
    new SimpleLightbox('.gallery a').refresh();
}
// Функція для показу індикатора завантаження
export function showLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
}
export function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
}
