import React from 'react';
import { NavLink } from './HeaderElements';
import logo from '../../images/mark-belford-logo-dark.svg'
import './Header.css';



class Header extends React.Component{
    
    render(){

        
        const menuOpen = () => {
            const dropDownMenu = document.querySelector('.drop-down-menu');
            const dropDownMenuBtn = document.querySelector('.menu-drop-down-btn');
            dropDownMenu.classList.toggle('on');
            dropDownMenuBtn.classList.toggle('close');

            dropDownMenu.classList.add('background-1');
        };
        const menuClose = () => {
            const dropDownMenu = document.querySelector('.drop-down-menu');
            const dropDownMenuBtn = document.querySelector('.menu-drop-down-btn');
            dropDownMenu.classList.remove('on');
            dropDownMenuBtn.classList.remove('close');
        };
        const menuStyle1 = () => {
            const dropDownMenu = document.querySelector('.drop-down-menu');
            dropDownMenu.classList.add('background-1');
        }
        const menuStyle2 = () => {
            const dropDownMenu = document.querySelector('.drop-down-menu');
            dropDownMenu.classList.add('background-2');
        }
        const menuStyle3 = () => {
            const dropDownMenu = document.querySelector('.drop-down-menu');
            dropDownMenu.classList.add('background-3');
        }
        const menuStyle4 = () => {
            const dropDownMenu = document.querySelector('.drop-down-menu');
            dropDownMenu.classList.add('background-4');
        }
        

        return (
            <header>
                
                <div className='header-container'>
                    <div className='header-logo'>
                        <NavLink to="/">
                        <picture>
                            <img src={logo} height='100%' width='100%' alt='Mark Belford Logo' />
                            <div className='header-logo-text'>Haute Couture</div>
                        </picture>
                        </NavLink>
                    </div>
                    <div className='menu-drop-down-btn' id='new-event' onClick={menuOpen}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>

                    <div className='drop-down-menu'>
                        <div className='menu'>
                            <ul>
                                <NavLink to="/MarkBelford" className="nav-link nav-1" onClick={menuClose} onMouseEnter={menuStyle1} onMouseLeave={menuStyle1} activeStyle>mark belford</NavLink>
                                <NavLink to="/Work" className="nav-link nav-2" onClick={menuClose} onMouseEnter={menuStyle2} onMouseLeave={menuStyle2} activeStyle>work</NavLink>
                                <NavLink to="/Press" className="nav-link nav-34" onClick={menuClose} onMouseEnter={menuStyle3} onMouseLeave={menuStyle3} activeStyle>press</NavLink>
                                <NavLink to="/Contact" className="nav-link nav-4 last" onClick={menuClose} onMouseEnter={menuStyle4} onMouseLeave={menuStyle4} activeStyle>contact</NavLink>
                            </ul>
                        </div>
                    </div>

                </div>
            </header>
        )
    }
}

export default Header;