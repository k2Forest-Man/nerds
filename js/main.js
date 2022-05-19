const buttonOpenPopup = document.querySelector ('.button-open-popup');
const closePopup = document.querySelector ('.close-button-popup');
const popupForm = document.querySelector ('.popup');


buttonOpenPopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  popupForm.style.display = 'flex';
});

closePopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  popupForm.style.display = 'none';
});