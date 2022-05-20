const buttonOpenPopup = document.querySelector ('.button-open-popup');
const closePopup = document.querySelector ('.close-button-popup');
const popup = document.querySelector ('.popup');
const form = popup.querySelector(".popup-form");
const inputName = popup.querySelector('.input-name');
const inputEmail = popup.querySelector(".input-email");
const textLetter = popup.querySelector('[name=text-letter]');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('yourName');
} catch (err) {
  isStorageSupport = false;
}


buttonOpenPopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.add('popup-show');

  if (storage) {
    inputName.value = storage;
    inputEmail.focus();
  } else {
    inputName.focus();
  }
});

closePopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.remove('popup-show');
  popup.classList.remove('popup-error');
});

form.addEventListener('submit', (evt) => {
  if(!inputName.value || !inputEmail.value || !textLetter.value) {
    evt.preventDefault();
    popup.classList.remove('popup-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('popup-error');
  } else {
    if(isStorageSupport) {
      localStorage.setItem('yourName', inputName.value);
    }
  }
})

window.addEventListener ('keydown', (evt) => {
  if(evt.keyCode === 27) {
    if(popup.classList.contains('popup-show')) {
      evt.preventDefault();
      popup.classList.remove('popup-show');
      popup.classList.remove('popup-error');
    }
  }
})