// Javascript
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');

// when we click on the menu then
menu.addEventListener('click', () => {
  // ...
  navbar.classList.toggle('menu-active');
  // add menu-active when we click on it and
  // if we reclick it then remove it
})
