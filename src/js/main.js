import '../scss/styles.scss'
//burger - menu
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const bodyElement = document.body;

headerBurger.addEventListener('click', function (event) {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  bodyElement.classList.toggle('lock');
});


const backToTop = document.querySelector('#back-to-top');


window.addEventListener('scroll', function (event) {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});


