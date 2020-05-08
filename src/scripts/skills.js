let full  = document.querySelector('.menu-full');
let overlay = document.querySelector('.menu');
let body = document.querySelector('body');

let links = document.querySelectorAll('.menu__item');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  full.classList.toggle('menu-full--active');
  overlay.classList.toggle('menu--active');
  body.classList.toggle('body--active');
}

full.addEventListener('click' , toggleMenu);