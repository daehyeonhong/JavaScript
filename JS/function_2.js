const title = document.querySelector('#title');

const BASE_COLOR = 'rgb(52, 73, 94)';
const OTHER_COLOR = '#7f8c8d';

function handleClick() {
  const currentColor = title.style.color;
  title.style.color = currentColor === BASE_COLOR ? OTHER_COLOR : BASE_COLOR;
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener('mouseenter', handleClick);
}

init();

function handdleOfflie() {
  console.log('Bye bye');
}

function handleOnline() {
  console.log('Welcome Back');
}

window.addEventListener('offline', handleOffline);
window.addEventListener('online', handleOnline);