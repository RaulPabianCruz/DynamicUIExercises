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

export { navOptionClicked, windowClicked };
