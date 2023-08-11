const body = document.body;

const getRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
}
const changeBackgroundColor = () => {
    const color = getRandomColor();
    body.style.backgroundColor = `#${color}`
}

body.addEventListener('click', (e) => {
    changeBackgroundColor();
});