import { useEffect } from 'react';
import { ScrollToTop } from '../components/scrollToTop';
import FooterBanner from '../footer/FooterBanner';
import bannerImage from '../images/coronation-gown/mark-belford-coronation-gown-footer.webp';
import styles from '../styles/CoronationGown.module.scss';
import stylesCollection from '../styles/Collections.module.scss';
import showHiddenText from '../components/ShowText';
import removeHiddenText from '../components/RemoveText';


export default function CoronationGown(){
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
                                    <div className={styles.adj1}>the</div><div className={styles.adj2}>Coronation</div><div className={styles.adj3}>Gown</div>
                                </div>
                            </div>
                            <div className='col-sm-9 col-md-5 col-lg-4 col-xxxl-3 order-md-1'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/coronation-gown/mark-belford-coronation-gown-top.webp')} />
                                    <img src={require('../images/coronation-gown/mark-belford-coronation-gown-top.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-sm-12 order-md-3'>
                                <div className='row'>
                                    <div className='col-md-2 col-xl-3 col-xxl-4 col-xxxl-5'></div>
                                    <div className='col-md-4 col-xxl-3'>
                                        <div className={stylesCollection.contentTopParagraph}>
                                            <div className='top-text-lrg'>Experience<br/>the coronation<br/>of glamour</div>
                                            <p>
                                            Because some women inherit titles.<br/><span className='no-wrap'>Others tailor them.</span>
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
                    <div className="col-md-6 col-lg-6 col-xxl-6">
                        <div className={stylesCollection.fullBleed}>
                            <figure>
                                <picture className='image-full'>
                                    <source media='(max-width:500px)' srcSet={require('../images/coronation-gown/mark-belford-coronation-gown-1-xs.webp')} />
                                    <source media='(max-width:824px)' srcSet={require('../images/coronation-gown/mark-belford-coronation-gown-1-sm.webp')} />
                                    <source srcSet={require('../images/coronation-gown/mark-belford-coronation-gown-1-lg.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Burmese Ruby dress' height='100%' width='100%' loading='lazy' />
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
                                        The Essence<br/>of Majesty<br/>and a Tiny<br/>Bit of Mischief
                                    </h2>
                                    <div className='top-text-lrg white-text'>
                                    <br/>crown not required,<br/>but encouraged.
                                    </div>
                                    <p className='white-text'>Introducing The Coronation Gown — a show-stopping, scene-stealing, dynasty-destabilizing masterpiece in matte gold French silk tulle, hand-embellished with thousands of delicate, light-catching paillettes. Sculpted to absolute precision, the gown is an ode to power dressed as poetry.</p>
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
                            <div className='col-md-10 col-lg-12 image'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/coronation-gown/mark-belford-coronation-gown-3-xs.webp')} />
                                    <source srcSet={require('../images/coronation-gown/mark-belford-coronation-gown-3-lg.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Coronation Gown' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                            <div className='col-md-10 col-lg-10 col-xxl-8'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/coronation-gown/mark-belford-coronation-gown-4-xs.webp')} />
                                    <source srcSet={require('../images/coronation-gown/mark-belford-coronation-gown-4-lg.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Coronation Gown' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                            <div className='col-sm-8 col-xxl-8'>
                                <h2 className='hot-pink'>Reign,<br/>Baby,<br/>Reign</h2>
                                <div className='top-text-lrg'><br/>This isn’t just fashion.<br/>It’s a coup d’état in couture.</div>
                                <p>
                                The gown’s silhouette flows into a fitted, elongated train, giving the illusion of effortless grace while maintaining full architectural drama. Along the neckline and cuff, larger gold paillettes form a halo effect — a nod to celestial ambition and unapologetic flair.

The sleeves are precisely cut above the wrist, and densely adorned with hand-applied paillettes — creating the perfect stage for a diamond bracelet, an heirloom cuff, or simply an unbothered wave. Controlled, commanding, and perfectly poised — they don’t shout, they shimmer.<br/>
                                <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-8 col-lg-6 order-lg-1 order-xs-2'>
                        <div className='row justify-content-end-lg'>
                            <div className='top-text-lrg'><br/>Slip into The<br/>Coronation Gown<br/>and claim your throne</div>
                            <p>
                            Each shimmering element is individually hand-sewn, scattered like secrets across a structure that flatters, elevates, and disarms. Beneath the gilded veil lies a meticulously engineered inner corset bodice, designed to hold the body like a whisper and shape it like a scandal. It’s not a fit — it’s a revelation.<br/>
                            <br/>
                            </p>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8 image'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/coronation-gown/mark-belford-coronation-gown-2-xs.webp')} />
                                    <source srcSet={require('../images/coronation-gown/mark-belford-coronation-gown-2-lg.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Coronation Gown' height='100%' width='100%' loading='lazy' />
                                </picture>
                                <div className='top-text-lrg'><br/>The pièce de<br/>résistance?</div>
                                <p>
                                With every movement, the gown comes alive — a kinetic sculpture of shimmer and intent, designed for women who understand that glamour is a weapon and elegance is strategy. There is no excess here — only expression. No filler — just fire.<br/>
                                <br/>
                                Lined in a deep shade of champagne-blush silk, hidden beneath the folds like a secret rendezvous, the gown is made for women who prefer to be overheard — and overdressed. From ballroom to boardroom scandal, The Coronation Gown carries stories stitched in every thread.<br/>
                                <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterBanner bannerImage={bannerImage} />
        </main>
    );
};