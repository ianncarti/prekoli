document.addEventListener("DOMContentLoaded", function() {
    const emojis = ["😀", "😂", "😍", "🥳", "🤩", "😎", "🥰", "😇", "🤑", "🥶", "🤔", "💜", "🎈", "😉", "🎉", "💅🏽"];

    const generateEmojis = () => {
        const emojisContainer = document.getElementById("emojis_container");
        emojisContainer.innerHTML = "";
        
        // Небольшая анимация загрузки
        emojisContainer.innerHTML = "Проверяем...";
        setTimeout(() => {
            emojisContainer.innerHTML = "";
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * emojis.length);
                const randomEmoji = emojis[randomIndex];
                emojisContainer.innerHTML += `<span>${randomEmoji}</span>`;
            }
        }, 2000); // Время анимации загрузки в миллисекундах
    };

    document.getElementById("generate_btn").addEventListener("click", generateEmojis);
});
