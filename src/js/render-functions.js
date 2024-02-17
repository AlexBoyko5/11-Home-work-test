
export function addImagesToGallery(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    images.forEach(image => {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const img = document.createElement('img');
        img.src = image.webformatURL;
        img.alt = image.tags;
        container.appendChild(img);

        const caption = document.createElement('div');
        caption.classList.add('image-caption');
        caption.innerHTML = `
            <span>Likes: ${image.user_likes}</span>
            <span>Views: ${image.user_views}</span>
            <span>Comments: ${image.user_comments}</span>
            <span>Downloads: ${image.user_downloads}</span>
        `;
        container.appendChild(caption);

        gallery.appendChild(container);
    });
}

//^=============================================================

// export function addImagesToGallery(images) {
//     const gallery = document.getElementById('gallery');
//     gallery.innerHTML = '';
//     images.forEach(image => {// создать новый элемент <div> для карточки изображения
//         const card = document.createElement('div');
//         card.classList.add('list-item');

//         // создать новый элемент <img> для изображения
//         const img = document.createElement('img');
//         img.classList.add('item-img');
//         img.src = image.webformatURL;
//         img.alt = image.tags;

//         // создать новый элемент <div> для информации о изображении
//         const info = document.createElement('div');
//         info.classList.add('image-info');
//         // добавить информацию о изображении во внутренний HTML элемента
//         info.innerHTML = `
//       <span>Likes: ${image.likes}</span>
//       <span>Views: ${image.views}</span>
//       <span>Comments: ${image.comments}</span>
//       <span>Downloads: ${image.downloads}</span>
//     `;

//         // добавить изображение и информацию о нем в карточку
//         card.appendChild(img);
//         card.appendChild(info);

//         // добавить карточку в галерею
//         gallery.appendChild(card);
//     });
// }
