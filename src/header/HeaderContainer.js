import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderComponent from './headerComponent';
import HeaderScrolling from './headerScrolling';
import { menuOpen, menuClose }  from './headerShowHide';
import { headerAppearanceDark, headerAppearanceLight } from './headerAppearance';

const menuLabels = ['mark', 'atelier', 'spectacle', 'proof', 'fit', 'contact'];




export default function HeaderContainer() {
    const [menuLabel, setMenuLabel] = useState('');

    const location = useLocation();
    const currentPathname = location.pathname;

    
    useEffect(() => {
        const headerBlock = document.querySelector('header');
        const menuDropDownBtn = document.querySelector('.menu-drop-down-btn');
        if(currentPathname === '/'){
            headerBlock.classList.remove('bg-color-on');
            menuDropDownBtn.classList.remove('light');
            setMenuLabel('');
        }
        if(currentPathname === '/Mark'){
            headerBlock.classList.add('bg-color-on');
            menuDropDownBtn.classList.add('light');
            setMenuLabel(menuLabels[0]);
        }
        if(currentPathname === '/Contact'){
            headerBlock.classList.add('bg-color-on');
            menuDropDownBtn.classList.add('light');
            setMenuLabel(menuLabels[5]);
        }
    }, [currentPathname])
    

    // CONTROLS MENU LABELS
    useEffect(() => {
        const header = document.getElementById("header");
        const headerBlock = document.querySelector('header');
        const menuDropDownBtn = document.querySelector('.menu-drop-down-btn');
        const headerLogoText = document.querySelector('.header-logo-text');
        const navActive1 = document.querySelector('.nav-1.active');
        const navActive4 = document.querySelector('.nav-4.active');
        const navActive5 = document.querySelector('.nav-5.active');
        const navActive6 = document.querySelector('.nav-6.active');
        const subNavColActive1 = document.querySelector('.sub-nav-col-1.active');
        const subNavColActive2 = document.querySelector('.sub-nav-col-2.active');
        const subNavColActive3 = document.querySelector('.sub-nav-col-3.active');
        const subNavColActive4 = document.querySelector('.sub-nav-col-4.active');
        const subNavColActive5 = document.querySelector('.sub-nav-col-5.active');
        const subNavEventActive1 = document.querySelector('.sub-nav-event-1.active');
        const subNavEventActive2 = document.querySelector('.sub-nav-event-2.active');
        const subNavEventActive3 = document.querySelector('.sub-nav-event-3.active');
        const newMenuLable1 = menuLabels[0];
        const newMenuLable2 = menuLabels[1];
        const newMenuLable3 = menuLabels[2];
        const newMenuLable4 = menuLabels[3];
        const newMenuLable5 = menuLabels[4];
        const newMenuLable6 = menuLabels[5];
        // SETS HEADER ELEMENTS TO DARK OR LIGHT BASED ON NAV ACTIVE
        
        
        const darkAddition = () => {
            headerBlock.classList.add('bg-color-on');
            menuDropDownBtn.classList.add('light');
            headerLogoText.classList.add('light');
        }
        if (navActive1){
            darkAddition();
            setMenuLabel(newMenuLable1);
        } else if (navActive4){
            darkAddition();
            setMenuLabel(newMenuLable4);
        } else if (navActive5){
            darkAddition();
            setMenuLabel(newMenuLable5);
        } else if (navActive6){
            darkAddition();
            setMenuLabel(newMenuLable6);
        } else if (subNavColActive1){
            darkAddition();
            setMenuLabel(newMenuLable2);
        } else if (subNavColActive2){
            darkAddition();
            setMenuLabel(newMenuLable2);
        } else if (subNavColActive3){
            darkAddition();
            setMenuLabel(newMenuLable2);
        } else if (subNavColActive4){
            darkAddition();
            setMenuLabel(newMenuLable2);
        } else if (subNavColActive5){
            darkAddition();
            setMenuLabel(newMenuLable2);
        } else if (subNavEventActive1){
            darkAddition();
            setMenuLabel(newMenuLable3);
        } else if (subNavEventActive2){
            darkAddition();
            setMenuLabel(newMenuLable3);
        } else if (subNavEventActive3){
            darkAddition();
            setMenuLabel(newMenuLable3);
        } else {
            return header.classList.remove("dark");
        }
    }, [currentPathname]);


    /*const menuLabel1on = () => {
        setMenuLabel(menuLabels[0]);
        }
    const menuLabel2on = () => {
        setMenuLabel(menuLabels[1]);
        }
    const menuLabel3on = () => {
        setMenuLabel(menuLabels[2]);
        }
    const menuLabel4on = () => {
        setMenuLabel(menuLabels[3]);
        }
    const menuLabel5on = () => {
        setMenuLabel(menuLabels[4]);
        }
    const menuLabel6on = () => {
        setMenuLabel(menuLabels[5]);
        }*/

    const menuLabelReset = () => {
        setMenuLabel('');
    }
    // CONTROLS MENU LABELS

    // DROP DOWN MENU BACKGROUND CHANGES ON HOVER
    const menuUnderline1 = () => {
        const navLink1 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-1');
        navLink1.classList.add('on');
    };
    const menuUnderline2 = () => {
        const navLink2 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-2');
        navLink2.classList.add('on');
    };
    const menuUnderline3 = () => {
        const navLink3 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-3');
        navLink3.classList.add('on');
    };
    const menuUnderline4 = () => {
        const navLink4 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-4');
        navLink4.classList.add('on');
    };
    const menuUnderline5 = () => {
        const navLink5 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-5');
        navLink5.classList.add('on');
    };
    const menuUnderline6 = () => {
        const navLink6 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-6');
        navLink6.classList.add('on');
    };
    const menuUnderlineRemove = () => {
        document.querySelector('.drop-down-menu .menu ul .nav-link.nav-1').classList.remove('on');
        document.querySelector('.drop-down-menu .menu ul .nav-link.nav-2').classList.remove('on');
        document.querySelector('.drop-down-menu .menu ul .nav-link.nav-3').classList.remove('on');
        document.querySelector('.drop-down-menu .menu ul .nav-link.nav-4').classList.remove('on');
        document.querySelector('.drop-down-menu .menu ul .nav-link.nav-5').classList.remove('on');
        document.querySelector('.drop-down-menu .menu ul .nav-link.nav-6').classList.remove('on');
    };
    const menuStyle1 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.remove('background-2');
        dropDownMenu.classList.remove('background-3');
        dropDownMenu.classList.remove('background-4');
        dropDownMenu.classList.remove('background-5');
        dropDownMenu.classList.remove('background-6');
        dropDownMenu.classList.add('background-1');
    };
    const menuStyle2 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.remove('background-1');
        dropDownMenu.classList.remove('background-3');
        dropDownMenu.classList.remove('background-4');
        dropDownMenu.classList.remove('background-5');
        dropDownMenu.classList.remove('background-6');
        dropDownMenu.classList.add('background-2');
    };
    const menuStyle3 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.remove('background-1');
        dropDownMenu.classList.remove('background-2');
        dropDownMenu.classList.remove('background-4');
        dropDownMenu.classList.remove('background-5');
        dropDownMenu.classList.remove('background-6');
        dropDownMenu.classList.add('background-3');
    };
    const menuStyle4 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.remove('background-1');
        dropDownMenu.classList.remove('background-2');
        dropDownMenu.classList.remove('background-3');
        dropDownMenu.classList.remove('background-5');
        dropDownMenu.classList.remove('background-6');
        dropDownMenu.classList.add('background-4');
    };
    const menuStyle5 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.remove('background-1');
        dropDownMenu.classList.remove('background-2');
        dropDownMenu.classList.remove('background-3');
        dropDownMenu.classList.remove('background-4');
        dropDownMenu.classList.remove('background-6');
        dropDownMenu.classList.add('background-5');
    };
    const menuStyle6 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.remove('background-1');
        dropDownMenu.classList.remove('background-2');
        dropDownMenu.classList.remove('background-3');
        dropDownMenu.classList.remove('background-4');
        dropDownMenu.classList.remove('background-5');
        dropDownMenu.classList.add('background-6');
    };
    // DROP DOWN MENU BACKGROUND CHANGES ON HOVER
    // DROP DOWN MENU BACKGROUND CHANGES ON CLICK
    const menuBG1 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.add('background-1');
    }
    const menuBG2 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.add('background-2');
    }
    const menuBG3 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.add('background-3');
    }
    const menuBG4 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.add('background-4');
    }
    const menuBG5 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.add('background-5');
    }
    const menuBG6 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.add('background-6');
    }
    // DROP DOWN MENU BACKGROUND CHANGES ON CLICK
    // DROP DOWN SUB-MENU COLLECTION
    const subMenuCollectionOpen = () => {
        const subMenuCollection = document.querySelector('.sub-menu-collection');
        const collectionMenuHeader = document.querySelector('.nav-2');
        subMenuCollection.classList.toggle('on1');
        collectionMenuHeader.classList.toggle('on1');
        setTimeout(() => {
            subMenuCollection.classList.toggle('on2');
        }, 10);
    };
    const subMenuCollectionClose = () => {
        const subMenuCollection = document.querySelector('.sub-menu-collection');
        subMenuCollection.classList.remove('on2');
        setTimeout(() => {
            subMenuCollection.classList.remove('on1');
        }, 800);
    };
    // DROP DOWN SUB-MENU COLLECTION
    // DROP DOWN SUB-MENU EVENTS
    const subMenuEventsOpen = () => {
        const subMenuEvents = document.querySelector('.sub-menu-events');
        const eventsMenuHeader = document.querySelector('.nav-3');
        subMenuEvents.classList.toggle('on1');
        eventsMenuHeader.classList.toggle('on1');
        setTimeout(() => {
            subMenuEvents.classList.toggle('on2');
        }, 10);
    };
    const subMenuEventsClose = () => {
        const subMenuEvents = document.querySelector('.sub-menu-events');
        subMenuEvents.classList.remove('on2');
        setTimeout(() => {
            subMenuEvents.classList.remove('on1');
        }, 800);
    };
    
    return (
        <>
        <HeaderScrolling />
        <HeaderComponent
            label={menuLabel}
            setLabel={setMenuLabel}
            menuLabelReset={menuLabelReset}
            menuOpen={menuOpen}
            menuClose={menuClose}
            headerAppearanceDark={headerAppearanceDark}
            headerAppearanceLight={headerAppearanceLight}
            subMenuCollectionClose={subMenuCollectionClose}
            subMenuEventsClose={subMenuEventsClose}
            /*menuLabel1on={menuLabel1on}
            menuLabel2on={menuLabel2on}
            menuLabel3on={menuLabel3on}
            menuLabel4on={menuLabel4on}
            menuLabel5on={menuLabel5on}
            menuLabel6on={menuLabel6on}*/
            menuBG1={menuBG1}
            menuBG2={menuBG2}
            menuBG3={menuBG3}
            menuBG4={menuBG4}
            menuBG5={menuBG5}
            menuBG6={menuBG6}
            menuUnderline1={menuUnderline1}
            menuUnderline2={menuUnderline2}
            menuUnderline3={menuUnderline3}
            menuUnderline4={menuUnderline4}
            menuUnderline5={menuUnderline5}
            menuUnderline6={menuUnderline6}
            menuStyle1={menuStyle1}
            menuStyle2={menuStyle2}
            menuStyle3={menuStyle3}
            menuStyle4={menuStyle4}
            menuStyle5={menuStyle5}
            menuStyle6={menuStyle6}
            menuUnderlineRemove={menuUnderlineRemove}
            subMenuCollectionOpen={subMenuCollectionOpen}
            subMenuEventsOpen={subMenuEventsOpen}
        />
    </>
    )
};