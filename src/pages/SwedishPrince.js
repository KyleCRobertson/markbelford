import { useEffect } from 'react';
import FooterBanner from '../footer/FooterBanner';
import showHiddenText from '../components/ShowText';
import removeHiddenText from '../components/RemoveText';
import { ScrollToTop } from '../components/scrollToTop';
import stylesCollection from '../styles/Collections.module.scss';
import styles from '../styles/SwedishPrince.module.scss';
import bannerImage from '../images/dior/mark-belford-sweedish-prince-footer.webp';

export default function SwedishPrince(){
    useEffect(() => {
        ScrollToTop()
    });
    return (
        <main>
            <div className='page-marker'></div>
            <section className='content content-top'>
                <div className='row center-it'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-md-1 col-xl-2 col-xxxl-4'></div>
                            <div className={`col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxxl-4 ${styles.hero}`}>
                                <div className={styles.heroHeader}>
                                    <div className={styles.adj1}>the</div><div className={styles.adj2}>Swedish</div><div className={styles.adj3}>Prince</div>
                                    <div className={styles.locationText}>
                                        <div className={styles.line1}>at</div>
                                        <div className={styles.line2}>Dior</div>
                                    </div>
                                </div>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/dior/mark-belford-dior-1.webp')} />
                                    <img src={require('../images/dior/mark-belford-dior-1.webp')} alt='Fredrik Robertson wearing the Sweedish Prince cape by Mark Belford' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-sm-12 order-md-3'>
                                <div className={`row ${styles.contentTopParagraphAdj}`}>
                                    <div className='col-md-2 col-xl-3 col-xxl-4 col-xxxl-5'></div>
                                    <div className='col-sm-6 col-md-6 col-xxl-5'>
                                        <div className={stylesCollection.contentTopParagraph}>
                                            <div className='top-text-lrg'>Fredrik Robertson<br/>Dominates the<br/>Front Row</div>
                                            <p>
                                            In a breathtaking display of fashion mastery, Fredrik Robertson took his seat at the front row of the Dior Couture Show in Paris, draped in the awe-inspiring artistry of Mark Belford Couture.<br/>
                                            </p>
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
                    <div className={`col-md-6 col-lg-8 col-xxl-6 ${stylesCollection.fullBleedFlushLeft}`}>
                        <figure>
                        <picture>
                            <img src={require('../images/dior/mark-belford-dior-6.webp')} alt="Fredrik Robertson wearing the Sweedish Prince cape by Mark Belford" height='100%' width='100%' /> 
                        </picture>
                        </figure>
                    </div>
                    <div className='col-md-12 col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-10 col-xxl-6'>
                                <div className='vertical-center-block'>
                                    <h2 className='hot-pink no-wrap'>
                                        I Create<br/>Characters<br/>with my Style
                                    </h2>
                                    <div className='top-text-lrg'>
                                    <br/>The black silk<br/>Peau De Soie<br/>structured<br/>shift dress<br/>
                                    </div>
                                    <p>was a masterpiece of precision and drape, designed with Mark's signature sculpted cuff that made a bold statement in its elegant simplicity. This was not just a dress—this was Fredrik Robertson’s introduction to the front row.</p>
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
                            <div className='col-md-10 col-lg-8 col-xxl-6'>
                                <picture className='image'>
                                    <img src={require('../images/dior/mark-belford-dior-9.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-md-12 col-xxl-10'>
                                <picture className='image'>
                                    <img src={require('../images/dior/mark-belford-dior-2.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-md-10 col-lg-8 col-xxl-5'>
                                <picture className='image'>
                                    <img src={require('../images/dior/mark-belford-dior-8.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-10  col-xxl-8'>
                                <h2 className='hot-pink'>The Couture<br/>Creation:<br/>The Ultimate Statement</h2>
                                <div className='top-text-lrg'><br/>Mark Belford’s couture creation for Fredrik Robertson takes its place as a once-in-a-lifetime moment.</div>
                                <p>
                                The opera cape, crafted in miles of silk Peau De Soie, flowed with opulent volume and drama. Adorned with thousands of hand-made silk flowers and finished with jet-black pearls, it’s a visual spectacle that commands attention. At its heart, Mark’s signature bow—imbued with romance and refinement—completed this couture masterstroke. This collaboration, which began in Sweden, moved through Toronto, and culminated in Paris, is an artistic journey that embodies Mark’s vision of effortless sophistication and Fredrik’s unapologetic expression. Together, they created a look that redefined the front row at Dior—an unforgettable moment that will go down in history as a fucking truly epic celebration of couture.<br/>
                                <br/>
                                <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 order-xs-2'>
                        <div className='row justify-content-end-lg'>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxl-12'>
                                <div className='top-text-lrg'>A Vision<br/>in Fashion</div>
                                <p>
                                "I create characters with my style. A lot of people think I dress for attention: I don’t. I just happen to love fashion and have always liked the idea that what I wear changes how people look at and think of me. I don’t feel that I have one style; I create characters with my style. I like to dress how I feel, and I like to dress for the occasion. If I’m going to a gala, I do gala; at the couture in Paris, I go all out. I don’t limit myself, and I love to have fun with fashion."<br/>
                                <h5 className='benguiatCaslon hot-pink'>—Fredrik Robertson</h5>
                                <span style={{fontWeight: '600', letterSpacing: '0.03em'}} >VOUGE</span><br/>
                                <br/>
                                </p>
                            </div>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8'>
                                <picture className='image'>
                                    <img src={require('../images/dior/mark-belford-dior-4.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-6 col-lg-8 col-xxxl-5'>
                                <picture className='image'>
                                    <img src={require('../images/dior/mark-belford-dior-7.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                    {/* <div className={styles.clickMeTag}>
                                        Kick<br/>Me
                                    </div>*/}
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