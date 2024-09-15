import React from 'react';
import styles from '../styles/BurmeseRuby.module.css';
import stylesCollection from '../styles/Collections.module.css';

const BurmeseRuby = () => {
    return(
        <main>
            <div className='page-marker'></div>
            <section className='content content-top large-adjust'>
                <div className='row'>
                    <div className={`col-md-6 ${styles.heroHeader}`}>
                        <h1>
                            <div className={styles.adj1}>the</div><div className={styles.adj2}>Burmese</div><div className={styles.adj3}>Ruby</div>
                        </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-2 col-xxl-3 lrg-1'></div>
                    <div className={`col-xl-8 col-xxl-6 ${stylesCollection.contentTopParagraph}`}>
                        <h6>
                        Ignite the night with our stunning masterpiece, the deep ruby red "Burmese Ruby Gown." This exquisite couture creation, hand draped with delicate precision by the visionary Mark Belford, is a celebration of structured elegance and alluring charm.
                        </h6>
                    </div>
                    <div className='col-xl-2 col-xxl-3 lrg-1'></div>
                    <div className='col-md-5'></div>
                    <div className='col-md-2'>
                        <div className={stylesCollection.sketch}>
                            <picture className='image'>
                                <img src={require('../../images/mark-belford-silver-dress-sketch.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                            </picture>
                        </div>
                    </div>
                    <div className='col-md-5'></div>
                </div>
            </section>
            <section className='content'>
                <div className='row'>
                    <div className={`col-md-6 col-lg-8 col-xxl-6 ${stylesCollection.fullBleedFlushLeft}`}>
                        <figure>
                            <picture className='image'>
                                <img src={require('../../images/mark-belford-burmese-ruby-dress-1.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-md-11 col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-10 col-xxl-8'>
                                <div className='vertical-center-block'>
                                    <h2 style={{color:'#fd1d86'}}>
                                        Flawlessly<br/>Accentuate<br/>Your<br/>Silhouette
                                    </h2>
                                    <p>Featuring a sculpted bodice that seamlessly flows into an elaborate pleated evening skirt, this gown exudes a sense of regal allure that is sure to captivate. The centerpiece of this exceptional masterpiece is Mark's signature mastered bows, a nod to the iconic style of Hollywood legend Nicole Kidman and the legendary Harry Winston Burmese diamond suite. Lined completely in navy blue silk throughout, this gown is the epitome of refined sophistication and luxurious indulgence. Get ready to make a grand entrance at your next soirée
Ignite the night with the mesmerizing radiance of "The Burmese Ruby" gown. This exquisite couture creation, meticulously hand draped by the visionary Mark Belford, will captivate all with its structured elegance and irresistible charm.</p>
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
                                    <img src={require('../../images/mark-belford-burmese-ruby-2-lrg.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-md-10 col-lg-8'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-burmese-ruby-1-lrg.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-6 col-xxl-8'>
                                <h2 style={{color:'#fd1d86'}}>Meticulously<br/>Hand Draped <br/>by Mark Belford</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 order-xs-2'>
                        <div className='row justify-content-end-lg'>
                            <p className='lrg'>
                            A subtle touch of allure awaits as the gown reveals a tasteful back slit, offering a glimpse of the interior silk lining in a complementary orange shade. Be the epitome of elegance and grace as you make your entrance at the prestigious Academy Awards, radiating confidence and style. Experience the magic of a bygone era with a contemporary twist.<br/>
                            <br/>
                            </p>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-burmese-ruby-3-lrg.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <p className='sml'>
                            <br/>
                            <br/>
                            A subtle touch of allure awaits as the gown reveals a tasteful back slit, offering a glimpse of the interior silk lining in a complementary orange shade. Be the epitome of elegance and grace as you make your entrance at the prestigious Academy Awards, radiating confidence and style. Experience the magic of a bygone era with a contemporary twist.<br/>
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

export default BurmeseRuby;