import React from 'react';
import styles from '../styles/homeStyles.module.css';

function MarkBelfordIndex() {
  return (
    <main>
      <section className={`content ${styles.landingPageTop} ${styles.landingBackground}`}>
        <div className={styles.landingPageTopInner}>
          <div className='row'>
            <div className={`col-sm-6 col-xl-7 col-xxl-5 ${styles.landingPageTopTextBlock}`}>
              <h1 className={`${styles.darkBackground} ${styles.home}`}>Where Style Meets the Silver Screen: Celebrated Canadian Designer Mark Belford Dazzles Film, Celebrities, and Socialites!</h1>
            </div>
          </div>
        </div>
        <div className='header-marker'></div>
      </section>
      <section className={`content large-adjust ${styles.homeSectionBTF1}`}>
      <div className={styles.butterfieldEightHeader}>
                    <h1>
                        <div className={styles.adj1}>the</div><div className={styles.adj2}>Butterfield</div><div className={styles.adj3}>8</div>
                    </h1>
                </div>
                <div className='row'>
                    <div className='col-xl-2 col-xxl-3 lrg-1'></div>
                    <div className={`col-xl-8 col-xxl-6 ${styles.contentTopParagraph}`}>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </h6>
                    </div>
                    <div className='col-xl-2 col-xxl-3 lrg-1'></div>
                </div>
            </section>
            <section className='content full-page'>
                <div className='half-page-left'>
                    <picture>
                        <img src={require('../../images/mark-belford-black-lace-2.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                    </picture>
                </div>
                <div className='half-page-right'>
                    <div className='row vertical-center'>
                        <div className='col-md-7'></div>
                        <div className='col-md-4'>
                            <div className='half-page-text-block'>
                                <h2 style={{color:'#fd1d86'}}>
                                    <span className={styles.quotePullBack}>'Every</span><br/>Mark Belford<br/>design is<br/>the ultimate<br/>expression of<br/>a client's<br/>inner beauty'
                                </h2>
                                <p>
                                    Uts enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className='e-comerce-link-2'>
                                    <a href='https://www.markbelfordcouture.com/' target='blank' >Own a piece of the collection</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content middle-big-pad landing-page-bottom'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <p className='lrg'>
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Arcu dui vivamus arcu felis. Tellus id interdum velit laoreet id donec ultrices. Sed ullamcorper morbi tincidunt ornare massa eget. Molestie a iaculis at erat pellentesque adipiscing. Nec nam aliquam sem et tortor consequat id porta.<br/>
                            <br/>
                        </p>
                        <div className='col-xs-12 col-md-9 right-align'>
                            <img src={require('../../images/mark-belford-silver-dress-1.webp')} height='auto' width='100%' /></div>
                        </div>
                        <p className='sml'>
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Arcu dui vivamus arcu felis. Tellus id interdum velit laoreet id donec ultrices. Sed ullamcorper morbi tincidunt ornare massa eget. Molestie a iaculis at erat pellentesque adipiscing. Nec nam aliquam sem et tortor consequat id porta.<br/>
                            <br/>
                            <br/>
                        </p>   
                        <div className='col-sm-6'>
                            <img src={require('../../images/menu-background-1.webp')} height='auto' width='100%' />
                            <div className='row'>
                                <div className='col-sm-1'></div>
                                <div className='col-xs-12 col-md-6 col-xxl-9'>
                                    <br/>
                                    <h2 style={{color:'#fd1d86'}}>
                                        <span className={styles.quotePullBack}>'One more</span><br/>Tag Line<br/>Can Go<br/>Here'
                                    </h2>
                                </div>
                        </div>
                    </div>               
                </div>
            </section>
        </main>
    );
};

export default MarkBelfordIndex;