
// //^===========================================================
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function searchRequest() {
    const apiKey = '42334631-07f239856d3b6a49db441bfb9';
    const searchPicture = document.getElementById("searchRequest").value.trim();
    if (searchPicture === "") {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query.'
        });
        return false;
    }
    const params = new URLSearchParams({
        key: apiKey,
        q: searchPicture,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });
    fetch(`https://pixabay.com/api/?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
        .then(data => {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = '';
            if (data.hits.length === 0) {
                iziToast.info({
                    title: 'Info',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
            } else {
                data.hits.forEach(image => {
                    gallery.innerHTML += `<a href="${image.largeImageURL}"><img src="${image.previewURL}" alt="${image.tags}"></a>`;
                });
                new SimpleLightbox('.gallery a');
            }
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.'
            });
        });
    return false; // чтобы форма не отправлялась после отправки запроса
}
