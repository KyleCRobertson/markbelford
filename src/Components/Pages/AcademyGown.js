import React from 'react';
import styles from '../styles/AcademyGown.module.css';
import stylesCollection from '../styles/Collections.module.css';

const AcademyGown = () => {
    return(
        <main>
            <div className='page-marker'></div>
            <section className='content content-top large-adjust'>
                <div className='row'>
                    <div className={styles.heroHeader}>
                        <h1>
                            <div className={styles.adj1}>the</div><div className={styles.adj2}><span className={styles.kernA}>A</span>cademy</div><div className={styles.adj3}>Gown</div>
                        </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-2 col-xxl-3 lrg-1'></div>
                    <div className={`col-xl-8 col-xxl-6 ${stylesCollection.contentTopParagraph}`}>
                        <h6>
                        Prepare to grace the red carpet in absolute splendor with our stunning creation, "The Academy Awards" gown. Crafted from Italian metallic silk, meticulously dyed in Italy to achieve a mesmerizing bright orange hue, this masterpiece pays homage to the timeless elegance of 1950s color dresses while presenting a modern twist.
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
                    <div className="col-md-6 col-lg-8 col-xxl-6">
                        <div className={stylesCollection.fullBleed}>
                            <figure>
                                <picture className='image-full'>
                                    <img src={require('../../images/mark-belford-academy-gown-Lrg-1.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                                </picture>
                            </figure>
                        </div>
                    </div>
                    <div className='col-md-11 col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-10 col-xxl-8'>
                                <div className='vertical-center-block'>
                                    <h2 style={{color:'#fd1d86'}}>
                                        Flawlessly<br/>Accentuate<br/>Your<br/>Silhouette
                                    </h2>
                                    <p className='white-text'>Behold the technical brilliance concealed within this breathtaking gown, featuring a structured bodice and a half corset that flawlessly accentuates your silhouette. Every drape is meticulously executed, resulting in a perfect cascade down the straight evening skirt, exuding an air of refined sophistication.</p>
                                    <div className='e-comerce-link-2'>
                                        <a href='https://www.markbelfordcouture.com/' target='blank' >Shop Mark Belford Couture</a>
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
                                    <img src={require('../../images/mark-belford-academy-gown-Lrg-3.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-md-10 col-lg-8'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-academy-gown-Lrg-4.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-6 col-xxl-8'>
                                <h2 style={{color:'#fd1d86'}}>The Magic of<br/>a Bygone Era</h2>
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
                                    <img src={require('../../images/mark-belford-academy-gown-Lrg-2.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
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

export default AcademyGown;