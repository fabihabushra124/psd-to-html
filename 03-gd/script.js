const navbar = document.querySelector('.navbar');
const linksContainer = document.querySelector('.links-container');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});

menuBtn.addEventListener('click', () => linksContainer.classList.add('active'));

closeBtn.addEventListener('click', () =>
  linksContainer.classList.remove('active')
);
