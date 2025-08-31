function slider() {
    const swiper = new Swiper(".swiper", {
        loop: "true",
        effect: "fade",
        speed: 1000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

export default slider;