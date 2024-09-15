import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from './HeaderElements';
import logo from '../../images/mark-belford-logo-dark.svg'
import logoLight from '../../images/mark-belford-logo-light.svg'
import '../styles/Header.css';

const menuLabels = ['mark', 'collection', 'events', 'publications', 'contact'];



const Header = () => {
    
    const [menuLabel, setMenuLabel] = useState(null);

    // HEADER ELEMENTS STYLING FOR BAKGROUND TYPE

    useEffect(() => {
        const header = document.getElementById("header");
        const headerBlock = document.querySelector('header');
        const menuDropDownBtn = document.querySelector('.menu-drop-down-btn');
        const headerLogoText = document.querySelector('.header-logo-text');
        const navActive1 = document.querySelector('.nav-1.active');
        const navActive4 = document.querySelector('.nav-4.active');
        const navActive5 = document.querySelector('.nav-5.active');
        const subNavColActive1 = document.querySelector('.sub-nav-col-1.active');
        const subNavColActive2 = document.querySelector('.sub-nav-col-2.active');
        const subNavColActive3 = document.querySelector('.sub-nav-col-3.active');
        const subNavColActive4 = document.querySelector('.sub-nav-col-4.active');
        const subNavColActive5 = document.querySelector('.sub-nav-col-5.active');
        const subNavColActive6 = document.querySelector('.sub-nav-col-6.active');
        const subNavEventActive1 = document.querySelector('.sub-nav-event-1.active');
        const subNavEventActive2 = document.querySelector('.sub-nav-event-2.active');
        const subNavEventActive3 = document.querySelector('.sub-nav-event-3.active');

        const newMenuLable1 = menuLabels[0];
        const newMenuLable2 = menuLabels[1];
        const newMenuLable3 = menuLabels[2];
        const newMenuLable4 = menuLabels[3];
        const newMenuLable5 = menuLabels[4];

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
        } else if (subNavColActive6){
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
    });

    // TEST CODE TO SET HEADER STYLE !!!!!!!!!!!!

    // PAGE SCROLLING LANDING
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
    // PAGE SCROLLING LANDING

    // PAGE SCROLLING PAGES
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
        } else {
            headerBlock.classList.remove('reduced');
        }  
    };
    // PAGE SCROLLING PAGES


    // DROP DOWN MENU BUTTON
    const menuOpen = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        const dropDownMenuBtn = document.querySelector('.menu-drop-down-btn');
        const navLink1 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-1');
        const navLink2 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-2');
        const navLink3 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-3');
        const navLink4 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-4');
        const navLink5 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-5');
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
        subMenu2.classList.remove('on2');
        subMenu2.classList.remove('on1');
        subMenu1.classList.remove('on2');
        subMenu1.classList.remove('on1');


        navLink2.classList.remove('on1');
        navLink3.classList.remove('on1');

        dropDownMenuBtn.classList.toggle('close');
    };
    const menuClose = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        const dropDownMenuBtn = document.querySelector('.menu-drop-down-btn');
        const navLinkAll = document.querySelector('.drop-down-menu .menu ul .nav-link');
        const navLink1 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-1');
        const navLink2 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-2');
        const navLink3 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-3');
        const navLink4 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-4');
        const navLink5 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-5');
        const subMenu1 = document.querySelector('.drop-down-menu .menu ul .sub-menu-collection');
        const subMenu2 = document.querySelector('.drop-down-menu .menu ul .sub-menu-events');
        navLinkAll.classList.remove('show');
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
    
    // DROP DOWN MENU BUTTON


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
    const menuUnderlineRemove = () => {
        document.querySelector('.drop-down-menu .menu ul .nav-link.nav-1').classList.remove('on');
        document.querySelector('.drop-down-menu .menu ul .nav-link.nav-2').classList.remove('on');
        document.querySelector('.drop-down-menu .menu ul .nav-link.nav-3').classList.remove('on');
        document.querySelector('.drop-down-menu .menu ul .nav-link.nav-4').classList.remove('on');
        document.querySelector('.drop-down-menu .menu ul .nav-link.nav-5').classList.remove('on');
    };
    const menuStyle1 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.remove('background-2');
        dropDownMenu.classList.remove('background-3');
        dropDownMenu.classList.remove('background-4');
        dropDownMenu.classList.remove('background-5');
        dropDownMenu.classList.add('background-1');
    };
    const menuStyle2 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.remove('background-1');
        dropDownMenu.classList.remove('background-3');
        dropDownMenu.classList.remove('background-4');
        dropDownMenu.classList.remove('background-5');
        dropDownMenu.classList.add('background-2');
    };
    const menuStyle3 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.remove('background-1');
        dropDownMenu.classList.remove('background-2');
        dropDownMenu.classList.remove('background-4');
        dropDownMenu.classList.remove('background-5');
        dropDownMenu.classList.add('background-3');
    };
    const menuStyle4 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.remove('background-1');
        dropDownMenu.classList.remove('background-2');
        dropDownMenu.classList.remove('background-3');
        dropDownMenu.classList.remove('background-5');
        dropDownMenu.classList.add('background-4');
    };
    const menuStyle5 = () => {
        const dropDownMenu = document.querySelector('.drop-down-menu');
        dropDownMenu.classList.remove('background-1');
        dropDownMenu.classList.remove('background-2');
        dropDownMenu.classList.remove('background-3');
        dropDownMenu.classList.remove('background-4');
        dropDownMenu.classList.add('background-5');
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
    const collectionMenuOn = () => {
        const collectionMenu = document.querySelector('.collection-menu');
        collectionMenu.classList.add('on'); 
    };
    const collectionMenuOff = () => {
        const collectionMenu = document.querySelector('.collection-menu');
        const collectionMenuHeader = document.querySelector('.nav-2');
        collectionMenu.classList.remove('on');
        collectionMenuHeader.classList.remove('on1');
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
    const eventsMenuOn = () => {
        const eventsMenu = document.querySelector('.events-menu');
        eventsMenu.classList.add('on'); 
    };
    const eventsMenuOff = () => {
        const eventsMenu = document.querySelector('.events-menu');
        const eventsMenuHeader = document.querySelector('.nav-3');
        eventsMenu.classList.remove('on');
        eventsMenuHeader.classList.remove('on1');
    };
    // DROP DOWN SUB-MENU COLLECTION


    // MENU APPREANCE UPDATE
    const headerAppearanceLight = () => {
        const menuDropDownBtn = document.querySelector('.menu-drop-down-btn');
        const headerLogoText = document.querySelector('.header-logo-text');
        const headerBlock = document.querySelector('header');
        headerBlock.classList.add('bg-color-on');
        menuDropDownBtn.classList.add('light');
        headerLogoText.classList.add('light');
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });
    }
    const headerAppearanceDark = () => {
        const menuDropDownBtn = document.querySelector('.menu-drop-down-btn');
        const headerLogoText = document.querySelector('.header-logo-text');
        const headerBlock = document.querySelector('header');
        headerBlock.classList.remove('bg-color-on');
        menuDropDownBtn.classList.remove('light');
        headerLogoText.classList.remove('light');
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });
    }
    // MENU APPREANCE UPDATE


    // MENU LABELS
    const menuLabelText = menuLabel;
    const menuLabelReset = () => {
        setMenuLabel(null);
        const header = document.getElementById("header");
        header.classList.remove("dark");
    }
    const menuLabel1on = () => {
        const navLink1 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-1');
        const newMenuLable = menuLabels[0]; 
        setMenuLabel(newMenuLable);
        navLink1.classList.add('on');
        }
    const menuLabel2on = () => {
        const newMenuLable = menuLabels[1]; 
        setMenuLabel(newMenuLable);
        }
    const menuLabel3on = () => {
        const newMenuLable = menuLabels[2];
        setMenuLabel(newMenuLable);
        }
    const menuLabel4on = () => {
        const newMenuLable = menuLabels[3]; 
        setMenuLabel(newMenuLable);
        }
    const menuLabel5on = () => {
        const newMenuLable = menuLabels[4]; 
        setMenuLabel(newMenuLable);
        }
    // MENU LABELS


    // SCALE
    const scaleOn = () => {
        document.querySelector('.bg-scale').classList.toggle('on') ;
     }
     // SCALE



    return (
        <header id='header' className='header' /*style={{background: this.state.header}}*/>
            <div className='scale-button' onClick={scaleOn}></div>
            <div className='header-container'>
                <div className='header-logo'>
                    <NavLink to="/" onClick={() => {  headerAppearanceDark(); menuLabelReset(); collectionMenuOff(); eventsMenuOff(); }}>
                        <picture>
                            <img src={logo} height='100%' width='100%' alt='Mark Belford Logo' className='dark-logo' />
                            <img src={logoLight} height='100%' width='100%' alt='Mark Belford Logo' className='light-logo' />
                            <div className='header-logo-text'>Couture</div>
                        </picture>
                    </NavLink>
                </div>
                <div value={menuLabel /*menuLabelColor*/} className='menu-label'>{menuLabelText}</div>
                <div className='menu-drop-down-btn' id='new-event' onClick={menuOpen}>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <nav className='collection-menu'>
                    <NavLink to="/Butterfield8" className="collection-menu-link collection-menu-1" onClick={() => {   headerAppearanceLight(); menuLabel2on(); menuClose(); collectionMenuOn(); }} >the Butterfield 8</NavLink>
                    <NavLink to="/AcademyGown" className="collection-menu-link collection-menu-2" onClick={() => {  headerAppearanceLight(); menuLabel2on(); menuClose(); collectionMenuOn(); }} >the Academy Gown</NavLink>
                    <NavLink to="/BurmeseRuby" className="collection-menu-link collection-menu-4" onClick={() => {  headerAppearanceLight(); menuLabel2on(); menuClose(); collectionMenuOn(); }} >the Burmese Ruby</NavLink>
                    <NavLink to="/CoronationGown" className="collection-menu-link collection-menu-5" onClick={() => {  headerAppearanceLight(); menuLabel2on(); menuClose(); collectionMenuOn(); }} >the Coronation Gown</NavLink>
                    <NavLink to="/ParkAvenue" className="collection-menu-link collection-menu-6" onClick={() => {  headerAppearanceLight(); menuLabel2on(); menuClose(); collectionMenuOn(); }} >the Park Avenue</NavLink>
                    <NavLink to="/HotelCalifornia" className="collection-menu-link collection-menu-7" onClick={() => {  headerAppearanceLight(); menuLabel2on(); menuClose(); collectionMenuOn(); }} >Hotel California</NavLink>
                </nav>
                <nav className='events-menu'>
                    <NavLink to="/SwedishPrince" className="events-menu-link events-menu-1" onClick={() => {  headerAppearanceLight(); menuLabel3on(); menuClose(); eventsMenuOn(); }} >the Swedish Prince<br/>at Dior</NavLink>
                    <NavLink to="/CAFAawards" className="events-menu-link events-menu-1" onClick={() => {  headerAppearanceLight(); menuLabel3on(); menuClose(); eventsMenuOn(); }} >the CAFA Awards</NavLink>
                    <NavLink to="/FairmontFashion" className="events-menu-link events-menu-1" onClick={() => {  headerAppearanceLight(); menuLabel3on(); menuClose(); eventsMenuOn(); }} >Fairmont Fashion</NavLink>
                </nav>
                <nav className='drop-down-menu'>
                    <div className='menu'>
                        <div className='row'>
                            <div className='col-md-4 col-lg-3 col-xxl-2 col-xxxxxl-1'></div>
                            <div className='col-md-8 col-lg-9 col-xxl-8 col-xxxxxl-11'>
                                <ul>
                                    <NavLink to="Mark" className="nav-link nav-1" onClick={() => {  subMenuCollectionClose(); subMenuEventsClose(); headerAppearanceLight(); menuLabel1on(); menuClose(); menuBG1(); collectionMenuOff(); eventsMenuOff(); }} onMouseEnter={() => { menuUnderline1(); menuStyle1(); }} onMouseLeave={menuUnderlineRemove} >mark</NavLink>
                                    <Link to="#" className="nav-link nav-2" onClick={() => { menuUnderline2(); menuStyle2(); subMenuCollectionOpen(); }} onMouseEnter={() => { menuUnderline2(); menuStyle2(); }} onMouseLeave={menuUnderlineRemove} >collection</Link>
                                    <div className='sub-menu sub-menu-collection'>
                                        <NavLink to="Butterfield8" className="sub-nav-link sub-nav-col-1" onClick={() => {  headerAppearanceLight(); menuLabel2on(); menuClose(); menuBG2(); collectionMenuOn(); eventsMenuOff(); subMenuEventsClose(); }} >the Butterfield 8</NavLink>
                                        <NavLink to="AcademyGown" className="sub-nav-link sub-nav-col-2" onClick={() => {  headerAppearanceLight(); menuLabel2on(); menuClose(); menuBG2(); collectionMenuOn(); eventsMenuOff(); subMenuEventsClose(); }} >the Academy Gown</NavLink>
                                        <NavLink to="BurmeseRuby" className="sub-nav-link sub-nav-col-3" onClick={() => {  headerAppearanceLight(); menuLabel2on(); menuClose(); menuBG2(); collectionMenuOn(); eventsMenuOff(); subMenuEventsClose(); }} >the Burmese Ruby</NavLink>
                                        <NavLink to="CoronationGown" className="sub-nav-link sub-nav-col-4" onClick={() => {  headerAppearanceLight(); menuLabel2on(); menuClose(); menuBG2(); collectionMenuOn(); eventsMenuOff(); subMenuEventsClose(); }} >the Coronation Gown</NavLink>
                                        <NavLink to="ParkAvenue" className="sub-nav-link sub-nav-col-5" onClick={() => {  headerAppearanceLight(); menuLabel2on(); menuClose(); menuBG2(); collectionMenuOn(); eventsMenuOff(); subMenuEventsClose(); }} >the Park Avenue</NavLink>
                                        <NavLink to="HotelCalifornia" className="sub-nav-link sub-nav-col-6" onClick={() => {  headerAppearanceLight(); menuLabel2on(); menuClose(); menuBG2(); collectionMenuOn(); eventsMenuOff(); subMenuEventsClose(); }} >Hotel California</NavLink>
                                    </div>
                                    <Link to="#" className="nav-link nav-3" onClick={() => { menuUnderline3(); menuStyle3(); subMenuEventsOpen(); }} onMouseEnter={() => { menuUnderline3(); menuStyle3(); }} onMouseLeave={menuUnderlineRemove} >events</Link>
                                    <div className='sub-menu sub-menu-events'>
                                        <NavLink to="SwedishPrince" className="sub-nav-link sub-nav-event-1" onClick={() => { subMenuCollectionClose(); headerAppearanceLight(); menuLabel3on(); menuClose(); menuBG3(); eventsMenuOn(); collectionMenuOff(); }} >the Swedish Prince at Dior</NavLink>
                                        <NavLink to="CAFAawards" className="sub-nav-link sub-nav-event-2" onClick={() => { subMenuCollectionClose(); headerAppearanceLight(); menuLabel3on(); menuClose(); menuBG3(); eventsMenuOn(); collectionMenuOff();  }} >the CAFA Awards</NavLink>
                                        <NavLink to="FairmontFashion" className="sub-nav-link sub-nav-event-3" onClick={() => { subMenuCollectionClose(); headerAppearanceLight(); menuLabel3on(); menuClose(); menuBG3(); eventsMenuOn(); collectionMenuOff();  }} >Fairmont Fashion</NavLink>
                                    </div>
                                    <NavLink to="/Publications" className="nav-link nav-4" onClick={() => { subMenuEventsClose(); subMenuCollectionClose(); headerAppearanceLight(); menuLabel4on(); menuClose(); menuBG4(); collectionMenuOff(); eventsMenuOff(); }} onMouseEnter={() => { menuUnderline4(); menuStyle4(); }} onMouseLeave={menuUnderlineRemove} >publications</NavLink>
                                    <NavLink to="/Contact" className="nav-link nav-5 last" onClick={() => { subMenuEventsClose(); subMenuCollectionClose(); headerAppearanceLight(); menuLabel5on(); menuClose(); menuBG5(); collectionMenuOff(); eventsMenuOff(); }} onMouseEnter={() => { menuUnderline5(); menuStyle5(); }} onMouseLeave={menuUnderlineRemove} >contact</NavLink>
                                    {/* Look into the 'activeStyle' issue
                                    <NavLink to="/Contact" className="nav-link nav-4 last" onClick={() => { menuClose(); lightHeader();}} activeStyle={{ color:'red' }}>contact</NavLink>
                                    */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;