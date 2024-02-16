
//^=============================================================

// Функція для додавання карток зображень до галереї

export function addImagesToGallery(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    images.forEach(image => {
        // создать новый элемент <a>
        const link = document.createElement('a');
        link.href = image.largeImageURL;
        // создать новый элемент <img>
        const img = document.createElement('img');
        img.src = image.webformatURL;
        img.alt = image.tags;
        // создать новый элемент <div>
        const info = document.createElement('div');
        info.className = 'image-info';
        // создать новые элементы <span>
        const likes = document.createElement('span');
        likes.textContent = `Likes:${image.user_likes}`;
        const views = document.createElement('span');
        views.textContent = `Views:${image.user_views}`;
        const comments = document.createElement('span');
        comments.textContent = `Comments:${image.user_comments}`;
        const downloads = document.createElement('span');
        downloads.textContent = `Downloads:${image.user_downloads}`;
        // добавить элементы <span> в элемент <div>
        info.appendChild(likes);
        info.appendChild(views);
        info.appendChild(comments);
        info.appendChild(downloads);
        // добавить элементы <img> и <div> в элемент <a>
        link.appendChild(img);
        link.appendChild(info);
        // добавить элемент <a> в галерею
        gallery.appendChild(link);
    });
    // Оновити lightbox після додавання нових елементів
    new SimpleLightbox('.gallery a').refresh();
}