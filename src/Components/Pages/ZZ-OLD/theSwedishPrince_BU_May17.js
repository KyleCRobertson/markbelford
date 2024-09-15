import React, { useState } from 'react';
import style from '../Styles/theSwedishPrince.module.css';

const theSwedishPrince = () => {
    return (
        <main>
            <section className='content no-pad-sml content-top sml'>
                <div className='swedish-prince-header'>
                    <h1>
                        <span className='adj-1'>the</span><span className='adj-2'>Swedish</span><span className='adj-3'>Prince</span>
                    </h1>
                </div>
                <div className='swedish-prince-2'>
                    <img src={require('../../images/mark-belford-dior-1-sml.webp')} height='100%' width='100%' />
                </div>
                <div className='swedish-prince-text-block-1'>
                    <p>The front row of the Couture shows in Paris are the epicentre of the fashion industry. The House of Dior the Emperor. I look forward to my Couture Show in the city of lights, however today in this moment preparing Fredrik for Dior, The House that has inspired me from a young man…Is a personal triumph!<div className='initials'>MB</div></p>
                </div>
                <div className='swedish-prince-6'>
                    <img src={require('../../images/mark-belford-dior-6.webp')} height='100%' width='100%' /> 
                </div>
                <div className='swedish-prince-text-block-2'>
                    <p>Fredrik Robertson, Dominates the front row of The Dior Couture Show Paris in Mark Belford Couture. Magnificent in Mark Belford Couture. Black Silk Peau De Soie structured shift dress with signature Mark Belford cuff. An extraordinary voluminous silk cape featuring Marks silk flowers and jet-black pearls.</p>
                </div>
            </section>
            <section className='content content-top lrg'>
                <div className='row align-flex-bottom'>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='swedish-prince-header sml'>
                                <h1>
                                    <span className='adj-1'>the</span><span className='adj-2'>Swedish</span><span className='adj-3'>Prince</span>
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
                            <div className='swedish-prince-header col-md-6 lrg-inline'>
                                <h1>
                                    <span className='adj-1'>the</span><span className='adj-2'>Swedish</span><span className='adj-3'>Prince</span>
                                </h1>
                            </div>
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

            {/*<iframe src="https://player.vimeo.com/video/812567091?h=b7023dcf6d" width="640" height="1131" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>*/}
            {/*
            <div className='swedish-prince-7 col-md-2'>
                <img src={require('../../images/mark-belford-dior-7.webp')} height='100%' width='100%' /> 
            </div>
            */}

        </main>
    );
};

export default theSwedishPrince;