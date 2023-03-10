const button = document.getElementsByTagName('button');

const consBtn = document.getElementById('application');
const form = document.getElementById('cons-form');

consBtn.addEventListener('click',() => {
   form.style.display = 'flex';
})
document.getElementById('close-btn').addEventListener('click',(e) => {
   e.preventDefault();
   form.style.display = 'none';
})

//comment
//comment
const burger = document.getElementById('burger')
const burgerMenu = document.getElementById('burger-menu')

burger.addEventListener('click', () =>{
   burgerMenu.style.display = (burgerMenu.style.display == 'none') ? 'block' : 'none'

})
if(window.screen.width>877){
   burgerMenu.style.display = 'none';

}
const buyButton = document.getElementById('buy-button');
buyButton.addEventListener('click', () => {
   form.style.display = 'flex'
})

$(function () {
   $("#beforeafter_foto").twentytwenty();
});



const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;

// Показати перший слайд
slides[currentSlide].classList.add('active');

// Функція для переходу до наступного слайда
function nextSlide() {
  const slideWidth = slides[currentSlide].clientWidth;
  slides[currentSlide].style.animation = `slide-out s ease-out`;
  setTimeout(() => {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].style.animation = '';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.transform = `translateX(${slideWidth}px)`;
    setTimeout(() => {
      slides[currentSlide].style.transform = '';
    }, 100);
  }, 300);
}

// Функція для переходу до попереднього слайда
function prevSlide() {
  const slideWidth = slides[currentSlide].clientWidth;
  slides[currentSlide].style.animation = `slide-out-reverse 0.3s ease-out`;
  setTimeout(() => {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].style.animation = '';
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.transform = `translateX(-${slideWidth}px)`;
    setTimeout(() => {
      slides[currentSlide].style.transform = '';
    }, 10);
  }, 300);
}

// Обробники подій кнопок
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
       