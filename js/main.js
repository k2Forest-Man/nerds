let contactsButton = document.querySelector ('.button-open-popup');
let closepopup = document.querySelector ('.close-button-popup');
let popupForm = document.querySelector ('.popup');


contactsButton.addEventListener('click', () => {
  popupForm.style.display = 'flex';
})

closepopup.addEventListener('click', () => {
  popupForm.style.display = 'none';
})