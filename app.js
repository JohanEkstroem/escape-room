console.log('app.js is loaded...');
const closeBtn = document.getElementById('close');
const menuBtn = document.getElementById('menuBtn');
const popupContainer = document.getElementById('popup-container');
const allBut_popupcontainer = document.querySelectorAll('html div:not(#popup-container)');


menuBtn.addEventListener('click', () => {
    popupContainer.classList.remove('hidden');
    allBut_popupcontainer.style.opacity = .4;


})

closeBtn.addEventListener('click', () => {
    popupContainer.setAttribute("class", "popup-container hidden");

})