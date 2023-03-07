import React from 'react';
import { NavLink } from './HeaderElements';
import logo from '../../images/mark-belford-logo-dark.svg'
import './Header.css';

class Header extends React.Component{
    render(){
        return (
            <header>
                <div className='header-container'>
                    <div className='header-logo'>
                        <a href='/'>
                        <picture>
                            <img src={logo} height='100%' width='100%' alt='Mark Belford Logo' />
                            <div className='header-logo-text'>Haute Couture</div>
                        </picture>
                        </a>
                    </div>
                    <div className='menu'>
                        <ul>
                            <NavLink to="/AboutMark" className="nav-link" activeStyle>About Mark</NavLink>
                            <NavLink to="/Work" className="nav-link" activeStyle>Work</NavLink>
                            <NavLink to="/Press" className="nav-link" activeStyle>Press</NavLink>
                            <NavLink to="/Contact" className="nav-link last" activeStyle>Contactz</NavLink>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;