const burger = document.querySelector('.header__icon');
const menu = document.querySelector('.nav');
const body = document.body;
const headerBody = document.querySelector('.header__body');
const header = document.querySelector('.header');



burger.addEventListener('click', ()=>{
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
    if(burger.classList.contains('_active')){
        header.style.background = '#fff'
    } else{
        header.style.background = '#F5F7FA'
    }
    
});



