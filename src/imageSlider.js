import atte from './images/legoATTE.jpeg';
import n1Fighter from './images/legoN1Fighter.jpg';
import spiderTank from './images/legoSpiderTank.jpeg';
import jediFighter from './images/legoStarfighter.png';
import arrowPrev from './images/arrowLeft.svg';
import arrowNext from './images/arrowRight.svg';

const imageArray = [atte, n1Fighter, spiderTank, jediFighter];
let currentIndex = 0;

function makeSliderBttns() {
  const prevButton = document.createElement('button');
  const nextButton = document.createElement('button');

  prevButton.classList.add('previous-bttn');
  prevButton.classList.add('slider-button');
  nextButton.classList.add('next-bttn');
  nextButton.classList.add('slider-button');

  prevButton.style.background = `url(${arrowPrev})`;
  nextButton.style.background = `url(${arrowNext})`;

  const main = document.querySelector('main');
  main.appendChild(prevButton);
  main.appendChild(nextButton);
}

function makeNavigationDots() {
  const container = document.createElement('div');
  container.classList.add('nav-dots-container');

  for (let i = 0; i < imageArray.length; i += 1) {
    const button = document.createElement('button');
    button.classList.add('nav-dot');
    button.setAttribute('data-index', i);
    container.appendChild(button);
  }

  const main = document.querySelector('main');
  main.appendChild(container);
}

function updateNavigationDots() {
  const navDots = document.querySelectorAll('.nav-dot');
  navDots.forEach((navDot) => navDot.classList.remove('active'));

  navDots.forEach((navDot) => {
    const dataIndex = Number(navDot.getAttribute('data-index'));
    if (currentIndex === dataIndex) {
      navDot.classList.add('active');
    }
  });
}

function setInitialImage() {
  const image = document.querySelector('.image-container');
  image.style.background = `url(${atte})`;

  makeSliderBttns();
  makeNavigationDots();
  updateNavigationDots();
}

function updateImageContainer() {
  const image = document.querySelector('.image-container');
  image.style.background = `url(${imageArray[currentIndex]})`;
  updateNavigationDots();
}

function nextImage() {
  if (currentIndex === imageArray.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  updateImageContainer();
}

function previousImage() {
  if (currentIndex === 0) {
    currentIndex = imageArray.length - 1;
  } else {
    currentIndex -= 1;
  }
  updateImageContainer();
}

function setChosenImage(index) {
  currentIndex = index;
  updateImageContainer();
}

export { setInitialImage, nextImage, previousImage, setChosenImage };
