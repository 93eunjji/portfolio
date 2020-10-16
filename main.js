'use strict';

//Make navbar navbar바 스크롤 움직이면 변화하도록
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//Handle scrolling  Navbar메뉴 클릭시 클릭메뉴로 이동
//HTML에서 a태그로 이동도 가능 함 ex)<a href="#home">HOME</a>
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return;
  }
  scrollIntoView(link);
});

//Handle scrolling  홈에 'contact me' 버튼 클릭시 이동
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}

//스크롤 내릴수록 home화면이 투명해지게
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(`homeHeight: ${homeHeight}`);
  console.log(1- window.scrollY / homeHeight);
  home.style.opacity = 1- window.scrollY / homeHeight;
});