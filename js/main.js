let contactsButton = document.querySelector ('.contacts-button');
let closePopap = document.querySelector ('.close-button-popap');
let popapForm = document.querySelector ('.popap');


contactsButton.addEventListener('click', () => {
  popapForm.style.display = 'flex';
})

closePopap.addEventListener('click', () => {
  popapForm.style.display = 'none';
})