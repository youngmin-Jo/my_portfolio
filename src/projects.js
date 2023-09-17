'use strict';

// 프로젝트 필터링 관련 로직 처리

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event)=>{
    const filter = event.target.dataset.category;  
    if(filter == null){
        return;
    }
    handleActiveSelection(event.target);
    filterProjects(filter);
});

function handleActiveSelection(target){
        //Active 메뉴를 재설정
        const active = document.querySelector('.category--selected');
        active.classList.remove('category--selected');
        target.classList.add('category--selected');
}
        // 프로젝트 필터링
function filterProjects(filter){
        projectsContainer.classList.add('anim-out');
        projects.forEach(projects => {
            if(filter === 'all' || filter === projects.dataset.type){
                projects.style.display = 'block';
            }else{
                projects.style.display = 'none';
            }
        });
        setTimeout(()=>{
        projectsContainer.classList.remove('anim-out');
        }, 250);
}