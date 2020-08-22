export default (function popup() {})();

const popup = document.querySelector('.popup');
const modal = document.querySelector('.popup__modal');
const btn = document.querySelector('.popup__btn');
const newsletter = document.querySelector('[data-popup]');

function openClose() {
    popup.classList.toggle('active');
    modal.classList.toggle('active');
}

function handleClick(event) {
    event.preventDefault();
    openClose()
}

function closePopup(event) {
    if(event.target === this) {
        openClose()
    }
}

newsletter.addEventListener('click', handleClick);
btn.addEventListener('click', handleClick);
popup.addEventListener('click', closePopup);
