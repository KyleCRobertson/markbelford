import React from 'react';
import './Footer.css';
import logo from '../../images/mark-belford-logo-dark.svg';
import facebookLogo from '../../images/facebook-icon-black-circle.svg';
import instagramLogo from '../../images/instagram-icon-black-circle.svg';

const Footer = () => {
    return(
        <footer>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='row content-space-between'>
                        
                            <div className='footer-logo'>
                                <picture>
                                    <img src={logo} alt='Mark Belford Logo' height='100%' width='100%' />
                                    <div className='footer-logo-text'>Couture</div>
                                </picture>
                            </div>
                       
                        <div className='social-media-links'>
                            <div className='social-media-link facebook-logo'>
                                <a href='https://www.facebook.com/mark.belford' target='blank' >
                                <picture>
                                    <img src={facebookLogo} alt='Facebook Logo' height='100%' width='100%' />
                                </picture>
                                </a>
                            </div>
                            <div className='social-media-link facebook-logo'>
                                <a href='https://www.instagram.com/markbelfordofficial/' target='blank' >
                                <picture>
                                    <img src={instagramLogo} alt='Facebook Logo' height='100%' width='100%' />
                                </picture>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='bottom-left'>
                        Mark Belford HAUTE COUTURE © 2023
                    </div>
                    <div className='bottom-right'>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;