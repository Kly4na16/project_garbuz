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




const slides = document.querySelectorAll(".slide");
const intervalTime = 2000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".active");
  
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("active");
  } else {
    sliders[0].classList.add("active");
  }
};

slideInterval = setInterval(nextSlide, intervalTime);

