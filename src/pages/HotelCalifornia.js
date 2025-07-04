import { useEffect, useRef } from 'react';
import FooterBanner from '../footer/FooterBanner';
import showHiddenText from '../components/ShowText';
import removeHiddenText from '../components/RemoveText';
import scrollTo from '../components/ScrollTo';
import { ScrollToTop } from '../components/scrollToTop';
import stylesCollection from '../styles/Collections.module.scss';
import styles from '../styles/HotelCalifornia.module.scss';
import bannerImage from '../images/hotel-california/mark-belford-hotel-california-footer.webp';
import palmTree from '../images/palm-tree.svg';
import palmTreeThin from '../images/palm-tree-thin.svg';

const HotelCalifornia = () => {
    useEffect(() => {
        ScrollToTop()
    });
    const anchor1 = useRef(null);
    const anchor2 = useRef(null);
    const anchor3 = useRef(null);
    const anchor4 = useRef(null);

    return(
        <main>
            <div className='page-marker'></div>
            <section className='content content-top'>
                <div className={`row ${styles.topBlock}`}>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-lg-4 col-xxl-4'></div>
                            <div className='col-lg-6 col-xxl-4'>
                                <div className={styles.heroHeader}>
                                    <div className={styles.adj1}>hotel</div><div className={styles.adj2}>California</div>
                                    <div className={styles.palmTree}>
                                        <picture>
                                            <img src={palmTree} alt='Mark Belford hand sketched Palm Tree' height='100%' width='100%' />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xxxxl-2'></div>
                            <div className='col-xxs-6 col-sm-6 col-lg-3 col-xxxxl-2'>
                                <div className={styles.imageBtn}>
                                    <button onClick={() => {scrollTo(anchor1)}}>
                                        <picture>
                                            <img src={require('../images/hotel-california/hotel-california-block-2.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' className={styles.topImageBlock} />
                                        </picture>
                                    </button>
                                </div>
                                <div className={styles.imageBtnNames}>
                                Indulgence
                                </div>
                            </div>
                            <div className='col-xxs-6 col-sm-6 col-lg-3 col-xxxxl-2'>
                                <div className={styles.imageBtn}>
                                    <button onClick={() => {scrollTo(anchor2)}}>
                                        <picture>
                                            <img src={require('../images/hotel-california/hotel-california-block-1.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' className={styles.topImageBlock} />
                                        </picture>
                                    </button>
                                </div>
                                <div className={styles.imageBtnNames}>
                                Ecstasy
                                </div>
                            </div>
                            <div className='col-xxs-6 col-sm-6 col-lg-3 col-xxxxl-2'>
                                <div className={styles.imageBtn}>
                                    <button onClick={() => {scrollTo(anchor3)}}>
                                        <picture>
                                            <img src={require('../images/hotel-california/hotel-california-block-3.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' className={styles.topImageBlock} />
                                        </picture>
                                    </button>
                                </div>
                                <div className={styles.imageBtnNames}>
                                Desire
                                </div>
                            </div>
                            <div className='col-xxs-6 col-sm-6 col-lg-3 col-xxxxl-2'>
                                <div className={styles.imageBtn}>
                                    <button onClick={() => {scrollTo(anchor4)}}>
                                        <picture>
                                            <img src={require('../images/hotel-california/hotel-california-block-4.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' className={styles.topImageBlock} />
                                        </picture>
                                    </button>
                                </div>
                                <div className={styles.imageBtnNames}>
                                Pleasure
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-xxl-5'></div>
                            <div className='col-lg-6 col-xl-5 col-xxl-4 col-xxxl-3'>
                                <div className={stylesCollection.contentTopParagraph}>
                                    <div className='top-text-lrg'><br/>It started,<br/>as these things often do,<br/>with a phone call<br/>from Los Angeles.</div>
                                    <p>
                                    One of those “drop everything, we’ve got a vision” calls. The Ivy Hotel had a dream—four rooms, four passions, one designer to bring them all to life.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-3 lrg-1'></div>
                        </div>
                    </div>
                </div> 
            </section>
            {/*---------- /TOP BLOCK ----------*/}
            {/*---------- DRESS 1 ----------*/}
            <button className={styles.pageAnchor} ref={anchor1} />
            <section className='content'>
                <div className='row'>
                    <div className={`col-md-6 col-lg-8 col-xxl-6 ${stylesCollection.fullBleedFlushLeft}`}>
                        <figure>
                            <picture>
                                <source media='(max-width:500px)' srcSet={require('../images/hotel-california/mark-belford-hotel-california-1-xs.webp')} />
                                <source srcSet={require('../images/hotel-california/mark-belford-hotel-california-1-lg.webp')} />
                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Hotel California Collection' height='100%' width='100%' loading='lazy' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-md-11 col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-6 col-xxl-4'>
                                <div className='vertical-center-block'>
                                    <div className={styles.catagoryHeader}>Indulgence</div>
                                    <div className='top-text-lrg'>
                                    A molten gold column gown draped within an inch of its life. French taffeta never looked so sinful.
                                    </div>
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
            {/*---------- /DRESS 1 ----------*/}
            {/*---------- DRESS 2 ----------*/}
            <button className={styles.pageAnchor} ref={anchor2} />
            <section className='content'>
                <div className='row'>
                    <div className={`col-lg-6 ${stylesCollection.fullBleedFlushLeft}`}>
                        <figure>
                            <picture>
                                <source media='(max-width:500px)' srcSet={require('../images/hotel-california/mark-belford-hotel-california-2-xs.webp')} />
                                <source srcSet={require('../images/hotel-california/mark-belford-hotel-california-2-lg.webp')} />
                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Hotel California Collection' height='100%' width='100%' loading='lazy' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-6 col-xxl-4'>
                                <div className='vertical-center-block'>
                                    <div className={styles.catagoryHeader}>Ecstasy</div>
                                    <div className='top-text-lrg'>
                                    A sculpted cocktail dress with a corseted heart and signature bow, dipped in midnight.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*---------- /DRESS 2 ----------*/}
            {/*---------- DRESS 3 ----------*/}
            <button className={styles.pageAnchor} ref={anchor3} />
            <section className='content'>
                <div className='row'>
                    <div className={`col-lg-6 ${stylesCollection.fullBleedFlushLeft}`}>
                        <figure>
                            <picture>
                                <source media='(max-width:500px)' srcSet={require('../images/hotel-california/mark-belford-hotel-california-3-xs.webp')} />
                                <source srcSet={require('../images/hotel-california/mark-belford-hotel-california-3-lg.webp')} />
                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Hotel California Collection' height='100%' width='100%' loading='lazy' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-6 col-xxl-4'>
                                <div className='vertical-center-block'>
                                    <div className={styles.catagoryHeader}> Desire</div>
                                    <div className='top-text-lrg'>
                                    Layers of ivory chiffon, sheer temptation over structure. The kind of gown that enters the room five seconds before <span className='no-wrap'>you do.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*---------- /DRESS 3 ----------*/}
            {/*---------- DRESS 4 ----------*/}
            <button className={styles.pageAnchor} ref={anchor4} />
            <section className='content'>
                <div className='row'>
                    <div className={`col-lg-9 col-xxl-6 ${stylesCollection.fullBleedFlushLeft}`}>
                        <figure>
                            <picture>
                                <source media='(max-width:500px)' srcSet={require('../images/hotel-california/mark-belford-hotel-california-4-xs.webp')} />
                                <source srcSet={require('../images/hotel-california/mark-belford-hotel-california-4-lg.webp')} />
                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Hotel California Collection' height='100%' width='100%' loading='lazy' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-6 col-xxl-4'>
                                <div className='vertical-center-block'>
                                    <div className={styles.catagoryHeader}>Pleasure</div>
                                    <div className='top-text-lrg'>
                                    Blood-red Italian silk chiffon, slit to New Jersey. Because everyone loves a Jersey girl.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*---------- /DRESS 4 ----------*/}
            <section className='content'>
                <div className='row'>
                <div className='col-lg-5 col-xl-6'></div>
                    <div className='col-lg-5 col-xl-6 col-xxl-5'>
                        <div className='top-text-lrg'>
                        Now go toss<br/>your keys to<br/>the valet and <br/>float, darling.
                        </div>
                        <p>Mark Belford packed up the drama, the silk, the secrets, and headed west. What followed was a love letter to California, stitched in gold thread and whispered down palm-lined hallways.<br/>
                        <br/>
                        “Tip the world over on its side and everything loose will land in Los Angeles.”<br/>
                        <h5 className='benguiatCaslon hot-pink'>-Frank Lloyd Wright<br/><br/><br/><br/></h5>
                        </p>

                        
                    </div>
                </div>
            </section>
            {/*---------- PALM TREE MESSAGE ----------*/}
            <section className='content'>
                <div className='row'>
                    <div className='col-xxs-3 col-xs-6 col-sm-5 col-md-6'></div>
                    <div className='col-xxs-9 col-xs-6 col-sm-7 col-md-5 col-xxl-4 col-xxxl-3 relative'>
                        <div className={`hot-pink text-align-right no-wrap ${styles.palmTreeText}`}>
                            Welcome to the<br/>Hotel California
                        </div>
                        <div className={`col-sm-12 ${styles.palmTreeBottom}`}>
                            <picture>
                                <img src={palmTreeThin} alt='drawing of a palm tree' height='100%' width='100%' />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
            {/*---------- /PALM TREE MESSAGE ----------*/}
            <FooterBanner bannerImage={bannerImage} />
        </main>
    );
};

export default HotelCalifornia;