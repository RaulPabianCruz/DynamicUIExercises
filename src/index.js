import makeTabMenu from './tabMenu';
import './style.css';

const hideDropdowns = function hideDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach((drop) => drop.classList.remove('revealed'));
};

const revealDropdown = function revealDropdown(dropdownElem) {
  dropdownElem.classList.add('revealed');
};

const navOptionClicked = function navOptionClicked(event) {
  hideDropdowns();
  const dropdown = event.target.querySelector('.dropdown');
  revealDropdown(dropdown);
};

const windowClicked = function windowClicked(event) {
  if (!event.target.matches('.option')) {
    hideDropdowns();
  }
};

const navBarOptions = document.querySelector('.options-container');
navBarOptions.addEventListener('click', navOptionClicked);

window.addEventListener('click', windowClicked);

const content = document.querySelector('.main-content');
content.appendChild(makeTabMenu());
