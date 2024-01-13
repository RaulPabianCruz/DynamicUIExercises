import homeIcon from './images/home.svg';
import profileIcon from './images/account-circle.svg';
import mssgIcon from './images/message.svg';
import bellIcon from './images/bell.svg';

const makeHomeTab = function makeHomeTab() {
  const container = document.createElement('div');
  container.classList.add('home-tab');
  container.classList.add('tab-container');

  const icon = document.createElement('img');
  icon.classList.add('tab-icon');
  icon.src = homeIcon;

  const text = document.createElement('p');
  text.classList.add('tab-text');
  text.textContent = 'Home';

  container.appendChild(icon);
  container.appendChild(text);

  return container;
};

const makeProfileTab = function makeNotifTab() {
  const container = document.createElement('div');
  container.classList.add('profile-tab');
  container.classList.add('tab-container');

  const icon = document.createElement('img');
  icon.classList.add('tab-icon');
  icon.src = profileIcon;

  const text = document.createElement('p');
  text.classList.add('tab-text');
  text.textContent = 'Profile';

  container.appendChild(icon);
  container.appendChild(text);

  return container;
};

const makeMssgTab = function makeNotifTab() {
  const container = document.createElement('div');
  container.classList.add('mssg-tab');
  container.classList.add('tab-container');

  const icon = document.createElement('img');
  icon.classList.add('tab-icon');
  icon.src = mssgIcon;

  const text = document.createElement('p');
  text.classList.add('tab-text');
  text.textContent = 'Messages';

  container.appendChild(icon);
  container.appendChild(text);

  return container;
};

const makeNotifTab = function makeNotifTab() {
  const container = document.createElement('div');
  container.classList.add('notif-tab');
  container.classList.add('tab-container');

  const icon = document.createElement('img');
  icon.classList.add('tab-icon');
  icon.src = bellIcon;

  const text = document.createElement('p');
  text.classList.add('tab-text');
  text.textContent = 'Notifications';

  container.appendChild(icon);
  container.appendChild(text);

  return container;
};

const makeTabMenu = function makeTabMenu() {
  const container = document.createElement('div');
  container.classList.add('tab-menu');

  container.appendChild(makeHomeTab());
  container.appendChild(makeProfileTab());
  container.appendChild(makeMssgTab());
  container.appendChild(makeNotifTab());

  return container;
};

export default makeTabMenu;
