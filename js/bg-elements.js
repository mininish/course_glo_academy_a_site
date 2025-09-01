const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg')

    elements.forEach(element => {
        const src = element.dataset["setbg"];
        element.style.backgroundImage = `url(${src})`;
    });
};

const setElementBg = ({ element, src }) => {
    element.style.backgroundImage = `url(${src})`;
}

export default bgElements;
export { setElementBg };