

import { useEffect } from 'react';
import styles from '../styles/CustomSizing.module.css';
import { ScrollToTop } from '../modules/scrollToTop';

export default function CustomSizing(){

    useEffect(() => {
        ScrollToTop();
    }, []);

    
    return(
        <main>
            <div className='page-marker'></div>
            <section className='content fixed-top'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h1 className='hot-pink'>Custom Sizing<br/><br/></h1>
                    </div>
                </div>
            </section>
            <section className='content'>
                <div className="row content-centre-vert">
                    <div className='col-md-4 relative order-md-1'>
                        <div className={styles.sizingImage1}>
                            <picture>
                                <source media='(max-width:500px)' srcSet={require('../../images/sizing/Mark-Belford-Custom-Sizing-Chart-1.webp')} />
                                <source srcSet={require('../../images/sizing/Mark-Belford-Custom-Sizing-Chart-1.webp')} />
                                <img src={require('../../images/sizing/Mark-Belford-Custom-Sizing-Chart-1.webp')} alt='Model wearing the Mark Belford Coronation Gown' height='100%' width='100%' loading='lazy' />
                            </picture>
                        </div>
                    </div>
                    <div className='col-md-4 relative order-md-2'>
                        <div className={styles.sizingLabel1}>Bust Measurement</div>
                    </div>
                    <div className='col-md-4 relative order-md-1'>
                        <div className={styles.sizingImage2}>
                            <picture>
                                <source media='(max-width:500px)' srcSet={require('../../images/sizing/Mark-Belford-Custom-Sizing-Chart-2.webp')} />
                                <source srcSet={require('../../images/sizing/Mark-Belford-Custom-Sizing-Chart-2.webp')} />
                                <img src={require('../../images/sizing/Mark-Belford-Custom-Sizing-Chart-2.webp')} alt='Model wearing the Mark Belford Coronation Gown' height='100%' width='100%' loading='lazy' />
                            </picture>
                        </div>
                    </div>
                    <div className='col-md-4 relative order-md-2'>
                        <div className={styles.sizingLabel2}>Waist Measurement</div>
                    </div>
                    <div className='col-md-4 relative order-md-1'>
                        <div className={styles.sizingImage2}>
                            <picture>
                                <source media='(max-width:500px)' srcSet={require('../../images/sizing/Mark-Belford-Custom-Sizing-Chart-3.webp')} />
                                <source srcSet={require('../../images/sizing/Mark-Belford-Custom-Sizing-Chart-3.webp')} />
                                <img src={require('../../images/sizing/Mark-Belford-Custom-Sizing-Chart-3.webp')} alt='Model wearing the Mark Belford Coronation Gown' height='100%' width='100%' loading='lazy' />
                            </picture>
                        </div>
                    </div>
                    <div className='col-md-4 relative order-md-2'>
                        <div className={styles.sizingLabel3}>Hip Measurement</div>
                    </div>
                </div>
            </section>
            <section className={`content ${styles.sizingContent2}`}>
                <div className='row'>
                    <div className='col-xxxl-1'></div>
                    <div className={`col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5 col-xxxl-4 ${styles.sizingChartOuter}`}>
                        <div className={styles.sizingChartLabel}>
                            Women's Size Chart<br/>
                        </div>
                        <div className={styles.sizingChartContainer}>
                            <div className={`row ${styles.sizingChart}`}>
                                <div className='col-xxs-1 col-sm-1'>
                                    <div className={styles.sizeLabel}>Size</div>
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className='col-xxs-3 col-sm-3'>
                                    <div className={styles.catagoryLabel}>Chest</div>
                                </div>
                                <div className='col-xxs-3 col-sm-3'>
                                    <div className={styles.catagoryLabel}>Waist</div>
                                </div>
                                <div className='col-xxs-3 col-sm-3'>
                                    <div className={styles.catagoryLabel}>Hip</div>
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-1 col-sm-1 ${styles.size}`}>
                                    0
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    30 <span className={styles.hyphen}>-</span> 31
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    23 <span className={styles.hyphen}>-</span> 24
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    32 <span className={styles.hyphen}>-</span> 33
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-1 col-sm-1 ${styles.size}`}>
                                    2
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    30 <span className={styles.hyphen}>-</span> 31
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    23 <span className={styles.hyphen}>-</span> 24
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    32 <span className={styles.hyphen}>-</span> 33
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-1 col-sm-1 ${styles.size}`}>
                                    4
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    30 <span className={styles.hyphen}>-</span> 31
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    23 <span className={styles.hyphen}>-</span> 24
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    32 <span className={styles.hyphen}>-</span> 33
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-1 col-sm-1 ${styles.size}`}>
                                    6
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    30 <span className={styles.hyphen}>-</span> 31
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    23 <span className={styles.hyphen}>-</span> 24
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    32 <span className={styles.hyphen}>-</span> 33
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-1 col-sm-1 ${styles.size}`}>
                                    8
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    30 <span className={styles.hyphen}>-</span> 31
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    23 <span className={styles.hyphen}>-</span> 24
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    32 <span className={styles.hyphen}>-</span> 33
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-1 col-sm-1 ${styles.size}`}>
                                    10
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    30 <span className={styles.hyphen}>-</span> 31
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    23 <span className={styles.hyphen}>-</span> 24
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    32 <span className={styles.hyphen}>-</span> 33
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-1 col-sm-1 ${styles.size}`}>
                                    12
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    30 <span className={styles.hyphen}>-</span> 31
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    23 <span className={styles.hyphen}>-</span> 24
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    32 <span className={styles.hyphen}>-</span> 33
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-1 col-sm-1 ${styles.size}`}>
                                    16
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    30 <span className={styles.hyphen}>-</span> 31
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    23 <span className={styles.hyphen}>-</span> 24
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number}`}>
                                    32 <span className={styles.hyphen}>-</span> 33
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-1 col-sm-1 ${styles.size2}`}>
                                    18
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number2}`}>
                                    30 <span className={styles.hyphen}>-</span> 31
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number2}`}>
                                    23 <span className={styles.hyphen}>-</span> 24
                                </div>
                                <div className={`col-xxs-3 col-sm-3 ${styles.number2}`}>
                                    32 <span className={styles.hyphen}>-</span> 33
                                </div>
                                <div className='col-xxs-1 col-sm-1'></div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-sm-10 col-lg-5 col-xxl-5 ${styles.sizingTextBlock}`}>
                        <div className='spec-text-3'>Get ready to<br/>embrace the<br/>modern fashion<br/>revolution...</div>
                        <p>with a skip in your step and a smile on your face! Our sensational sizing solution is all about simplicity and joy. Just take a moment to measure your bust, waist, and hips – it's as easy as that! With our mesmerizing measurement illustration and size chart, finding your perfect fit becomes an effortless delight. Let go of any worries, because we're here to celebrate your unique body shape and help you radiate positivity. Say hello to a beautifully structured look that accentuates your natural beauty. So, join us on this fashionable adventure, where happiness and style go hand in hand. It's time to celebrate your measurements and rock your confidence with flair!<br/>
                        Chin up, chest out!</p><h5 className='benguiatCaslon hot-pink'>M XOXOX</h5><br/><br/><br/><br/><br/>
                    </div>
                </div>
            </section>
        </main>
    );
};