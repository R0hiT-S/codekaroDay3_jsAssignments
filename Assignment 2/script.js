const countSpan = document.getElementById('count');
const updateCounter = () => {
    let number = parseInt(countSpan.innerText);
    countSpan.innerText = number + 1;
}