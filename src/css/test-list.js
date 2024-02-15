//^==== запись одним блоком ===========================================
function handleFormSubmit(event) {
    event.preventDefault();

    // Показати індикатор завантаження
    showLoader();

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

    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchPicture)}${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
        .then(data => {
            // Приховати індикатор завантаження
            hideLoader();

            clearGallery();
            if (data.hits.length === 0) {
                iziToast.info({
                    title: 'Info',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
            } else {
                addImagesToGallery(data.hits);
            }
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.'
            });
        });
    return false;
}

const form = document.getElementById('searchForm');
form.addEventListener('submit', handleFormSubmit);
