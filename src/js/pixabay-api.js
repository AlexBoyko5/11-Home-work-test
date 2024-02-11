// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
//import { refs } from './pixabay-api';

function searchImages() { //объявление функции
    const searchPicture = document.querySelectorById("searchInput").value;
    //находим элемент с id ("searchInput") (поле ввода) и получаем его значение (текст, введенный пользователем).
    fetch(`https://api.example.com/images?q=${searchPicture}`)
        //используем функцию fetch, чтобы выполнить GET-запрос к серверу по указанному URL.
        // В URL мы подставляем значение (searchPicture) чтобы выполнить поиск изображений по ключевому слову.

        //Обработка ответа
        .then(response => response.json()) //Мы обрабатываем ответ от сервера, преобразуя его в JSON.
        .then(data => {  //продолжаем цепочку .then(), чтобы обработать полученные данные.
            //Здесь мы обрабатываем данные, полученные от сервера. Мы очищаем содержимое галереи,
            // а затем для каждого изображения в полученных данных создаем HTML - код, 
            //который содержит ссылку на полное изображение(largeImageURL) и превью(previewURL), а также теги изображения(tags).
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = ''; //очищаем содержимое элемента галереи.
            data.forEach(image => {
                gallery.innerHTML += `<a href="${image.largeImageURL}"><img src="${image.previewURL}" alt="${image.tags}"></a>`;
            })
            new SimpleLightbox('.gallery a'); // инициализируем SimpleLightbox для всех ссылок 
            //на изображения в галерее после того, как они были добавлены.
        })
        .catch(error => {
            console.error('Error fetching images:', error);//обрабатываем любые ошибки, возникающие при выполнении
            // запроса или обработке данных, и выводим сообщение об ошибке в консоль.

        });
}