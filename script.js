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
document.addEventListener("DOMContentLoaded", function() { //скрываем и показываем изображение
var buttonResult = document.getElementById('button-result');
var image = document.getElementById('gosling');

buttonResult.addEventListener('click', function() {
  if (image.style.display === 'none') {
      image.style.display = 'block';
      buttonResult.textContent = 'Сбросить';
  } else {
      image.style.display = 'none';
      buttonResult.textContent = 'Рассчитать';
  }
});
});