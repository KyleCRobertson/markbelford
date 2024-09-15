import React from 'react';
import styles from '../styles/CoronationGown.module.css';
import stylesCollection from '../styles/Collections.module.css';

const CoronationGown = () => {
    return(
        <main>
            <div className='page-marker'></div>
            <section className='content content-top large-adjust'>
                <div className='row'>
                    <div className={`col-md-6 ${styles.heroHeader}`}>
                        <h1>
                            <div className={styles.adj1}>the</div><div className={styles.adj2}>Coronation</div><div className={styles.adj3}>Gown</div>
                        </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-2 col-xxl-3 lrg-1'></div>
                    <div className={`col-xl-8 col-xxl-6 ${stylesCollection.contentTopParagraph}`}>
                        <h6>
                        Experience the coronation of glamour with our breathtaking masterpiece, "The Coronation Gown." This resplendent couture creation in matte gold silk taffeta, meticulously hand draped by the visionary Mark Belford, showcases an extraordinary fusion of artistry and precision.
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
                                <img src={require('../../images/mark-belford-coronation-gown-Lrg-1.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-md-11 col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-10 col-xxl-8'>
                                <div className='vertical-center-block'>
                                    <h2 style={{color:'#fd1d86'}}>
                                        The Essence<br/>of Majesty<br/>and Elegance
                                    </h2>
                                    <p>Prepare to be captivated as razor-sharp pleats cascade from the bodice, effortlessly transitioning into a voluminous, tiered skirt that gracefully sweeps the floor. A touch of opulence awaits as the faux fur bodice, delicately attached to the sweetheart neckline with covered loops and buttons, adds an element of luxurious allure. Complete with a sumptuous gold silk lining throughout, this regal ensemble embodies the essence of majesty and elegance. Allow yourself to be adorned in unrivaled splendor.
Embark on a majestic journey of elegance and grandeur with "HRH The Coronation Gown." This extraordinary couture creation, draped with meticulous precision by the visionary Mark Belford, is a true testament to the fusion of artistry and glamour.</p>
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
                            <div className='col-md-10 col-lg-12 image'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-coronation-gown-Lrg-3.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-md-10 col-lg-8'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-coronation-gown-Lrg-4.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-6 col-xxl-8'>
                                <h2 style={{color:'#fd1d86'}}>A Cocoon <br/>of Luxury</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 order-xs-2'>
                        <div className='row justify-content-end-lg'>
                            <p className='lrg'>
                            Indulge in the sumptuousness of gold silk lining that envelops you in a cocoon of luxury, elevating your presence to new heights. With "HRH The Coronation Gown," you will reign supreme in unrivalled splendor, embodying the very essence of majesty and elegance. Allow yourself to be adorned in the regal allure of this masterpiece, exclusively at your command.<br/>
                            <br/>
                            </p>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8 image'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-coronation-gown-Lrg-2.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <p className='sml'>
                            <br/>
                            <br/>
                            Indulge in the sumptuousness of gold silk lining that envelops you in a cocoon of luxury, elevating your presence to new heights. With "HRH The Coronation Gown," you will reign supreme in unrivalled splendor, embodying the very essence of majesty and elegance. Allow yourself to be adorned in the regal allure of this masterpiece, exclusively at your command.<br/>
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

export default CoronationGown;