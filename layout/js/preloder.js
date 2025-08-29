const preloader = document.querySelector('.preloder');
console.log(preloader);
preloader.classList.add("active");


window.setTimeout(() => {
    preloader.classList.remove("active");
}, 500)

// document.addEventListener("DOMContentLoaded", () => {
// preloader.classList.remove("active")
// })