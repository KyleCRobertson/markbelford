import { NavLink } from 'react-router-dom';
import styles from '../styles/Footer.module.scss';
import logo from '../images/mark-belford-logo-dark.svg';
import facebookLogo from '../images/elements/facebook-icon-black-circle.svg';
import instagramLogo from '../images/elements/instagram-icon-black-circle.svg';
import twitterLogo from '../images/elements/twitter-icon-black-circle.svg';
import linkdenLogo from '../images/elements/linkden-icon-black-circle.svg';

export default function Footer({menuLabelReset}){
    return(
        <footer>
            <div className={styles.footerContainer}>
                <div className='row content-space-between'>
                    <div className={styles.footerLogo}>
                        <NavLink to="/" onClick={() => { menuLabelReset(); }}>
                        <picture>
                            <img src={logo} alt='Mark Belford Logo' height='100%' width='100%' />
                            <div className={styles.footerLogoText}>Couture</div>
                        </picture>
                        </NavLink>
                    </div>
                    <div className={styles.socialMediaLinks}>
                        <div className={styles.socialMediaLink}>
                            <a href='https://www.facebook.com/mark.belford' target='blank' >
                            <picture>
                                <img src={facebookLogo} alt='Facebook Logo' height='100%' width='100%' />
                            </picture>
                            </a>
                        </div>
                        <div className={styles.socialMediaLink}>
                            <a href='https://www.instagram.com/markbelfordofficial' target='blank' >
                            <picture>
                                <img src={instagramLogo} alt='Facebook Logo' height='100%' width='100%' />
                            </picture>
                            </a>
                        </div>
                        <div className={styles.socialMediaLink}>
                            <a href='https://www.instagram.com/markbelfordofficial' target='blank' >
                            <picture>
                                <img src={twitterLogo} alt='Facebook Logo' height='100%' width='100%' />
                            </picture>
                            </a>
                        </div>
                        <div className={styles.socialMediaLink}>
                            <a href='https://www.linkedin.com/in/markbelford' target='blank' >
                            <picture>
                                <img src={linkdenLogo} alt='Facebook Logo' height='100%' width='100%' />
                            </picture>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    Mark Belford HAUTE COUTURE © 2025
                </div>
            </div>
        </footer>
    );
};