import { useEffect } from 'react';
import FooterBanner from '../footer/FooterBanner';
import showHiddenText from '../components/ShowText';
import removeHiddenText from '../components/RemoveText';
import { ScrollToTop } from '../components/scrollToTop';
import stylesCollection from '../styles/Collections.module.scss';
import styles from '../styles/ParkAvenue.module.scss';
import bannerImage from '../images/park-avenue/mark-belford-park-avenue-footer.webp';

export default function ParkAvenue(){
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
                                    <div className={styles.adj1}>the</div><div className={styles.adj2}>Park</div><div className={styles.adj3}>Avenue</div>
                                </div>
                            </div>
                            <div className='col-sm-9 col-md-5 col-lg-4 col-xxxl-3 order-md-1'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/park-avenue/mark-belford-park-avenue-top.webp')} />
                                    <img src={require('../images/park-avenue/mark-belford-park-avenue-top.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-sm-12 order-md-3'>
                                <div className='row'>
                                    <div className='col-md-2 col-xl-3 col-xxl-4 col-xxxl-5'></div>
                                    <div className='col-md-4 col-xxl-3'>
                                        <div className={stylesCollection.contentTopParagraph}>
                                            <div className='top-text-lrg'>Elevate your<br/>Park Avenue</div>
                                            <p>
                                            Enter the room in a see-through symphony of Venetian lace, kissed with shadows and barely-there secrets.
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
                                    <source media='(max-width:500px)' srcSet={require('../images/park-avenue/mark-belford-park-avenue-1-xs.webp')} />
                                    <source media='(max-width:824px)' srcSet={require('../images/park-avenue/mark-belford-park-avenue-1-sm.webp')} />
                                    <source srcSet={require('../images/park-avenue/mark-belford-park-avenue-1-lg.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Park Avenue Cocktail Dress' height='100%' width='100%' loading='lazy' />
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
                                    Because just a<br/>cocktail dress<br/>is for amateurs.
                                    </h2>
                                    <div className='top-text-lrg white-text'>
                                    <br/>Where demure meets<br/>dangerously divine.<br/>
                                    </div>
                                    <p className='white-text'>Handcrafted by Mark Belford for the woman who knows exactly how to play society's game (and flip the board when bored), this gown is more than style. It’s strategy in silk. Sashed at the waist with whisper-thin silk chiffon, and sculpted with razor-sharp silk organza architecture, this creation defines the waist, exaggerates the silhouette, and leaves a trail of broken hearts from the Upper East Side to Cipriani.</p>
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
                                    <source media='(max-width:500px)' srcSet={require('../images/park-avenue/mark-belford-park-avenue-3-xs.webp')} />
                                    <source srcSet={require('../images/park-avenue/mark-belford-park-avenue-3-lg.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Park Avenue Cocktail Dress' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                            <div className='col-md-10 col-lg-8'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/park-avenue/mark-belford-park-avenue-2-xs.webp')} />
                                    <source srcSet={require('../images/park-avenue/mark-belford-park-avenue-2-lg.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Park Avenue Cocktail Dress' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-6 col-xxl-8'>
                                <h2 className='hot-pink'>And Grace...<br/>That Shimmers<br/>and Soars</h2>
                                <div className='top-text-lrg'><br/>This gown<br/>doesn’t just<br/>enter a room.<br/>It orchestrates it.</div>
                                <p>
                                The interplay of light through lace, the trailing chiffon catching the gasp of movement—it’s the kind of dress that makes art directors weep and heiresses jealous. Park Avenue was never ready for her.<br/>
                                <br/>
                                But she came anyway.<br/>
                                And darling... she flew.<br/>
                                <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 order-xs-2'>
                        <div className='row justify-content-end-lg'>
                            <div className='top-text-lrg'><br/>An Aura<br/>of Elegance<br/>with an<br/>Aftertaste<br/>of Sin</div>
                            <p>
                            Beneath its innocent transparency lies pure seduction. Every thread of Venetian lace is placed with intent—suggesting without revealing, flirting without begging. The corseted bodice gently lifts, frames, and empowers, while the softness of the sash drapes like the champagne buzz at 1:00 a.m. But it’s the drama that unfurls from the top right corner of your high thigh that seals the moment: 10 feet of pleated silk chiffon that catches the wind as if choreographed by the gods themselves—a kinetic masterpiece that moves with your every calculated step.<br/>
                            <br/>
                            </p>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/park-avenue/mark-belford-park-avenue-4-xs.webp')} />
                                    <source srcSet={require('../images/park-avenue/mark-belford-park-avenue-4-lg.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Park Avenue Cocktail Dress' height='100%' width='100%' loading='lazy' />
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