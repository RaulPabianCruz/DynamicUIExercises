import { navOptionClicked, windowClicked } from './dropdown';
import makeTabMenu from './tabMenu';
import {
  setInitialImage,
  nextImage,
  previousImage,
  setChosenImage,
} from './imageSlider';
import './style.css';

const navBarOptions = document.querySelector('.options-container');
navBarOptions.addEventListener('click', navOptionClicked);

window.addEventListener('click', windowClicked);

const content = document.querySelector('.main-content');
content.appendChild(makeTabMenu());

// Image slider event listeners and handlers

setInitialImage();

let sliderTimer = setInterval(nextImage, 5000);

function resetSliderTimer() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(nextImage, 5000);
}

function navDotClicked(event) {
  const dot = event.target;
  const index = Number(dot.getAttribute('data-index'));
  setChosenImage(index);
  resetSliderTimer();
}

const prevBttn = document.querySelector('.previous-bttn');
prevBttn.addEventListener('click', () => {
  previousImage();
  resetSliderTimer();
});

const nextBttn = document.querySelector('.next-bttn');
nextBttn.addEventListener('click', () => {
  nextImage();
  resetSliderTimer();
});

const dotsContainer = document.querySelector('.nav-dots-container');
dotsContainer.addEventListener('click', navDotClicked);
