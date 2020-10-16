'use strict';

//Make navbar navbar바 스크롤 움직이면 변화하도록
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(navbarHeight);
  if(window.scroll > navbarHeight){
    navbar.classList.add('navbar--dark');
  }else {
    navbar.classList.remove('navbar--dark');
  }
});