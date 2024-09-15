import React, { useState } from 'react';
import styles from '../styles/FairmontFashion.module.css';
import stylesCollection from '../styles/Collections.module.css';

const CAFAawards = () => {
    return (
        <main>
            <div className='page-marker'></div>
            <section className='content content-top large-adjust'>
                <div className={styles.heroHeader}>
                    <h1>
                        <div className={styles.adj1}>Fairmont</div><div className={styles.adj2}>Fashion</div>
                    </h1>
                </div>
                <div className='row'>
                    <div className='col-md-2 col-xl-2 col-xxl-3'></div>
                    <div className={`col-md-8 col-xl-8 col-xxl-6 ${stylesCollection.contentTopParagraph}`}>
                        <h6>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                        </h6>
                    </div>
                    <div className='col-xl-2 col-xxl-3'></div>
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
            <section className='content full-page'>
                <div className='half-page-left'>
                    <picture className='image'>
                        <img src={require('../../images/events/mark-belford-FairmontFashion-Lrg-1.webp')} alt='Model standing in front of mirror in the Butterfield 8 coat and dress' height='100%' width='100%' />
                    </picture>
                </div>
                <div className='half-page-right'>
                    <div className='row vertical-center'>
                        <div className='col-md-7'></div>
                        <div className='col-md-4'>
                            <div className='half-page-text-block'>
                                <h2 style={{color:'#fd1d86'}}>
                                    <span className={stylesCollection.quotePullBack}>'New Tagline</span><br/>to go Here'
                                </h2>
                                <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                            <picture className='image'>
                                <img src={require('../../images/events/mark-belford-FairmontFashion-Lrg-2.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                            </picture>
                        </div>
                        <div className='col-xs-12 col-lg-6 right-align'>
                            <picture className='image'>
                                <img src={require('../../images/events/mark-belford-FairmontFashion-Lrg-7.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                            </picture>
                        </div>
                        <div className='col-xs-12 col-lg-8 right-align'>
                            <p className='lrg'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.<br/><br/></p>
                        </div>
                    </div> 


                        
                         
                    <div className='col-sm-6'>
                        <div className='row'>
                            <div className='col-sm-8'>
                            <picture className='image'>
                                <img src={require('../../images/events/mark-belford-FairmontFashion-Lrg-3.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                            </picture>
                            </div>
                            <div className='col-sm-10'>
                                <picture className='image'>
                                    <img src={require('../../images/events/mark-belford-FairmontFashion-Lrg-4.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-sm-6'>
                                <picture className='image'>
                                    <img src={require('../../images/events/mark-belford-FairmontFashion-Lrg-6.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-sm-8'>
                                <picture className='image'>
                                    <img src={require('../../images/events/mark-belford-FairmontFashion-Lrg-5.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                </picture>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xs-12 col-md-6 col-xxl-9'>
                                <br/>
                                <h2 style={{color:'#fd1d86'}}>
                                    <span className={stylesCollection.quotePullBack}>'New Tagline</span><br/>to go Here'
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