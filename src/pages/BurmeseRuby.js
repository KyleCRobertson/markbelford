import { useEffect } from 'react';
import { ScrollToTop } from '../components/scrollToTop';
import FooterBanner from '../footer/FooterBanner';
import bannerImage from '../images/burmese-ruby/mark-belford-burmese-ruby-footer.webp';
import styles from '../styles/BurmeseRuby.module.scss';
import stylesCollection from '../styles/Collections.module.scss';
import showHiddenText from '../components/ShowText';
import removeHiddenText from '../components/RemoveText';

export default function BurmeseRuby(){
    useEffect(() => {
        ScrollToTop()
    },[]);
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
                                    <div className={styles.adj1}>the</div><div className={styles.adj2}>Burmese</div><div className={styles.adj3}>Ruby</div>
                                </div>
                            </div>
                            <div className='col-sm-9 col-md-5 col-lg-4 col-xxxl-3 order-md-1'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-top.webp')} />
                                    <img src={require('../images/burmese-ruby/mark-belford-burmese-ruby-top.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-sm-12 order-md-3'>
                                <div className='row'>
                                    <div className='col-md-2 col-xl-3 col-xxl-4 col-xxxl-5'></div>
                                    <div className='col-md-4 col-xxl-3'>
                                        <div className={stylesCollection.contentTopParagraph}>
                                            <div className='top-text-lrg'>Ignite the night<br/>with our stunning<br/>masterpiece,</div>
                                            <p>
                                            the deep ruby red "Burmese Ruby Gown." This exquisite couture creation, hand draped with delicate precision by the visionary Mark Belford, is a celebration of structured elegance and <span className='no-wrap'>alluring charm.</span>
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
                                    <source media='(max-width:500px)' srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-1-xs.webp')} />
                                    <source media='(max-width:824px)' srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-1-sm.webp')} />
                                    <source srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-1-lg.webp')} />
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
                                        Flawlessly<br/>Accentuate<br/>Your Silhouette
                                    </h2>
                                    <div className='top-text-lrg white-text'>
                                    <br/>Because Subtlety<br/>Is for Amateurs.
                                    </div>
                                    <p className='white-text'>Introducing the &quot;Burmese Ruby&quot; gown—a creation that channels the seductive elegance of the quintessential Bond femme fatale, with a dash of cinematic mystery and an edge of danger. Inspired by the sultry, timeless glamour of the silver screen, it’s not just a gown—it’s an entrance. Hand-draped by Mark Belford, this masterpiece is the ultimate fusion of power, allure, and that undeniable intrigue only Mark—and the silver screen that fuels his imagination—can capture. Warning: wearing this gown may cause extreme envy and a few broken hearts.</p>
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
                                    <source media='(max-width:500px)' srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-2-xs.webp')} />
                                    <source srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-2-lg.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Burmese Ruby dress' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                            <div className='col-md-10 col-lg-8'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-4-xs.webp')} />
                                    <source srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-4-lg.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Burmese Ruby dress' height='100%' width='100%' loading='lazy' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-5 col-xxl-6'>
                                <h2 className='hot-pink'>Meticulously<br/>Draped.<br/>Effortlessly<br/>Iconic.</h2>
                                <div className='top-text-lrg'><br/>Lined in the<br/>deepest navy silk</div>
                                <p>
                                because true luxury is just as exquisite on the inside—this gown is the epitome of indulgence. &quot;The Burmese Ruby&quot; doesn’t just turn heads; it holds them hostage. Draped, pleated, and perfected by Mark Belford, this masterpiece is structured elegance with a pulse, a whisper of danger wrapped in silk chiffon. Make your entrance, own the night, and let them wonder if they’re mesmerized by the gown—or the woman wearing it. Meticulously Draped. Effortlessly Iconic.<br/>
                                <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 order-xs-2'>
                        <div className='row justify-content-end-lg'>
                            <div className='top-text-lrg'><br/>Featuring a<br/>sculpted bodice<br/>that melts,<br/>rather than<br/>merely flows,</div>
                            <p>
                            into an architecturally pleated evening skirt, this gown is less an ensemble and more an event. The pièce de résistance? Mark's hand-made silk roses, meticulously placed with the precision of a Swiss watchmaker and the drama of a Hitchcock heroine. A whisper of Nicole Kidman’s red-carpet supremacy, a glint of Harry Winston’s Burmese diamonds—this is couture that doesn’t just enter a room. It conquers it.<br/>
                            <br/>
                            </p>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8'>
                                <picture className='image'>
                                    <source media='(max-width:500px)' srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-3-xs.webp')} />
                                    <source srcSet={require('../images/burmese-ruby/mark-belford-burmese-ruby-3-lg.webp')} />
                                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='Model wearing the Mark Belford Burmese Ruby dress' height='100%' width='100%' loading='lazy' />
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