import { useEffect } from 'react';
import { NavLink } from '../header/HeaderElements';
import { headerAppearanceLight } from '../header/headerAppearance';
import LandingAni from '../components/landing/landingAni.js';
import FooterBanner from '../footer/FooterBanner';
import showHiddenText from '../components/ShowText';
import removeHiddenText from '../components/RemoveText';
import { ScrollToTop } from '../components/scrollToTop';
import styles from '../styles/homeStyles.module.scss';
import bannerImage from '../images/home/mark-belford-home-3.webp';
import landingTextImage from '../images/elements/Gorgeous.svg';
import landingClickText from '../images/elements/landing-click.svg';

export default function MarkBelfordWebsite({menuLabel2on, menuLabel6on}){
    useEffect(() => {
        ScrollToTop();
    }, []);
    return(
        <main>
            <LandingAni />
            <section className={`${styles.landingPageTop} ${styles.landingBackground}`}>
                <div className={styles.landingPageTopInner}>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className={`row ${styles.landingPageTopCallOut}`}>
                                <div className={`col-sm-7 col-md-8 col-xl-7 col-xxl-6 col-xxxl-5 landingTextImg ${styles.landingTextImg}`}>
                                    <picture>
                                        <img src={landingTextImage} alt='text saying You are Gorgeous' height='100%' width='100%' />
                                    </picture>
                                </div>
                                <div className='row'>
                                    <div className='col-md-1'></div>
                                    <div className='col-md-9 relative'>
                                        <NavLink to="/Contact" onClick={() => { headerAppearanceLight(); }}>
                                            <div className={`col-sm-9 col-md-8 col-xl-7 col-xxl-6 col-xxxl-5 landingClickTextImg ${styles.landingClickTextImg}`}>
                                                <picture>
                                                    <img src={landingClickText} alt='contact link text saying click here ' height='100%' width='100%' />
                                                </picture>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-marker'></div>
            </section>
            <section className={`content large-adjust ${styles.homeSectionBTF1}`}>
                <div className='row'>
                    <div className='col-lg-3 col-xl-4 col-xxl-5 '></div>
                    <div className='col-md-8 col-lg-9 col-xl-8 col-xxl-7'>
                        <div className={styles.belowTheFoldHeader}>
                            Draped in confidence.<br/>
                            Styled in Authenticity.
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-lg-7 col-xl-6 col-xxl-7 lrg-1'></div>
                    <div className='col-md-5 col-xl-4 col-xxl-4 col-xxxl-3'>
                        <h1 className={styles.callOutTxt}>Mark Bellford's pret-a-porter capsule collection is couture's rebellious little sister-flawlessly tailored, endlessly wearable, and dripping in quiet luxury.</h1>
                    </div>
                    <div className='col-xl-2 col-xxl-3 lrg-1'></div>
                </div>
            </section>
            <section className='content middle-big-pad'>
                <div className='row'>
                    <div className={`col-md-6 col-lg-8 col-xxl-6 ${styles.fullBleedFlushLeft}`}>
                        <NavLink to="/ParkAvenue" onClick={() => { headerAppearanceLight(); }}>
                        <figure>
                            <picture className='image'>
                                <source media='(max-width:500px)' srcSet={require('../images/home/mark-belford-black-lace-2-xs.webp')} />
                                <source media='(max-width:824px)' srcSet={require('../images/home/mark-belford-black-lace-2-sm.webp')} />
                                <source srcSet={require('../images/home/mark-belford-black-lace-2.webp')} /> 
                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing Mark Belfords black lace Park Avenue Dress' height='412' width='567' loading='lazy' />
                            </picture>
                            <div className={styles.imageLinkCaption}>
                                <div className={styles.line1}>
                                view the
                                </div>
                                <div className={styles.line2}>
                                Park Avenue
                                </div>
                                <div className={styles.line3}>
                                Atelier
                                </div>
                            </div>
                        </figure>
                        </NavLink>
                    </div>
                    <div className='col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-md-8 col-lg-12 col-xl-10 col-xxl-8'>
                                <div className='vertical-center-block'>
                                <h2 className='hot-pink'>Turning inner<br/>beauty into a<br/>full-blown<br/>power move.</h2>
                                <div>
                                <picture className='image'>
                                <source srcSet={require('../images/home/mark-belford-black-lace-2-slice.webp')} /> 
                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing Mark Belfords black lace Park Avenue Dress' height='412' width='567' loading='lazy' />
                            </picture>
                                </div>
                                <p>The Mark Belford Couture label was born in Toronto in 2002, as if the universe just knew it needed something truly exceptional. Inspired by the polished yet playful spirit of Edith Head's designs, Mark's sketches immediately became the blueprint for the Studio, setting the stage for everything that followed.</p>
                                <div className='e-comerce-link-2' onMouseEnter={() => {showHiddenText();}} onMouseLeave={() => {removeHiddenText();}} >
                                    <a href='https://www.markbelfordcouture.com/' target='blank' >Shop<br/>Mark Belford<br/>Couture</a>
                                    <div className='hidden-text-mask'></div>
                                    <div className='hidden-text'>
                                        You're<br/>Worth It!
                                    </div>
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
                                <NavLink to="/Butterfield8" onClick={() => { headerAppearanceLight(); }}>
                                <figure>
                                    <picture className='image'>
                                        <source media='(max-width:500px)' srcSet={require('../images/butterfield8/mark-belford-butterfield8-xs-1.webp')} />
                                        <source srcSet={require('../images/butterfield8/mark-belford-butterfield8-sm-1.webp')} />
                                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing Mark Belfords black lace Park Avenue Dress' height='100%' width='100%' loading='lazy' />
                                    </picture>
                                    <div className={styles.imageLinkCaption}>
                                        <div className={styles.line1}>
                                        view the
                                        </div>
                                        <div className={styles.line2}>
                                        Butterfield 8
                                        </div>
                                        <div className={styles.line3}>
                                        Atelier
                                        </div>
                                    </div>
                                </figure>
                                </NavLink>
                            </div>
                            <div className='row'>
                                <div className='col-xs-12 col-md-6 col-xxl-9'>
                                    <h2 style={{color:'#fd1d86', paddingTop:6}}>Impeccable<br/>tailoring and<br/>architectural<br/>hand draping</h2>
                                </div>
                            </div>
                            <div className='col-md-8 col-lg-9 col-xxxl-6'>
                                <NavLink to="/BurmeseRuby" onClick={() => { headerAppearanceLight(); }}>
                                <figure>
                                    <picture className='image'>
                                        <source media='(max-width:500px)' srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-3-xs.webp')} />
                                        <source srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-3-lg.webp')} />
                                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing Mark Belfords black lace Park Avenue Dress' height='100%' width='100%' loading='lazy' />
                                    </picture>
                                    <div className={styles.imageLinkCaption}>
                                        <div className={styles.line1}>
                                        view the
                                        </div>
                                        <div className={styles.line2}>
                                        Burmese Ruby
                                        </div>
                                        <div className={styles.line3}>
                                        Atelier
                                        </div>
                                    </div>
                                </figure>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 order-xs-2'>
                        <div className='row justify-content-end-lg'>
                            <div className='spec-text-3'>The debut<br/>Couture<br/>Red Carpet<br/>Collection</div>
                            <p>was practically discovered by Giorgio Beverly Hills (we'll let that speak for itself) and launched at The Academy Awards-because why not start with a little bit of drama? What followed was nothing short of inevitable: a legacy of impeccable taste, high-octane glamour, and a touch of 'where's this been all my life?' elegance. Mark's designs don't just follow trends-they define them, effortlessly blending classic sophistication with a bold, fresh take that leaves the competition wondering why they decided to slap their label on a dress made in a factory far, far away ... but, hey, we're not judging.<br/>
                            <br/>
                            </p>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8'>
                                <NavLink to="/AcademyGown" onClick={() => { headerAppearanceLight(); }}>
                                <figure>
                                    <picture className='image'>
                                        <source media='(max-width:500px)' srcSet={require('../images/academy-gown/mark-belford-academy-gown-home-sm.webp')} />
                                        <source srcSet={require('../images/academy-gown/mark-belford-academy-gown-home.webp')} />
                                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing Mark Belfords black lace Park Avenue Dress' height='100%' width='100%' loading='lazy' />
                                    </picture>
                                    <div className={styles.imageLinkCaption}>
                                        <div className={styles.line1}>
                                        view the
                                        </div>
                                        <div className={styles.line2}>
                                        Academy Gown
                                        </div>
                                        <div className={styles.line3}>
                                        Atelier
                                        </div>
                                    </div>
                                </figure>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterBanner bannerImage={bannerImage} />
        </main>
    );
};