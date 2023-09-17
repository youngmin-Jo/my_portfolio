//use strict를 선언하면 좀 더 안전한 코드를 작성하게 됨. 기존 자바스크립트의 애매한 문법들은 오류를 뱉기 때문에 좀 더 정확한 코드를 작성할 수 있음
'use strict';

//Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
// header의 높이를 정의
//getBoundingClientRect 함수를 이용해서 높이는 측정
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
    //스크롤되는 Y 좌표가 headerHeight 보다 크다면 다른 스타일링
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
});

// Home 섹션을 아래로 스크롤 시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', ()=> {
    home.style.opacity = 1-window.scrollY / homeHeight;
});

// Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');

const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭 시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', ()=> {
    navbarMenu.classList.remove('open');
});
