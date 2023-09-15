//Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
// header의 높이를 정의
//getBoundingClientRect 함수를 이용해서 높이는 측정
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    //스크롤되는 Y 좌표가 headerHeight 보다 크다면 다른 스타일링
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
});
