import React, { useState } from 'react';
import styles from '../styles/SwedishPrince.module.css';
import stylesCollection from '../styles/Collections.module.css';

const SwedishPrince = () => {
    return (
        <main>
            <div className='page-marker'></div>
            <section className='content content-top large-adjust'>
                <div className='row'>
                    <div className='col-xxl-1'></div>
                    <div className='col-lg-7 col-xxl-6 relative'>
                        <div className={styles.heroHeader}>
                            <h1>
                                <div className={styles.adj1}>the</div><div className={styles.adj2}>Swedish</div><div className={styles.adj3}>Prince</div>
                            </h1>
                            <div className={styles.locationText}>
                                <div className={styles.line1}>at</div>
                                <div className={styles.line2}>Dior</div>
                            </div>
                        </div>
                        <div className={styles.swedishPrinceHeroPic}>
                            <picture>
                                <source media="(max-width:768px)" srcset={require('../../images/mark-belford-dior-1-sml.webp')}></source>
                                <img src={require('../../images/mark-belford-dior-1.webp')} height='100%' width='100%' />
                            </picture>
                        </div>
                    </div>
                    <div className='col-lg-5 col-xxl-4 relative'>
                        <div className={styles.contentTopParagraph}>
                            <p>Fredrik Robertson, Dominates the front row of The Dior Couture Show Paris in Mark Belford Couture. Magnificent in Mark Belford Couture. Black Silk Peau De Soie structured shift dress with signature Mark Belford cuff. An extraordinary voluminous silk cape featuring Marks silk flowers and jet-black pearls.<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content full-page'>
                <div className='half-page-left'>
                    <picture>
                    <img src={require('../../images/mark-belford-dior-6.webp')} height='100%' width='100%' /> 
                    </picture>
                </div>
                <div className='half-page-right'>
                    <div className='row vertical-center'>
                        <div className='col-md-7'></div>
                        <div className='col-md-4'>
                            <div className='half-page-text-block'>
                                <h2 style={{color:'#fd1d86'}}>
                                    <span className={stylesCollection.quotePullBack}>'Regal Allure</span><br/>and Refined<br/>Opulence'
                                </h2>
                                <p>‘A lot of people think I dress for attention: I don’t. I just happen to love fashion and have always liked the idea that what I wear changes how people look at and think of me. I don’t feel that I have one style; I create characters with my style. I like to dress how I feel, and I like to dress for the occasion. If I’m going to a gala, I do gala; at the couture in Paris, I go all out. I don’t limit myself, and I love to have fun with fashion.’ Fredrik Anderson – Vogue</p>
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
                    <div className='col-lg-6 order-lg-2 order-xs-1'>
                        <div className='row'>
                            <div className='col-md-10 col-lg-12'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-dior-8.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-md-10 col-lg-8'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-dior-2.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-6 col-xxl-8'>
                                <h2 style={{color:'#fd1d86'}}>Extraordinary<br/>Allure and<br/>Grace</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 order-xs-2'>
                        <div className='row justify-content-end-lg'>
                            <p className='lrg'>
                            In the spirit of Elizabeth Taylor's extraordinary allure and grace, Mark Belford expresses deep admiration, transcending the boundaries of time and space. The Couture Editorial becomes a celebration of their imagined friendship, a connection forged through their shared love for beautful artistry and the creation of something truly exceptional.<br/>
                            <br/>
                            </p>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-dior-4.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-6 col-lg-8 col-xxxl-5'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-dior-7.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                    <div className={stylesCollection.clickMeTag}>
                                    Kick<br/>Me
                                </div>
                                </picture>
                                
                            </div>
                            <p className='sml'>
                            <br/>
                            <br/>
                            In the spirit of Elizabeth Taylor's extraordinary allure and grace, Mark Belford expresses deep admiration, transcending the boundaries of time and space. The Couture Editorial becomes a celebration of their imagined friendship, a connection forged through their shared love for beautful artistry and the creation of something truly exceptional.<br/>
                            <br/>
                            <br/>
                            </p>  
                        </div>
                    </div>
                </div>
            </section>







            {/*
            <section className='content middle-big-pad landing-page-bottom'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='row content-right'>
                            <div className='col-sm-12 lrg'>
                                <p>
                                    <br/>
                                    <br/>
                                    The front row of the Couture shows in Paris are the epicentre of the fashion industry. The House of Dior the Emperor. I look forward to my Couture Show in the city of lights, however today in this moment preparing Fredrik for Dior, The House that has inspired me from a young man…Is a personal triumph!<br/>
                                    <br/>
                                </p>
                            </div>
                            <div className='col-xs-12 col-sm-6'>
                                <img src={require('../../images/mark-belford-dior-4.webp')} height='auto' width='100%' />
                            </div>
                            <div className='col-sm-12 sml'>
                                <p>
                                    <br/>
                                    <br/>
                                    The front row of the Couture shows in Paris are the epicentre of the fashion industry. The House of Dior the Emperor. I look forward to my Couture Show in the city of lights, however today in this moment preparing Fredrik for Dior, The House that has inspired me from a young man…Is a personal triumph!<br/>
                                    <br/>
                                    <br/>
                                </p> 
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <img src={require('../../images/mark-belford-dior-2.webp')} height='auto' width='100%' /> 
                        <div className='row'>
                            <div className='col-xs-12 col-md-6 col-xxl-9'>
                                <br/>
                                <h2 style={{color:'#fd1d86'}}>
                                    <span className={stylesCollection.quotePullBack}>'I Create</span><br/>Characters<br/>With My<br/>Style'
                                </h2>
                            </div>
                        </div>
                    </div>               
                </div>
            </section>
            */}












































            {/* 
            <section className='content content-top'>
                <div className='row align-flex-bottom'>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className={styles.heroHeader}>
                                <h1>
                                    <div className={styles.adj1}>the</div><div className={styles.adj2}>Swedish</div><div className={styles.adj3}>Prince</div>
                                </h1>
                            </div>
                            <div className='swedish-prince-2 col-md-10'>
                                <picture>
                                    <source media="(max-width:768px)" srcset={require('../../images/mark-belford-dior-1-sml.webp')}></source>
                                    <img src={require('../../images/mark-belford-dior-1.webp')} height='100%' width='100%' />
                                </picture>
                            </div>
                            <div className='col-md-6'></div>
                            <div className='swedish-prince-text-block-2 col-md-6 lrg-inline'>
                                <p>Fredrik Robertson, Dominates the front row of The Dior Couture Show Paris in Mark Belford Couture. Magnificent in Mark Belford Couture. Black Silk Peau De Soie structured shift dress with signature Mark Belford cuff. An extraordinary voluminous silk cape featuring Marks silk flowers and jet-black pearls.<br/>
                                <br/><br/></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>

                            <div className='col-md-10'>
                                <div className='swedish-prince-text-block-1'>
                                <p><br/>The front row of the Couture shows in Paris are the epicentre of the fashion industry. The House of Dior the Emperor. I look forward to my Couture Show in the city of lights, however today in this moment preparing Fredrik for Dior, The House that has inspired me from a young man…Is a personal triumph!<br/>
                <br/><div className='initials'>MB</div></p>
                                </div>
                            </div>
                            <div className='swedish-prince-6 col-md-7'>
                                <img src={require('../../images/mark-belford-dior-6.webp')} height='100%' width='100%' /> 
                            </div>
                            <div className='swedish-prince-text-block-2 col-md-6 sml'>
                                <p><br/><br/><br/>Fredrik Robertson, Dominates the front row of The Dior Couture Show Paris in Mark Belford Couture. Magnificent in Mark Belford Couture. Black Silk Peau De Soie structured shift dress with signature Mark Belford cuff. An extraordinary voluminous silk cape featuring Marks silk flowers and jet-black pearls.<br/>
                                <br/><br/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content bottom'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-4 col-clear-sml'></div>
                            <div className='swedish-prince-1 col-md-8'>
                                <img src={require('../../images/mark-belford-dior-2.webp')} height='100%' width='100%' /> 
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='swedish-prince-text-block-2 adj-out col-md-8'>
                                <p>‘A lot of people think I dress for attention: I don’t. I just happen to love fashion and have always liked the idea that what I wear changes how people look at and think of me. I don’t feel that I have one style; I create characters with my style. I like to dress how I feel, and I like to dress for the occasion. If I’m going to a gala, I do gala; at the couture in Paris, I go all out. I don’t limit myself, and I love to have fun with fashion.’ Fredrik Anderson – Vogue</p>
                            </div>
                            <div className='swedish-prince-4 col-md-6'>
                                <img src={require('../../images/mark-belford-dior-4.webp')} height='100%' width='100%' /> 
                            </div>
                            <div className='col-md-6'></div>
                        </div>
                    </div>    
                </div>
            </section>
            <section className='content bottom'>
                <div className='row'>
                <div className='col-md-4'></div>
                    <div className='big-quote col-md-6'>
                        &quot;I create characters with my style&quot;
                    </div>
                </div>
            </section>
            <section className='content bottom'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6 col-clear-sml'></div>
                            <div className='swedish-prince-5 col-md-6'>
                                <img src={require('../../images/mark-belford-dior-5.webp')} height='100%' width='100%' /> 
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='swedish-prince-3 col-md-8'>
                                <img src={require('../../images/mark-belford-dior-3.webp')} height='100%' width='100%' /> 
                            </div>
                            <div className='col-md-4 col-clear-sml'></div>
                            <div className='swedish-prince-7 col-md-3'>
                                <img src={require('../../images/mark-belford-dior-7.webp')} height='100%' width='100%' /> 
                            </div>
                        </div>
                    </div>    
                </div>
            </section>
            */}
            {/*<iframe src="https://player.vimeo.com/video/812567091?h=b7023dcf6d" width="640" height="1131" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>*/}
            {/*
            <div className='swedish-prince-7 col-md-2'>
                <img src={require('../../images/mark-belford-dior-7.webp')} height='100%' width='100%' /> 
            </div>
            */}

            





        </main>
    );
};

export default SwedishPrince;