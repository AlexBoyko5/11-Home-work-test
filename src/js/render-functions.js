
//^=============================================================

// Функція для додавання карток зображень до галереї

// export function addImagesToGallery(images) {
//     const gallery = document.getElementById('gallery');
//     gallery.innerHTML = '';
//     images.forEach(image => {
//         // создать новый элемент <a>
//         const link = document.createElement('a');
//         link.href = image.largeImageURL;
//         // создать новый элемент <img>
//         const img = document.createElement('img');
//         img.src = image.webformatURL;
//         img.alt = image.tags;
//         // создать новый элемент <div>
//         const info = document.createElement('div');
//         info.className = 'image-info';
//         // создать новые элементы <span>
//         const likes = document.createElement('span');
//         likes.textContent = `Likes:${image.user_likes}`;
//         const views = document.createElement('span');
//         views.textContent = `Views:${image.user_views}`;
//         const comments = document.createElement('span');
//         comments.textContent = `Comments:${image.user_comments}`;
//         const downloads = document.createElement('span');
//         downloads.textContent = `Downloads:${image.user_downloads}`;
//         // добавить элементы <span> в элемент <div>
//         info.appendChild(likes);
//         info.appendChild(views);
//         info.appendChild(comments);
//         info.appendChild(downloads);
//         // добавить элементы <img> и <div> в элемент <a>
//         link.appendChild(img);
//         link.appendChild(info);
//         // добавить элемент <a> в галерею
//         gallery.appendChild(link);
//     });
//     // Оновити lightbox після додавання нових елементів
//     new SimpleLightbox('.gallery a').refresh();
// }
//^=============================================================

export function addImagesToGallery(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    images.forEach(image => {// создать новый элемент <div> для карточки изображения
        const card = document.createElement('div');
        card.classList.add('list-item');

        // создать новый элемент <img> для изображения
        const img = document.createElement('img');
        img.classList.add('item-img');
        img.src = image.webformatURL;
        img.alt = image.tags;

        // создать новый элемент <div> для информации о изображении
        const info = document.createElement('div');
        info.classList.add('image-info');
        // добавить информацию о изображении во внутренний HTML элемента
        info.innerHTML = `
      <span>Likes: ${image.likes}</span>
      <span>Views: ${image.views}</span>
      <span>Comments: ${image.comments}</span>
      <span>Downloads: ${image.downloads}</span>
    `;

        // добавить изображение и информацию о нем в карточку
        card.appendChild(img);
        card.appendChild(info);

        // добавить карточку в галерею
        gallery.appendChild(card);
    });
}
