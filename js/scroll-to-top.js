(function () {
    const topBtn = document.querySelector("#scrollToTopButton");

    topBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const header = document.querySelector(".header")

        window.scrollTo({
            top: 0,
            behavior: "smooth",

        })
    });
})();