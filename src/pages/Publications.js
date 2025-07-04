
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import FooterBanner from '../footer/FooterBanner';
import { ScrollToTop } from '../components/scrollToTop';
import styles from '../styles/Publications.module.scss';
import pdf from '../downloads/ElegantMag-HomageToLiz.pdf';
import pdf2 from '../downloads/FQ.Holiday.pdf';
import pdf3 from '../downloads/HelloCanada.pdf';
import pdf4 from '../downloads/Dolce_volume_26_issue 4_2022_23_Federico Bernardeschi.pdf';
import pdf5 from '../downloads/InStyle_June_2012.pdf';
import pdf6 from '../downloads/Donato_Spring_2008.pdf';
import bannerImage from '../images/publications/mark-belford-publications-footer.webp';

export default function Publications(){
    useEffect(() => {
        ScrollToTop()
    });
    return(
        <main>
            <div className='page-marker'></div>
            <section className='content content-top fixed-top'>
                <div className='row'>
                    <div className=''>
                        <h1 className={`hot-pink ${styles.pageHeader}`}>Mark Belford<br/>in the Press<br/><br/></h1>
                    </div>
                </div>
                {/*---------- ARTICLE ----------*/}
                <div className="row">
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
                <div className="row">
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
                <div className="row">
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
                <div className="row">
                    <div className='col-md-2'></div>
                    <div className={`col-md-8 ${styles.article}`}>
                        <NavLink to={pdf2} target='blank'>
                        <div className={`hot-pink ${styles.articlePeriodical}`}>Fashion Quarterly Magazine</div>
                        <div className={styles.articleDate}>Holiday 2008</div>
                        <h3 className={styles.articleTitle}>Front Cover, Holiday's Romantic Edge</h3>
                        </NavLink>
                    </div>
                </div>
                {/*---------- /ARTICLE ----------*/}
                {/*---------- ARTICLE ----------*/}
                <div className="row">
                    <div className='col-md-2'></div>
                    <div className={`col-md-8 ${styles.article}`}>
                        <NavLink to={pdf6} target='blank'>
                        <div className={`hot-pink ${styles.articlePeriodical}`}>Donato Magazine</div>
                        <div className={styles.articleDate}>Spring 2008</div>
                        <h3 className={styles.articleTitle}>Gown, Mark Belford Couture</h3>
                        </NavLink>
                    </div>
                </div>
                {/*---------- /ARTICLE ----------*/}
                {/*---------- ARTICLE ----------*/}
                <div className="row">
                    <div className='col-md-2'></div>
                    <div className={`col-md-8 ${styles.article} ${styles.articleLast}`}>
                        <NavLink to={pdf3} target='blank'>
                        <div className={`hot-pink ${styles.articlePeriodical}`}>Hello Canada</div>
                        <div className={styles.articleDate}>Spring 2013</div>
                        <h3 className={styles.articleTitle}>Academy Awards Commentary</h3>
                        </NavLink>
                    </div>
                </div>
                {/*---------- /ARTICLE ----------*/}
            </section>
            <FooterBanner bannerImage={bannerImage} />
        </main>
    );
}