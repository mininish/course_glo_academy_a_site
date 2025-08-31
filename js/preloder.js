(function () {
    const preloader = document.querySelector('.preloder');
    preloader.classList.add("active");

    window.setTimeout(() => {
        preloader.classList.remove("active");
    }, 500)
})();
