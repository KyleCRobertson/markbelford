import { useEffect } from 'react';
import { ScrollToTop } from '../components/scrollToTop';
import FooterBanner from '../footer/FooterBanner';
import bannerImage from '../images/academy-gown/mark-belford-academy-gown-footer.webp';
import styles from '../styles/AcademyGown.module.scss';
import stylesCollection from '../styles/Collections.module.scss';
import showHiddenText from '../components/ShowText';
import removeHiddenText from '../components/RemoveText';

export default function AcademyGown(){
    useEffect(() => {
        ScrollToTop()
    });
    return(
        <main>
            <div className='page-marker'></div>
            <section className='content content-top'>
                <div className='row center-it'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-lg-1 col-xl-2 col-xxxl-4'></div>
                            <div className='col-sm-6 col-lg-4 col-xl-3 col-xxxl-2 order-md-2'>
                                <div className={styles.heroHeader}>
                                    <div className={styles.adj1}>the</div><div className={styles.adj2}><span className={styles.kernA}>A</span>cademy</div><div className={styles.adj3}>Gown</div>
                                </div>
                            </div>
                            <div className='col-sm-9 col-md-5 col-lg-4 col-xxxl-3 order-md-1'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/academy-gown/mark-belford-academy-gown-top.webp')} />
                                    <img src={require('../images/academy-gown/mark-belford-academy-gown-top.webp')} alt='Close up of the Mark Belford Academy Gown' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-sm-12 order-md-3'>
                                <div className='row'>
                                    <div className='col-md-2 col-xl-3 col-xxl-4 col-xxxl-5'></div>
                                    <div className='col-md-4 col-xxl-3'>
                                        <div className={stylesCollection.contentTopParagraph}>
                                            <div className='top-text-lrg'>The Oscar <br/>Moment</div>
                                            <h1>
                                            Platinum Italian silk taffeta, veiled in beaded silk tulle, shimmering with hand-appliquéd starbursts of crystals and sequins—because a leading lady deserves nothing less than a celestial glow.
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content'>
                <div className='row'>
                    <div className="col-md-6 col-lg-6 col-xxl-6">
                        <div className={stylesCollection.fullBleed}>
                            <figure>
                                <picture className='image-full'>
                                    <source media='(max-width:500px)' srcSet={require('../images/academy-gown/mark-belford-academy-gown-xs-1.webp')} />
                                    <source media='(max-width:824px)' srcSet={require('../images/academy-gown/mark-belford-academy-gown-sm-1.webp')} />
                                    <source srcSet={require('../images/academy-gown/mark-belford-academy-gown-Lrg-1.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Academy Gown' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </figure>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-10 col-xxl-8'>
                                <div className='vertical-center-block blk'>
                                    <h2 className='hot-pink no-wrap'>
                                        Flawlessly<br/>Accentuate<br/>Your Silhouette
                                    </h2>
                                    <div className='top-text-lrg white-text'><br/>The Ultimate<br/>Showstopper?</div>
                                    <p className='white-text'>The sculpted bodice and half corset sculpt, lift, and command attention, while the sleek, fluid skirt moves like whispered intrigue.</p>
                                    <div className='e-comerce-link-2 blk-bg' onMouseEnter={() => {showHiddenText();}} onMouseLeave={() => {removeHiddenText();}} >
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
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/academy-gown/mark-belford-academy-gown-xs-3.webp')} />
                                    <source media='(max-width:824px)' srcSet={require('../images/academy-gown/mark-belford-academy-gown-sm-3.webp')} />
                                    <source srcSet={require('../images/academy-gown/mark-belford-academy-gown-Lrg-3.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Academy Gown' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                            <div className='col-md-10 col-lg-8'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/academy-gown/mark-belford-academy-gown-xs-4.webp')} />
                                    <source srcSet={require('../images/academy-gown/mark-belford-academy-gown-sm-4.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Academy Gown' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-6 col-xxl-8'>
                                <h2 className='hot-pink no-wrap'>This isn’t<br/>just Couture,<br/>it’s a Scene<br/>Stealer.</h2>
                                <div className='top-text-lrg'><br/>WARNING</div>
                                <p>
                                Side effects may include stolen spotlights, unsolicited paparazzi attention, and ex-lovers suddenly 'just happening' to be at the same event. Wear responsibly.<br/>
                                <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 order-xs-2'>
                        <div className='row justify-content-end-lg'>
                            <div className='col-xs-12 col-md-6 col-xxl-8'>
                                <div className='top-text-lrg'><br/>Wear<br/>Responsibly.</div>
                                <p>
                                Detachable chinchilla shoulder surrounds, because sometimes an entrance requires a little extra theatre.<br/>
                                <br/>
                                </p>
                            </div>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/academy-gown/mark-belford-academy-gown-xs-2.webp')} />
                                    <source srcSet={require('../images/academy-gown/mark-belford-academy-gown-sm-2.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Academy Gown' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterBanner bannerImage={bannerImage} />
        </main>
    );
};