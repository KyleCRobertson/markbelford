import React, { useEffect } from 'react';
import styles from '../styles/homeStyles.module.css';
import imageSmall from '../../images/mark-belford-butterfield8-Lrg-2.webp';
import imageMedium from '../../images/mark-belford-butterfield8-Lrg-2.webp';
import imageLarge from '../../images/mark-belford-butterfield8-Lrg-1.webp';
import imageXLarge from '../../images/mark-belford-butterfield8-Lrg-1.webp';

function MarkBelfordWebsite() {


// PAGE SCROLLING HIDES LANDING TEXT
useEffect(() => {   
    window.addEventListener("scroll", hideLandingText);
    return () => window.removeEventListener("scroll", hideLandingText);
}, []);

const hideLandingText = () => {
    const landingText = document.querySelector('.landing-text');
    
    const getOffset = (element) => {
        const rect = element?.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    };
    const heightToHideFrom = getOffset(document.querySelector('.content'));
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
        landingText.classList.add('off');
    } else {
        landingText.classList.remove('off');
    }  
};
// PAGE SCROLLING


return (
<main>
    <section className={`content ${styles.landingPageTop} ${styles.landingBackground}`}>
        <div className={styles.landingPageTopInner}>
            <div className='row'>
                <div className={`col-sm-6 col-xl-7 col-xxl-5 landing-text ${styles.landingPageTopTextBlock}`}>
                    <h1 className={`${styles.darkBackground} ${styles.home}`}>Mark Belford Dazzles Film, Celebrities, and Socialites Where Style Meets the Silver Screen.</h1>
                </div>
            </div>
        </div>
        <div className='header-marker'></div>
    </section>
    <section className={`content large-adjust ${styles.homeSectionBTF1}`}>
        <div className={styles.belowTheFoldHeader}>
            <h1><div className={styles.adj1}>An</div><div className={styles.adj2}>Expression</div><div className={styles.adj3}>of</div><div className={styles.adj4}>Beauty</div></h1>
        </div>
        <div className='row'>
            <div className='col-xl-2 col-xxl-3 lrg-1'></div>
            <div className={`col-xl-8 col-xxl-6 ${styles.contentTopParagraph}`}>
                <h6>"MARK BELFORD’S PRÊT-À-PORTER CAPSULE COLLECTION PAYS HOMAGE TO THE COUTURE PORTFOLIO BY FEATURING QUALITY FABRICS, STRUCTURE AND CONTEMPORARY APPROACHABILITY"</h6>
            </div>
            <div className='col-xl-2 col-xxl-3 lrg-1'></div>
        </div>
    </section>
    <section className='content middle-big-pad'>
        <div className='row'>
            <div className={`col-md-6 col-lg-8 col-xxl-6 ${styles.fullBleedFlushLeft}`}>
                <figure>
                    <picture className='image'>
                        <img src={require('../../images/mark-belford-black-lace-2.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                    </picture>
                </figure>
            </div>
            <div className='col-md-11 col-lg-5 col-xl-6'>
                <div className='row'>
                    <div className='col-xxl-2'></div>
                    <div className='col-sm-10 col-md-12 col-xl-10 col-xxl-8'>
                        <div className='vertical-center-block'>
                        <h2 className='call-out-text'>Every<br/>Mark Belford<br/>design is the<br/>ultimate expression<br/>of <span className='no-wrap'>a client's</span> inner beauty</h2>
                        <p>Mark Belford Couture was founded in Toronto, Canada in 2000 by Mark Belford and discovered by Giorgio Beverly Hills with his first capsule Couture Collection that year, officially launching at Giorgio’s for The Academy Awards.</p>
                        <div className='e-comerce-link-2'>
                            <a href='https://www.markbelfordcouture.com/' target='blank' >Own a piece of the collection</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='content middle-big-pad'>
        <div className='row'>
            <div className='col-lg-6 order-lg-2 order-xs-1'>
                <div className='row'>
                    <div className='col-md-10 col-lg-12'>
                        <picture className='image'>
                            <img srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w, ${imageXLarge} 1980w`} src={imageXLarge} alt="My Image" height='auto' width='100%' />
                        </picture>
                    </div>
                    <div className='row'>
                        <div className='col-xs-12 col-md-6 col-xxl-9'>
                            <br/>
                            <h2 style={{color:'#fd1d86'}}>Impeccable<br/>Tailoring and <br/>Architectural<br/>Hand Draping</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 order-lg-1 order-xs-2'>
                <div className='row justify-content-end-lg'>
                    <p className='lrg'>
                    Mark Belford is instantly recognized by the impeccable tailoring and the architectural hand draping that are the cornerstones of his creative process. Inspired by his passion for Film, Theatre, Architecture, and a home surrounded in love and music, Mark’s vision expands into multiple artistic endeavors, including his work in film and television. The Red Carpet at the Oscar’s, The Emmy’s and Solo Exhibits at the most prestigious museums, The Royal Ontario Museum Toronto, and The Moca Gala Los Angeles.<br/>
                    <br/>
                    </p>
                    <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8'>
                        <picture className='image'>
                            <img src={require('../../images/mark-belford-silver-dress-1.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                        </picture>
                    </div>
                    <p className='sml'>
                    <br/>
                    <br/>
                    Mark Belford is instantly recognized by the impeccable tailoring and the architectural hand draping that are the cornerstones of his creative process. Inspired by his passion for Film, Theatre, Architecture, and a home surrounded in love and music, Mark’s vision expands into multiple artistic endeavors, including his work in film and television. The Red Carpet at the Oscar’s, The Emmy’s and Solo Exhibits at the most prestigious museums, The Royal Ontario Museum Toronto, and The Moca Gala Los Angeles.<br/>
                    <br/>
                    <br/>
                    </p>  
                </div>
            </div>
        </div>
    </section>
</main>
);
};

export default MarkBelfordWebsite;