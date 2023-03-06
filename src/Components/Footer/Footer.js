import React from 'react';
import './Footer.css';
import logo from '../../images/mark-belford-logo-dark.svg'

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='footer-container'>
                    <div className='footer-top'>
                        <div className='footer-logo'>
                            <picture>
                                <img src={logo} height='100%' width='100%' alt='Mark Belford Logo' />
                                <div className='footer-logo-text'>Haute Couture</div>
                            </picture>
                        </div>
                    </div>
                    <div className='footer-bottom'>
                        <div className='bottom-left'>
                            Mark Belford HAUTE COUTURE © 2023
                        </div>
                        <div className='bottom-right'></div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;