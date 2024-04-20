//инициализация выпадающего списка
document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    
    dropdownMenu.addEventListener('click', function(event) {
        var target = event.target;
        if (target.classList.contains('dropdown-item')) {
            var newValue = target.getAttribute('data-value');
            dropdownToggle.textContent = newValue;
            dropdownToggle.setAttribute('data-selected', newValue);
            dropdownMenu.classList.remove('show'); // Закрываем список после выбора пункта
        }
    });

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});

var images = [
    "https://www.meme-arsenal.com/memes/d7233afed9fad9a6a393b56cb9bc5104.jpg",
    "https://s00.yaplakal.com/pics/pics_original/0/5/3/16856350.jpg",
    "https://sun9-76.userapi.com/impg/X_DHDxGTrDGuPZrtqKmldoFAYekdwgfNEwJSNA/nATnRSzTPb8.jpg?size=604x596&quality=96&sign=83046feaffd2b0136fd0a920a01cabff&type=album",
    "https://www.meme-arsenal.com/memes/02c24a21a5c33d3c14b38df406cba31d.jpg"
];

document.addEventListener("DOMContentLoaded", function() { //скрываем и показываем изображение
    var buttonResult = document.getElementById('button-result');
    var image = document.getElementById('random-image');
    var imageContainer = document.getElementById('imageContainer');

    // скрываем изображение при загрузке страницы
    imageContainer.style.display = 'none';

    buttonResult.addEventListener('click', function() {
        if (imageContainer.style.display === 'none') {
            // Если изображение скрыто, показать случайное изображение и изменить текст кнопки на "Сбросить"
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
            image.src = randomImage;
            imageContainer.style.display = 'block';
            buttonResult.textContent = 'Сбросить';
        } else {
            // Если изображение видимо, скрыть его и изменить текст кнопки на "Рассчитать"
            imageContainer.style.display = 'none';
            buttonResult.textContent = 'Рассчитать';
        }
    });
});