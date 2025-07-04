export const menuOpen = () => {
    const dropDownMenu = document.querySelector('.drop-down-menu');
    const dropDownMenuBtn = document.querySelector('.menu-drop-down-btn');
    const navLink1 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-1');
    const navLink2 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-2');
    const navLink3 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-3');
    const navLink4 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-4');
    const navLink5 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-5');
    const navLink6 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-6');
    const subMenu1 = document.querySelector('.drop-down-menu .menu ul .sub-menu-collection');
    const subMenu2 = document.querySelector('.drop-down-menu .menu ul .sub-menu-events');
    dropDownMenu.classList.toggle('on');
    dropDownMenu.classList.add('background-1');
    setTimeout(function(){
        navLink1.classList.toggle('show');
    }, 400);
    setTimeout(function(){
        navLink2.classList.toggle('show');
    }, 500);
    setTimeout(function(){
        navLink3.classList.toggle('show');
    }, 600);
    setTimeout(function(){
        navLink4.classList.toggle('show');
    }, 700);
    setTimeout(function(){
        navLink5.classList.toggle('show');
    }, 800);
    setTimeout(function(){
        navLink6.classList.toggle('show');
    }, 800);
    subMenu2.classList.remove('on2');
    subMenu2.classList.remove('on1');
    subMenu1.classList.remove('on2');
    subMenu1.classList.remove('on1');
    navLink2.classList.remove('on1');
    navLink3.classList.remove('on1');
    dropDownMenuBtn.classList.toggle('close');
};

export const menuClose = () => {
    const dropDownMenu = document.querySelector('.drop-down-menu');
    const dropDownMenuBtn = document.querySelector('.menu-drop-down-btn');
    const navLinkAll = document.querySelector('.drop-down-menu .menu ul .nav-link');
    const navLink1 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-1');
    const navLink2 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-2');
    const navLink3 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-3');
    const navLink4 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-4');
    const navLink5 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-5');
    const navLink6 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-6');
    const subMenu1 = document.querySelector('.drop-down-menu .menu ul .sub-menu-collection');
    const subMenu2 = document.querySelector('.drop-down-menu .menu ul .sub-menu-events');
    navLinkAll.classList.remove('show');
    navLink6.classList.remove('show');
    navLink5.classList.remove('show');
    navLink4.classList.remove('show');
    subMenu2.classList.remove('on2');
    subMenu2.classList.remove('on1');
    navLink3.classList.remove('show');
    subMenu1.classList.remove('on2');
    subMenu1.classList.remove('on1');
    navLink2.classList.remove('show');
    navLink1.classList.remove('show');
    setTimeout(() => {
        dropDownMenu.classList.remove('on');
    }, 300);
    setTimeout(() => {
        dropDownMenuBtn.classList.remove('close');
    }, 300);
};