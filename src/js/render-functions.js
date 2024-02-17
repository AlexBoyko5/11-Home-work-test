
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

export function addImagesToGallery(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Очищаем галерею перед добавлением новых изображений

    images.forEach(image => {
        // Создаем HTML-разметку для каждого изображения и его информации
        const imageMarkup = `
            <div class="image-container">
                <img src="${image.webformatURL}" alt="${image.tags}">
                <div class="image-caption">
                    <span>Likes: ${image.user_likes}</span>
                    <span>Views: ${image.user_views}</span>
                    <span>Comments: ${image.user_comments}</span>
                    <span>Downloads: ${image.user_downloads}</span>
                </div>
            </div>
        `;

        // Добавляем HTML-разметку в галерею с помощью innerHTML
        gallery.innerHTML += imageMarkup;
    });
}
