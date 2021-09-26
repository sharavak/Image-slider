const nextButton = document.querySelector('.nextBut');
const prevButton = document.querySelector('.preBut');
const image = document.querySelector('img');
let start = document.querySelector('#start');
prevButton.disabled = true;
let c = 0;
let images = ['https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80s','https://images.unsplash.com/photo-1532032494808-2d255d4122ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 'https://images.unsplash.com/photo-1531870517049-f0c546fa559e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80','https://images.unsplash.com/photo-1438786657495-640937046d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','https://images.unsplash.com/photo-1515019915774-f4887104b715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
let n = images.length;

nextButton.addEventListener('click', function () {
    animation();
    nextButton.disabled = false;
    c = c + 1;
    if (c === n - 1) {
        nextButton.disabled = true;
        prevButton.disabled = false;
    }
    start.textContent = c + 1;
    image.src = images[c];
    prevButton.disabled = false;
    animationOff();
})

prevButton.addEventListener('click', function () {
    animationOff();
    nextButton.disabled = false;
    c = c - 1
    if (c === 0) {
        prevButton.disabled = true;
        nextButton.disabled = false;

    }
    start.textContent = c + 1;
    image.src = images[c];
    animation();
})

function animation() {
    image.style.animation = 'fade 3s ease backwards';
}
function animationOff() {
    image.style.animation = 'fades 3s ease backwards';
}