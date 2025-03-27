document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.swiper', {
        slidesPerView: 3,  // Количество отображаемых слайдов
        spaceBetween: 20,  // Отступы между слайдами
        loop: true,        // Зацикливание слайдера
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
