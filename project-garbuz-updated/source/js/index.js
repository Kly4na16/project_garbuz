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



$(document).ready(function(){
   $('.slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight:true,
      speed:1000,
      autoplay:true,
      autoplaySpeed:2000,
      autoplaytime:1000,
      pauseOnFocus:true,
      pauseOnHover:true,
      pauseOnDotsHover:true,
      waitForAnimate:true,
      slidesToShow:1,
   });
 });

// получаем элемент прелоадера
const preloader = document.querySelector('.preloader');

// спрятать прелоадер спустя 1 секунду
setTimeout(() => {
  preloader.style.display = 'none';
}, 2000);

