(function () {

    const modal = document.querySelector(".search-model");

    const modalBtn = document.querySelector(".icon_search");

    const modalClose = modal.querySelector(".search-close-switch");
    modalClose.addEventListener("click", () => {
        modal.style.display = null;
    });

    modalBtn.addEventListener("click", () => {
        const currentDisplay = modal.style.display;
        if (!currentDisplay) {
            modal.style.display = `block`;
        }

    });

    const modalInput = modal.querySelector("#search-input");
    modalInput.addEventListener("input", (event) => {
        console.log(modalInput.value);
    });
})();