import { useEffect } from 'react';
import { ScrollToTop } from '../components/scrollToTop';
import showHiddenText from '../components/ShowText';
import removeHiddenText from '../components/RemoveText';
import FooterBanner from '../footer/FooterBanner';
import styles from '../styles/FairmontFashion.module.scss';
import stylesCollection from '../styles/Collections.module.scss';
import bannerImage from '../images/fairmont-fashion/mark-belford-fairmont-fashion-footer.webp';

export default function FairmontFashion(){
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
                            <div className='col-lg-1 col-xl-2 col-xxxl-4'></div>
                            <div className='col-sm-6 col-lg-4 col-xl-3 col-xxxl-2 order-md-2'>
                                <div className={styles.heroHeader}>
                                    <div className={styles.adj1}>Fairmont</div><div className={styles.adj2}>Fashion</div>
                                </div>
                            </div>
                            <div className='col-sm-9 col-md-5 col-lg-4 col-xxxl-3 order-md-1'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/fairmont-fashion/mark-belford-FairmontFashion-top.webp')} />
                                    <img src={require('../images/fairmont-fashion/mark-belford-FairmontFashion-top.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-sm-12 order-md-3'>
                                <div className='row'>
                                    <div className='col-md-2 col-xl-3 col-xxl-4 col-xxxl-5'></div>
                                    <div className='col-md-4 col-xxl-3'>
                                        <div className={stylesCollection.contentTopParagraph}>
                                            <div className='top-text-lrg'>The Fairmont Affair</div>
                                            <p>
                                            Mark Belford’s gowns made their grand entrance at the opening of the Toronto International Film Festival, commanding the iconic marble lobby of the Fairmont Royal York like it was the Palais des <span className='no-wrap'>Festivals in Cannes.</span>
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
                            <picture className='image'>
                            <img src={require('../images/events/mark-belford-FairmontFashion-Lrg-1.webp')} alt='Model standing in front of mirror in the Butterfield 8 coat and dress' height='100%' width='100%' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-md-11 col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-10 col-xxl-8'>
                                <div className='vertical-center-block'>
                                    <h2 style={{color:'#fd1d86'}}>
                                    The Unapologetic Glamour of Classic Film Goddesses.
                                    </h2>
                                    <div className='top-text-lrg'>
                                    <br/>With gleaming gold<br/>opera chairs lining<br/>the runway,<br/>
                                    </div>
                                    <p>and lush white orchids blooming beneath chandeliers older than cinema itself, this wasn’t just an unveiling — it was a love letter to film, fashion, and the power of a perfect silhouette.</p>
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
                    <div className='col-sm-6'>
                        <div className='top-text-lrg'><br/>It Was a<br/>Love Letter<br/>to Film,</div>
                        <p>
                        fashion, and the power of a perfect silhouette. Each look honored the moments Mark adores most — both on screen and on the red carpet — capturing the drama, the romance, and the unapologetic glamour of classic film goddesses.<br/>
                        <br/>
                        </p>
                        <div className='col-xs-12 col-lg-9 right-align'>
                            <picture className='image'>
                                <img src={require('../images/events/mark-belford-FairmontFashion-Lrg-2.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                            </picture>
                        </div>
                        <div className='col-xs-12 col-lg-6 right-align'>
                            <picture className='image'>
                                <img src={require('../images/events/mark-belford-FairmontFashion-Lrg-7.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                            </picture>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='row'>
                            <div className='col-sm-8'>
                            <picture className='image'>
                                <img src={require('../images/events/mark-belford-FairmontFashion-Lrg-3.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                            </picture>
                            </div>
                            <div className='col-sm-10'>
                                <picture className='image'>
                                    <img src={require('../images/events/mark-belford-FairmontFashion-Lrg-4.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-sm-6'>
                                <picture className='image'>
                                    <img src={require('../images/events/mark-belford-FairmontFashion-Lrg-6.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-sm-8'>
                                <picture className='image'>
                                    <img src={require('../images/events/mark-belford-FairmontFashion-Lrg-5.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                </picture>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xs-12 col-md-6 col-xxl-9'>
                            <h2 style={{color:'#fd1d86'}}>The Fairmont<br/> Affair was<br/>not a show.</h2>
                            <div className='top-text-lrg'><br/>It was a<br/>standing<br/>ovation<br/>dressed in<br/>Mark Belford.</div>
                            <p className='lrg'>Toronto came out in full couture force, celebrating not just a designer, but a city catching fire in sequins, silk, and star power.<br/><br/></p>
                            </div>
                        </div>
                    </div>               
                </div>
            </section>
            <FooterBanner bannerImage={bannerImage} />
        </main>
    );
};