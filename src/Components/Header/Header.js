import React from 'react';
import logo from '../../images/mark-belford-logo-dark.svg'
import './Header.css';

class Header extends React.Component{
    render(){
        return (
            <header>
                <div className='header-container'>
                    <div className='header-logo'>
                        <picture>
                            <img src={logo} height='100%' width='100%' alt='Mark Belford Logo' />
                            <div className='header-logo-text'>Haute Couture</div>
                        </picture>
                    </div>
                    <div className='menu'>
                        <ul>
                            <li className='menu-item menu-item-1'><a href='AboutMark'>About Mark</a></li>
                            <li className='menu-item menu-item-2'><a href='Work'>Work</a></li>
                            <li className='menu-item menu-item-3'><a href='Press'>Press</a></li>
                            <li className='menu-item menu-item-4 last'><a href='Contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;