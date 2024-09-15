import React from 'react';
import styles from '../styles/Publications.module.css';
import { NavLink } from 'react-router-dom';
import pdf from '../../Downloads/ElegantMag-HomageToLiz.pdf';
import pdf2 from '../../Downloads/FQ.Holiday.pdf';
import pdf3 from '../../Downloads/HelloCanada.pdf';
import pdf4 from '../../Downloads/Dolce_volume_26_issue 4_2022_23_Federico Bernardeschi.pdf';
import pdf5 from '../../Downloads/InStyle_June_2012.pdf';

const Publications = () => {
    return(
        <main>
            <div className='page-marker'></div>
            <section className='content top-block'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>Publications</h1>
                    </div>
                </div>
            </section>
            <section className='content bottom-block'>
                {/*---------- ARTICLE ----------*/}
                <div className={`row ${styles.articleContainer}`}>
                    <div className='col-md-2'></div>
                    <div className={`col-md-8 ${styles.article}`}>
                        <NavLink to={pdf4} target='blank'>
                        <div className={`hot-pink ${styles.articlePeriodical}`}>Dolce Magazine</div>
                        <div className={styles.articleDate}>November 2022</div>
                        <h3 className={styles.articleTitle}>Veronica Ciardi Wears Mark Belford</h3>
                        </NavLink>
                    </div>
                </div>
                {/*---------- /ARTICLE ----------*/}
                {/*---------- ARTICLE ----------*/}
                <div className={`row ${styles.articleContainer}`}>
                <div className='col-md-2'></div>
                    <div className={`col-md-8 ${styles.article}`}>
                        <NavLink to={pdf} target='blank'>
                        <div className={`hot-pink ${styles.articlePeriodical}`}>Elegant Magazine</div>
                        <div className={styles.articleDate}>November 2016</div>
                        <h3 className={styles.articleTitle}>Homage To Liz</h3>
                        </NavLink>
                    </div>
                </div>
                {/*---------- /ARTICLE ----------*/}
                {/*---------- ARTICLE ----------*/}
                <div className={`row ${styles.articleContainer}`}>
                    <div className='col-md-2'></div>
                    <div className={`col-md-8 ${styles.article}`}>
                        <NavLink to={pdf5} target='blank'>
                        <div className={`hot-pink ${styles.articlePeriodical}`}>In Style Magazine</div>
                        <div className={styles.articleDate}>June 2012</div>
                        <h3 className={styles.articleTitle}>Morena Baccarin in Mark Belford</h3>
                        </NavLink>
                    </div>
                </div>
                {/*---------- /ARTICLE ----------*/}
                {/*---------- ARTICLE ----------*/}
                <div className={`row ${styles.articleContainer}`}>
                    <div className='col-md-2'></div>
                    <div className={`col-md-8 ${styles.article}`}>
                        <NavLink to={pdf2} target='blank'>
                        <div className={`hot-pink ${styles.articlePeriodical}`}>Fashion Quarterly Magazine</div>
                        <div className={styles.articleDate}>Holiday 2008</div>
                        <h3 className={styles.articleTitle}>Front Cover</h3>
                        </NavLink>
                    </div>
                </div>
                {/*---------- /ARTICLE ----------*/}
                {/*---------- ARTICLE ----------*/}
                <div className={`row ${styles.articleContainer}`}>
                    <div className='col-md-2'></div>
                    <div className={`col-md-8 ${styles.article} ${styles.articleLast}`}>
                        <NavLink to={pdf3} target='blank'>
                        <div className={`hot-pink ${styles.articlePeriodical}`}>Hello Canada</div>
                        <div className={styles.articleDate}>??? ???</div>
                        <h3 className={styles.articleTitle}>Academy Awards Commentary</h3>
                        </NavLink>
                    </div>
                </div>
                {/*---------- /ARTICLE ----------*/}
                
            </section>
        </main>
    );
};

export default Publications;