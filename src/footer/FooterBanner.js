import { NavLink } from 'react-router-dom';
import styles from '../styles/FooterBanner.module.scss';
import clickStart from '../images/elements/lets-get-started.svg';

export default function FooterBanner(props){
    return (
        <section className={`content ${styles.footerBanner}`}>
            <div className={`row ${styles.contentRight}`}>
                <div className={`col-sm-6 col-md-5 col-lg-4 col-xxxl-3 ${styles.footerImageTextBlock}`}>
                    <div className={`white-text-2 ${styles.footerBannerText}`}>Dress the<br/>way stories<br/>are told</div>
                    <div className='footer-banner-click-text'>
                        <NavLink to="/Contact">
                        <picture>
                            <source srcSet={clickStart} /> 
                            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='link text' height='100%' width='100%' loading='lazy' />
                        </picture>
                        </NavLink>
                    </div>
                </div>
                <div className='col-md-1 col-lg-2 col-xxxl-3'></div>
                <div className='col-sm-6'>
                    <picture className={styles.bannerImgRight}>
                        <source srcSet={props.bannerImage} />
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing Mark Belfords silver Academy Gown' height='100%' width='100%' loading='lazy' />
                    </picture>
                </div>
            </div>
        </section>
    )
}