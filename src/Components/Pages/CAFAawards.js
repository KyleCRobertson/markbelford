import React, { useState } from 'react';
import styles from '../styles/CAFAawards.module.css';
import stylesCollection from '../styles/Collections.module.css';

const CAFAawards = () => {
    return (
        <main>
            <div className='page-marker'></div>
            <section className='content content-top large-adjust'>
                <div className={styles.heroHeader}>
                    <h1>
                        <div className={styles.adj1}>the</div><div className={styles.adj2}>CAFA</div><div className={styles.adj3}>Awards</div>
                    </h1>
                </div>
                <div className='row'>
                    <div className='col-md-2 col-xl-2 col-xxl-3'></div>
                    <div className={`col-md-8 col-xl-8 col-xxl-6 ${stylesCollection.contentTopParagraph}`}>
                        <h6>
                        Step into the realm of Mark Belford Events, where we're serving up haute couture with an editorial edge and a hint of rock 'n' roll rebellion. Our spotlight falls on the Venetian Gown, a masterpiece of haute couture. This gown's precision-cut bodice, draped in luxurious Italian silk, flaunts sculpted silk organza ruffles that exude a "bad girl gone chic" vibe.
                        </h6>
                    </div>
                    <div className='col-xl-2 col-xxl-3'></div>
                    <div className='col-md-5'></div>
                    <div className='col-md-2'>
                        <div className={stylesCollection.sketch}>
                            <picture>
                                <img src={require('../../images/mark-belford-silver-dress-sketch.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                            </picture>
                        </div>
                    </div>
                    <div className='col-md-5'></div>
                </div>
            </section>
            <section className='content full-page'>
                <div className='half-page-left'>
                    <picture>
                        <img src={require('../../images/events/mark-belford-CAFA-Lrg-1.webp')} alt='Model standing in front of mirror in the Butterfield 8 coat and dress' height='100%' width='100%' />
                    </picture>
                </div>
                <div className='half-page-right'>
                    <div className='row vertical-center'>
                        <div className='col-md-7'></div>
                        <div className='col-md-4'>
                            <div className='half-page-text-block'>
                                <h2 style={{color:'#fd1d86'}}>
                                    <span className={stylesCollection.quotePullBack}>'The Fierce</span><br/>Editorial<br/>of Life'
                                </h2>
                                <p>
                                Venetian lace weaves an intricate tale of elegance, and the camera lens of the prolific George Pimentel immortalized its enigmatic allure as it adorned the charismatic Kim Applet. Mark Belford Events: where haute couture meets fierce, and every moment is a page in the fierce editorial of life. Hold me closer private dancer!
                                </p>
                                <div className='e-comerce-link-2'>
                                    <a href='https://www.markbelfordcouture.com/' target='blank' >Own a piece of the collection</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content middle-big-pad'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='col-xs-12 col-lg-9 right-align'>
                            <img src={require('../../images/events/mark-belford-CAFA-Lrg-2.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' /></div>
                        </div>  
                        <div className='col-sm-6'>
                            <img src={require('../../images/events/mark-belford-CAFA-Lrg-3.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                            <div className='row'>
                                <div className='col-xs-12 col-md-6 col-xxl-9'>
                                    <br/>
                                    <h2 style={{color:'#fd1d86'}}>
                                        <span className={stylesCollection.quotePullBack}>'A Hint of</span><br/>Rock 'N' Roll<br/>Rebellion'
                                    </h2>
                                </div>
                        </div>
                    </div>               
                </div>
            </section>
        </main>
    );
};

export default CAFAawards;