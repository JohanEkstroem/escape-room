console.log('app.js is loaded...');
const closeBtn = document.getElementById('close');
const menuBtn = document.getElementById('menuBtn');
const popupContainer = document.getElementById('popup-container');
const modalBackground = document.querySelector('.modal-background');


menuBtn.addEventListener('click', () => {
    modalBackground.classList.remove("hidden");
})

closeBtn.addEventListener('click', () => {
    modalBackground.classList.add('hidden');
})