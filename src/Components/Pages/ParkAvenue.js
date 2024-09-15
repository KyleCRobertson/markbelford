import React from 'react';
import styles from '../styles/ParkAvenue.module.css';
import stylesCollection from '../styles/Collections.module.css';

const ParkAvenue = () => {
    return(
        <main>
            <div className='page-marker'></div>
            <section className='content content-top large-adjust'>
                    <div className={styles.heroHeader}>
                        <h1>
                            <div className={styles.adj1}>the</div><div className={styles.adj2}>Park</div><div className={styles.adj3}>Avenue</div>
                        </h1>
                </div>
                <div className='row'>
                    <div className='col-xl-2 col-xxl-3 lrg-1'></div>
                    <div className={`col-xl-8 col-xxl-6 ${stylesCollection.contentTopParagraph}`}>
                        <h6>
                        Elevate your Park Avenue style with our captivating creation, the "Park Avenue" Couture cocktail dress. Crafted from luxurious deep Bordeaux-colored French silk chiffon, this exquisite masterpiece embodies the perfect blend of sophistication and sensuality.
                        </h6>
                    </div>
                    <div className='col-xl-2 col-xxl-3 lrg-1'></div>
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
                <picture className='image-full'>
                        <img src={require('../../images/mark-belford-black-lace-dress-1.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                    </picture>
                </div>
                <div className='half-page-right'>
                    <div className='row vertical-center'>
                        <div className='col-md-7'></div>
                        <div className='col-md-4'>
                            <div className='half-page-text-block'>
                                <h2 style={{color:'#fd1d86'}}>
                                    <span className={stylesCollection.quotePullBack}>'An Aura</span><br/>of Elegance<br/>and Grace'
                                </h2>
                                <p className='white-text'>
                                Prepare to be mesmerized by the structured corseted bodice, meticulously designed to accentuate your curves and create a flawless silhouette. Mark's signature cups enhance and celebrate your natural beauty, adding an extra touch of allure. Witness the artistry of razor-sharp rouching that delicately highlights the sensuality of your curves, creating an enchanting visual effect that is both captivating and alluring. With every step, you'll exude an aura of elegance and grace, effortlessly embodying the essence of Park Avenue style.
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
                    <div className='col-lg-6 order-lg-2 order-xs-1'>
                        <div className='row'>
                            <div className='col-md-10 col-lg-12'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-park-avenue-Lrg-3.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-md-10 col-lg-8'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-black-lace-2.webp')} alt='Model standing by mirror in the Butterfield 8 dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <div className='col-xs-12 col-md-6 col-xxl-8'>
                                <h2 style={{color:'#fd1d86'}}>Park Avenue<br/>Exclusivity</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 order-xs-2'>
                        <div className='row justify-content-end-lg'>
                            <p className='lrg'>
                            Experience the magic of this Couture piece and let it transform you into the epitome of glamour and sophistication. Discover the allure of Park Avenue exclusivity.<br/>
                            <br/>
                            </p>
                            <div className='col-xs-12 col-md-8 col-lg-10 col-xxxl-8'>
                                <picture className='image'>
                                    <img src={require('../../images/mark-belford-park-avenue-Lrg-4.webp')} alt='Model looking into mirror in the Butterfield 8 coat and dress' height='auto' width='100%' />
                                </picture>
                            </div>
                            <p className='sml'>
                            <br/>
                            <br/>
                            Experience the magic of this Couture piece and let it transform you into the epitome of glamour and sophistication. Discover the allure of Park Avenue exclusivity.<br/>
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

export default ParkAvenue;