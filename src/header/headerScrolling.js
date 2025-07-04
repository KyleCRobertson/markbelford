import { useEffect } from "react";
// PAGE SCROLLING
export default function HeaderScrolling(){
    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);
    const listenToScroll = () => {
        const menuDropDownBtn = document.querySelector('.menu-drop-down-btn');
        const headerLogoText = document.querySelector('.header-logo-text');
        const headerBlock = document.querySelector('header');
        const getOffset = (element) => {
            const rect = element?.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return rect.top + scrollTop;
        };
        const heightToHideFrom = getOffset(document.querySelector('.header-marker'));
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHideFrom) {  
            headerBlock.classList.add('bg-color-on', 'reduced');
            menuDropDownBtn.classList.add('light');
            headerLogoText.classList.add('light');
        } else {
            headerBlock.classList.remove('bg-color-on', 'reduced');
            menuDropDownBtn.classList.remove('light');
            headerLogoText.classList.remove('light');
        }  
    };
    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll2);
        return () => window.removeEventListener("scroll", listenToScroll2);
    }, []);
    const listenToScroll2 = () => {
        const headerBlock = document.querySelector('header');
        const getOffset = (element) => {
            const rect = element?.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return rect.top + scrollTop;
        };
        const heightToHideFrom = getOffset(document.querySelector('.page-marker'));
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHideFrom) {  
            headerBlock.classList.add('reduced');
        } else if (winScroll < heightToHideFrom){
            headerBlock.classList.remove('reduced');
        }  
    };
}
