const firstSlide = document.querySelector('.first-slide');
const secondSlide = document.querySelector('.second-slide');
const thirdSlide = document.querySelector('.third-slide');
const slideOne = document.querySelector('.slide-1');
const slideTwo = document.querySelector('.slide-2');
const slideThree = document.querySelector('.slide-3');

slideOne.addEventListener ('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.remove('hidden-slide');
  secondSlide.classList.add('hidden-slide');
  thirdSlide.classList.add('hidden-slide');
  slideOne.classList.add('current-slider');
  slideTwo.classList.remove('current-slider');
  slideThree.classList.remove('current-slider');
});

slideTwo.addEventListener ('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.add('hidden-slide');
  secondSlide.classList.remove('hidden-slide');
  thirdSlide.classList.add('hidden-slide');
  slideOne.classList.remove('current-slider');
  slideTwo.classList.add('current-slider');
  slideThree.classList.remove('current-slider');
});

slideThree.addEventListener ('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.add('hidden-slide');
  secondSlide.classList.add('hidden-slide');
  thirdSlide.classList.remove('hidden-slide');
  slideOne.classList.remove('current-slider');
  slideTwo.classList.remove('current-slider');
  slideThree.classList.add('current-slider');
});