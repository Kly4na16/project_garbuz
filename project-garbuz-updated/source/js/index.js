const button = document.getElementsByTagName('button');

const consBtn = document.getElementById('application');
const form = document.getElementById('cons-form');

consBtn.addEventListener('click', () => {
   form.style.display = 'flex';
})
document.getElementById('close-btn').addEventListener('click', (e) => {
   e.preventDefault();
   form.style.display = 'none';
})

//comment
//comment
const burger = document.getElementById('burger')
const burgerMenu = document.getElementById('burger-menu')

burger.addEventListener('click', () => {
   burgerMenu.style.display = (burgerMenu.style.display == 'none') ? 'block' : 'none'

})
if (window.screen.width > 877) {
   burgerMenu.style.display = 'none';

}
const buyButton = document.getElementById('buy-button');
buyButton.addEventListener('click', () => {
   form.style.display = 'flex'
})

$(function () {
   $("#beforeafter_foto").twentytwenty();
});

$(function () {
   $("#beforeafter_foto_2").twentytwenty();
});

$(document).ready(function () {
   $('.slider_container').slick({
      fade: true,
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      speed: 1000,
      
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      waitForAnimate: true,
      slidesToShow: 1,
   });
});


$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
      slidesToScroll:3,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

// получаем элемент прелоадера
const preloader = document.querySelector('.preloader');

// спрятать прелоадер спустя 1 секунду
setTimeout(() => {
   preloader.style.display = 'none';
}, 2000);

$(document).ready(function () {
   $('.slider_1').slick({

   });
});