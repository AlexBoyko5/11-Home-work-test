// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
//import { refs } from './pixabay-api';
import { addImagesToGallery } from './render-functions';

function handleFormSubmit(event) { //объявление функции
    event.preventDefault();
    const apiKey = '42334631-07f239856d3b6a49db441bfb9';
    const searchPicture = document.getElementById("searchRequest").value.trim();
    //находим элемент с id ("searchRequest") (поле ввода) и получаем его значение (текст, введенный пользователем).
    //и удаляем лишние пробелы в начале и конце

    //! проверка на наличие только пробелов или пустой строки
    if (searchPicture === "") {
        // Всплывающее окно с предупреждением о пустом поле
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query.'
        });
        return false; // Предотвращение отправки формы
    }

    // Формирование параметров запроса для API Pixabay
    const params = new URLSearchParams({
        key: apiKey,
        q: searchPicture,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });

    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchPicture)}${params}`)/// Отправка запроса к API Pixabay с использованием
        // параметров(params) запроса к серверу по указанному URL.

        // Проверка успешности ответа
        .then(response => {
            if (!response.ok) {   // Генерация ошибки, если ответ не успешен
                throw new Error('Failed to fetch images');
            }
            return response.json(); //Мы обрабатываем ответ от сервера, преобразуя его в JSON.
        })

        .then(data => {  //продолжаем цепочку .then(), чтобы обработать полученные данные.
            //Здесь мы обрабатываем данные, полученные от сервера. Мы очищаем содержимое галереи,
            // а затем для каждого изображения в полученных данных создаем HTML - код,
            //который содержит ссылку на полное изображение(largeImageURL) и превью(previewURL), а также теги изображения(tags).
            const gallery = document.getElementById('gallery');// Получение элемента галереи изображений
            gallery.innerHTML = ''; //очищаем содержимое элемента галереи.
            if (data.hits.length === 0) { // Проверка наличия изображений в ответе
                iziToast.info({
                    title: 'Info',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
            } else {
                const galleryMarkup = data.hits.map(image => {
                    return `<a href="${image.largeImageURL}">
<img src="${image.previewURL}" alt="${image.tags}">
<div class="image-caption">
<span>Likes: ${image.likes}</span>
<span>Views: ${image.views}</span>
<span>Comments: ${image.comments}</span>
<span>Downloads: ${image.downloads}</span>
</div>
                    </a>`;
                }).join('');//объединение массива
                gallery.innerHTML = galleryMarkup;// добавляем всю разметку в галерею одномоментно
                new SimpleLightbox('.gallery a'); // инициализируем SimpleLightbox для всех ссылок
            }
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.'
            });
        });
    event.currentTarget.reset()//!очистка поля ввода
    return false; // чтобы форма не отправлялась после отправки запроса
}

const form = document.getElementById('searchForm');
form.addEventListener('submit', handleFormSubmit);