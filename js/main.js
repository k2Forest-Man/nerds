const buttonOpenPopup = document.querySelector ('.button-open-popup');
const closePopup = document.querySelector ('.close-button-popup');
const popupForm = document.querySelector ('.popup');


buttonOpenPopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  popupForm.classList.add('popup-show');
});

closePopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  popupForm.classList.remove('popup-show');
});