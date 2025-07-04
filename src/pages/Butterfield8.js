import { useEffect } from 'react';
import { ScrollToTop } from '../components/scrollToTop';
import FooterBanner from '../footer/FooterBanner';
import bannerImage from '../images/butterfield8/mark-belford-butterfield8-footer.webp';
import styles from '../styles/Butterfield8.module.scss';
import stylesCollection from '../styles/Collections.module.scss';
import showHiddenText from '../components/ShowText';
import removeHiddenText from '../components/RemoveText';

const Butterfield8 = () => {
    useEffect(() => {
        ScrollToTop();
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
                                    <div className={styles.adj1}>the</div><div className={styles.adj2}>Butterﬁeld</div><div className={styles.adj3}>8</div>
                                </div>
                            </div>
                            <div className='col-sm-9 col-md-5 col-lg-4 col-xxxl-3 order-md-1'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/butterfield8/mark-belford-butterfield8-xs-5.webp')} />
                                    <img src={require('../images/butterfield8/mark-belford-butterfield8-top.webp')} alt='Close up of the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-sm-12 order-md-3'>
                                <div className='row'>
                                    <div className='col-md-2 col-xl-3 col-xxl-4 col-xxxl-5'></div>
                                    <div className='col-md-4 col-xxl-3'>
                                        <div className={stylesCollection.contentTopParagraph}>
                                            <div className='top-text-lrg'>In the alluring<br/>realm of<br/>Hollywood,</div>
                                            <p>
                                            where elegance and sensuality intertwine, a Couture Editorial inspired by Elizabeth Taylor's passionate and fierce portrayal of Gloria Wondrous in "Butterfield 8" unfolds.
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
                                <source media='(max-width:500px)' srcSet={require('../images/butterfield8/mark-belford-butterfield8-xs-2.webp')} />
                                <source media='(max-width:824px)' srcSet={require('../images/butterfield8/mark-belford-butterfield8-sm-2.webp')} />
                                <source srcSet={require('../images/butterfield8/mark-belford-butterfield8-Lrg-2.webp')} />
                                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing Mark Belfords Butterfield 8 Dress' height='100%' width='100%' loading='lazy' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-md-12 col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-10 col-xxl-8'>
                                <div className='vertical-center-block'>
                                    <h2 className='hot-pink no-wrap'>
                                    A Splash of<br/>Gin, A Dash<br/>of Scandal
                                    </h2>
                                    <div className='top-text-lrg'><br/>A world<br/>of timeless<br/>glamour</div>
                                    <p>Mark’s Couture Editorial: In the alluring realm of Hollywood, where elegance and sensuality intertwine, the spirit of Elizabeth Taylor’s fierce portrayal of Gloria Wondrous in Butterfield 8 comes to life. Picture sultry glances, high-stakes allure, and a wardrobe that demands attention. This is couture with a wink—a timeless love affair with glamour and drama.</p>
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
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/butterfield8/mark-belford-butterfield8-xs-1.webp')} />
                                    <source media='(max-width:824px)' srcSet={require('../images/butterfield8/mark-belford-butterfield8-sm-1.webp')} />
                                    <source srcSet={require('../images/butterfield8/mark-belford-butterfield8-Lrg-1.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing Mark Belfords Butterfield 8 Dress' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                            <div className='col-md-8'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/butterfield8/mark-belford-butterfield8-xs-5.webp')} />
                                    <source srcSet={require('../images/butterfield8/mark-belford-butterfield8-Lrg-5.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing Mark Belfords Butterfield 8 Dress' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-6 col-xxl-8'>
                                <h2 style={{color:'#fd1d86'}}>Extraordinary<br/>Allure and<br/>Grace</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 order-xs-2'>
                        <div className='row justify-content-end-lg'>
                            <div className='top-text-lrg'>As the scene unfolds,<br/>Gloria, played to<br/>smoldering perfection<br/>by Elizabeth Taylor</div>
                            <p>
                            rewrites the rules, effortlessly reclaiming the night. Draped in a silk wool dress that’s as unapologetic as she is, every stitch whispers confidence. Stealing the spotlight? A coordinating Italian cashmere coat, its voluminous collar kissed with vintage fox fur. Cut on the bias, the fur forms a hypnotic chevron pattern—because in Gloria’s world, even scandal should be impeccably tailored.<br/>
                            <br/>
                            </p>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/butterfield8/mark-belford-butterfield8-xs-3.webp')} />
                                    <source media='(max-width:824px)' srcSet={require('../images/butterfield8/mark-belford-butterfield8-sm-3.webp')} />
                                    <source srcSet={require('../images/butterfield8/mark-belford-butterfield8-Lrg-3.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing Mark Belfords Butterfield 8 Dress' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content landing-page-bottom'>
                <div className='row'>
                    <div className='col-md-8 col-lg-3 col-xxxl-2 order-lg-2'>
                        <div className='top-text-lrg'>In the spirit of<br/>Elizabeth Taylor’s<br/>legendary allure,</div>
                        <p>
                        Mark Belford weaves a cinematic love letter—one where fabric and film become inseparable. In the hands of a master cinematographer, clothing ceases to be mere costume; it becomes character, desire, and story all at once. This Couture Editorial is a whispered dialogue between Taylor and Belford, an imagined friendship where silk and shadow shape a world of timeless glamour. After all, the perfect design doesn’t just dress a woman—it directs the scene.<br/>
                        <br/>
                        </p>
                    </div>
                    <div className='col-md-11 col-lg-9 pad-bottom-24 order-lg-1'>
                        <picture className='image'>
                            <source media='(max-width:500px)' srcSet={require('../images/butterfield8/mark-belford-butterfield8-xs-4.webp')} />
                            <source media='(max-width:824px)' srcSet={require('../images/butterfield8/mark-belford-butterfield8-sm-4.webp')} />
                            <source srcSet={require('../images/butterfield8/mark-belford-butterfield8-Lrg-4.webp')} />
                            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing Mark Belfords Butterfield 8 Dress' height='100%' width='100%' loading='lazy' />
                        </picture>
                    </div>           
                </div>
                <div className='row'>
                    <div className={`col-sm-5 col-md-4 col-lg-3 ${styles.specsBlock}`}>
                        <div className={styles.catagoryType}>Art Director</div>
                        <div className={styles.catagoryName}>Mark Belford</div>
                        <div className={styles.catagoryType}>Wardrobe</div>
                        <div className={styles.catagoryName}>Mark Belford Couture</div>
                        <div className={styles.catagoryType}>Production Manager</div>
                        <div className={styles.catagoryName}>Enzo Avola</div>
                        <div className={styles.catagoryType}>Hair/Makeup</div>
                        <div className={styles.catagoryName}>L’Oréal Paris</div>
                        <div className={styles.catagoryType}>Jewellery</div>
                        <div className={styles.catagoryName}>Birks</div>
                        <div className={styles.catagoryType}>Photography/Post</div>
                        <div className={styles.catagoryName}>Oz John Tekson</div>
                        <div className={styles.catagoryType}>Location</div>
                        <div className={styles.catagoryName}>The Shangri La Hotel Toronto</div>
                        <br/><br/>
                    </div>
                    <div className='col-sm-6 col-md-5 col-lg-4 col-xl-3'>
                        <p>
                        &quot;I fell in love with Elizabeth Taylor in Giant, but it was her authentic character and relentless humanitarianism that truly captured my heart. Her influence, raising awareness for HIV and founding the Elizabeth Taylor AIDS Foundation, continues to inspire me. Those eyes, that passion for life, they stay with me, and the love affair continues.&quot;<br/><h5 className='benguiatCaslon hot-pink'>—Mark Belford</h5><br/>
                        <br/>
                        </p>
                    </div>
                </div>
            </section>
            <FooterBanner bannerImage={bannerImage} />
        </main>
    );
};

export default Butterfield8;