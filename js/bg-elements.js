const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg')

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const src = element.dataset["setbg"];
        element.style.backgroundImage = `url(${src})`;
    }
};

const setElementBg = ({ element, src }) => {
    element.style.backgroundImage = `url(${src})`;
}

export default bgElements;
export { setElementBg };