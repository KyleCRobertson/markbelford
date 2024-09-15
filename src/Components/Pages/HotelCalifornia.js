import React, {useRef } from 'react';
import palmTree from '../../images/palm-tree.svg';
import palmTreeThin from '../../images/palm-tree-thin.svg';
import styles from '../styles/HotelCalifornia.module.css';
import stylesCollection from '../styles/Collections.module.css';


const HotelCalifornia = () => {
    const anchor1 = useRef(null);
    const anchor2 = useRef(null);
    const anchor3 = useRef(null);
    const anchor4 = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    return(
        <main>
            <div className='page-marker'></div>
            <section className='content content-top large-adjust'>
                <div className={styles.heroHeader}>
                    <h1>
                        <div className={styles.adj1}>hotel</div><div className={styles.adj2}>California</div>
                    </h1>
                    <div className={styles.palmTree}>
                        <picture>
                            <img src={palmTree} alt='Mark Belford hand sketched Palm Tree' height='100%' width='100%' />
                        </picture>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-2 col-xxl-3'></div>
                    <div className={`col-lg-8 col-xxl-6 ${styles.contentTopParagraph}`}>
                        <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </h6>
                    </div>
                    <div className='col-md-3 lrg-1'></div>
                </div>
                <div className='row'>
                    {/*<div className='col-md-2 lrg-1'></div>*/}
                    <div className='col-xxxxl-2'></div>
                    <div className='col-xxs-6 col-sm-6 col-lg-3 col-xxxxl-2'>
                        <div className={styles.imageBtn}>
                        <a onClick={() => {scrollToSection(anchor1)}}>
                            <picture>
                                <img src={require('../../images/hotel-california-block-2.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' className={styles.topImageBlock} />
                            </picture>
                            </a>
                        </div>
                        <div className={styles.imageBtnNames}>
                            Desire
                        </div>
                    </div>
                    <div className='col-xxs-6 col-sm-6 col-lg-3 col-xxxxl-2'>
                        <div className={styles.imageBtn}>
                            <a onClick={() => {scrollToSection(anchor2)}}>
                            <picture>
                                <img src={require('../../images/hotel-california-block-1.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' className={styles.topImageBlock} />
                            </picture>
                            </a>
                        </div>
                        <div className={styles.imageBtnNames}>
                            Envy
                        </div>
                    </div>
                    <div className='col-xxs-6 col-sm-6 col-lg-3 col-xxxxl-2'>
                        <div className={styles.imageBtn}>
                            <a onClick={() => {scrollToSection(anchor3)}}>
                            <picture>
                                <img src={require('../../images/hotel-california-block-3.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' className={styles.topImageBlock} />
                            </picture>
                            </a>
                        </div>
                        <div className={styles.imageBtnNames}>
                            Lusty
                        </div>
                    </div>
                    <div className='col-xxs-6 col-sm-6 col-lg-3 col-xxxxl-2'>
                        <div className={styles.imageBtn}>
                            <a onClick={() => {scrollToSection(anchor4)}}>
                            <picture>
                                <img src={require('../../images/hotel-california-block-4.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' className={styles.topImageBlock} />
                            </picture>
                            </a>
                        </div>
                        <div className={styles.imageBtnNames}>
                            Tasty
                        </div>
                    </div>
                </div>
            </section>
            {/*---------- /TOP BLOCK ----------*/}
            {/*---------- DRESS 1 ----------*/}
            <a className={stylesCollection.pageAnchor} ref={anchor1} />
            <section className='content'>
                <div className='row'>
                    <div className={`col-md-6 col-lg-8 col-xxl-6 ${stylesCollection.fullBleedFlushLeft}`}>
                        <figure>
                            <picture>
                                <img src={require('../../images/mark-belford-hotel-california-Lrg-1.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-md-11 col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-sm-10 col-md-12 col-xl-10 col-xxl-8'>
                                <div className='vertical-center-block'>
                                    <h2 className='hot-pink'>A mesmerizing<br/>silhouette<br/>that commands<br/>attention</h2>
                                    <p>
                                    Fall in love with the structured corseted bodice, adorned with our signature cups, that beautifully accentuates your curves. The voluminous cocktail skirt, supported by layers of pleated silk organza in the hand-made crinoline underneath, creates a mesmerizing silhouette that commands attention. Completing the ensemble with a couture finish, the box-pleated silk trim adds an extra touch of refinement. To complement this extraordinary dress, we present a Venetian lace evening jacket, delicately prepared in the lightest Venetian lace, featuring a scalloped sleeve and neckline that exude grace and allure.
                                    </p>
                                    <div className='e-comerce-link-2'>
                                    <a href='https://www.markbelfordcouture.com/' target='blank' >Own a piece of the collection</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*---------- /DRESS 1 ----------*/}
            {/*---------- DRESS 2 ----------*/}
            <a className={stylesCollection.pageAnchor} ref={anchor2} />
            <section className='content'>
                <div className='row'>
                    <div className={`col-lg-6 ${stylesCollection.fullBleedFlushLeft}`}>
                        <figure>
                            <picture>
                                <img src={require('../../images/mark-belford-hotel-california-Lrg-2.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-md-10 col-xxl-8'>
                                <div className='vertical-center-block'>
                                    <h2 className='hot-pink'>A mesmerizing<br/>silhouette<br/>that commands<br/>attention'</h2>
                                    <p>
                                    Fall in love with the structured corseted bodice, adorned with our signature cups, that beautifully accentuates your curves. The voluminous cocktail skirt, supported by layers of pleated silk organza in the hand-made crinoline underneath, creates a mesmerizing silhouette that commands attention. Completing the ensemble with a couture finish, the box-pleated silk trim adds an extra touch of refinement. To complement this extraordinary dress, we present a Venetian lace evening jacket, delicately prepared in the lightest Venetian lace, featuring a scalloped sleeve and neckline that exude grace and allure.
                                    </p>
                                    <div className='e-comerce-link-2'>
                                    <a href='https://www.markbelfordcouture.com/' target='blank' >Own a piece of the collection</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*---------- /DRESS 2 ----------*/}
            {/*---------- DRESS 3 ----------*/}
            <a className={stylesCollection.pageAnchor} ref={anchor3} />
            <section className='content'>
                <div className='row'>
                    <div className={`col-lg-6 ${stylesCollection.fullBleedFlushLeft}`}>
                        <figure>
                            <picture>
                                <img src={require('../../images/mark-belford-hotel-california-Lrg-3.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-md-10 col-xxl-8'>
                                <div className='vertical-center-block'>
                                    <h2 className='hot-pink'>A mesmerizing<br/>silhouette<br/>that commands<br/>attention'</h2>
                                    <p>
                                    Fall in love with the structured corseted bodice, adorned with our signature cups, that beautifully accentuates your curves. The voluminous cocktail skirt, supported by layers of pleated silk organza in the hand-made crinoline underneath, creates a mesmerizing silhouette that commands attention. Completing the ensemble with a couture finish, the box-pleated silk trim adds an extra touch of refinement. To complement this extraordinary dress, we present a Venetian lace evening jacket, delicately prepared in the lightest Venetian lace, featuring a scalloped sleeve and neckline that exude grace and allure.
                                    </p>
                                    <div className='e-comerce-link-2'>
                                    <a href='https://www.markbelfordcouture.com/' target='blank' >Own a piece of the collection</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*---------- /DRESS 3 ----------*/}
            {/*---------- DRESS 4 ----------*/}
            <a className={stylesCollection.pageAnchor} ref={anchor4} />
            <section className='content'>
                <div className='row'>
                    <div className={`col-lg-9 col-xxl-6 ${stylesCollection.fullBleedFlushLeft}`}>
                        <figure>
                            <picture>
                                <img src={require('../../images/mark-belford-hotel-california-Lrg-4.webp')} alt='Mark Belford Silver Gown' height='100%' width='100%' />
                            </picture>
                        </figure>
                    </div>
                    <div className='col-lg-5 col-xl-6'>
                        <div className='row'>
                            <div className='col-xxl-2'></div>
                            <div className='col-md-10 col-xl-10 col-xxl-8'>
                                <div className='vertical-center-block'>
                                    <h2 className='hot-pink'>A mesmerizing<br/>silhouette<br/>that commands<br/>attention'</h2>
                                    <p>
                                    Fall in love with the structured corseted bodice, adorned with our signature cups, that beautifully accentuates your curves. The voluminous cocktail skirt, supported by layers of pleated silk organza in the hand-made crinoline underneath, creates a mesmerizing silhouette that commands attention. Completing the ensemble with a couture finish, the box-pleated silk trim adds an extra touch of refinement. To complement this extraordinary dress, we present a Venetian lace evening jacket, delicately prepared in the lightest Venetian lace, featuring a scalloped sleeve and neckline that exude grace and allure.
                                    </p>
                                    <div className='e-comerce-link-2'>
                                    <a href='https://www.markbelfordcouture.com/' target='blank' >Own a piece of the collection</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*---------- /DRESS 4 ----------*/}
            {/*---------- PALM TREE MESSAGE ----------*/}
            <section className='content middle-big-pad'>
                <div className='row'>
                    <div className='col-xxs-5 col-sm-5 col-md-6'></div>
                    <div className='col-xxs-7 col-sm-5 col-md-3'>
                        <div className={styles.palmText}>
                            <h2 className='hot-pink text-align-right'>Welcome<br/>to the<br/>Hotel<br/>California</h2>
                        </div>
                        <div className={styles.palmTreeBottom}>
                            <picture>
                                <img src={palmTreeThin} />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
            {/*---------- /PALM TREE MESSAGE ----------*/}
        </main>
    );
};

export default HotelCalifornia;