import { useEffect } from 'react';
import FooterBanner from '../footer/FooterBanner';
import { ScrollToTop } from '../components/scrollToTop';
import styles from '../styles/Mark.module.scss';
import bannerImage from '../images/bio/mark-belford-bio-footer.webp';

export default function MarkBelford(){
  useEffect(() => {
    ScrollToTop();
  });
  return (
    <main>
      <div className='page-marker'></div>
      <section className={`content content-top ${styles.markContent}`}>
        <div className='row'>
          {/*---------- MARKS TEXT ---------*/}
          <div className='col-md-8 col-lg-7 col-xl-7 col-xxl-5 order-md-2 order-xs-1'>
            <div className={styles.heroHeader}>
                <div className={styles.adj1}><span className={styles.BenguiatCaslonSpec}>M</span>ark</div><div className={styles.adj2}>Belford</div>
            </div>
            <div className='top-text-lrg'><br/>Creative Director.<br/>Couture Arsonist.<br/>Occasional Threat.</div>
            <p>A Toronto-born creative polymath with the eye of a Parisian gallery curator and the instincts of a war-time strategist, Mark is the designer other designers send flowers to in quiet fear. His work isn't just worn—it’s studied, archived, occasionally stolen, and always remembered.<br/>
            <br/>
            Mark Belford Couture launched in 2006 with one mission: to dismantle mediocrity, one corseted masterpiece at a time. Red carpets? Please. Mark doesn’t just dress the moment—he authors it. From museum solo exhibitions to royal appearances and the smoke-filled back rooms of New York’s fashion elite, his gowns are architectural weapons designed to empower, seduce, and occasionally destroy.<br/>
            <br/>
            </p>
            <h5>But let’s not stop at couture.<br/>
            That would be too... expected.</h5>
            <p>
            Mark’s creative empire includes ready-to-wear pieces that slap convention across the face, large-scale fashion illustrations for your painfully under-decorated penthouse, and merch that serves sarcasm with Swarovski-level sparkle. Everything’s designed, sketched, and conceptualized by Mark himself—because delegation is cute until your vision gets diluted.<br/>
            <br/>
            Need credentials? Try:<br/><br/>
            <span className='bold'>
            HBO’s "And Just Like That" (yes, that one)<br/>
            Paris Vogue<br/>
            The Academy Awards<br/>
            The Grammys<br/>
            Dior-adjacent drama in every seam</span><br/>
            <br/>
            Mark’s muses are misfits, mavens, and women who weaponize elegance. His work is a love letter to structure, subversion, and storytelling—with a hint of emotional damage for good measure.<br/>
            <br/>
            Now go browse. Or stare. Just make sure you’re doing it with clean hands.<br/>
            <br/><br/>
            </p>
          </div>
          {/*---------- /MARKS TEXT ---------*/}
          {/*---------- MARKS IMAGE ---------*/}
          <div className='col-sm-7 col-md-4 col-xl-4 col-xxl-5 order-md-1 order-xs-2'>
            <div className='row'>
            <div className='col-xxl-5'></div>
              <div className='col-xxl-7'>
                <div>
                  <picture className='image'>
                    <img src={require('../images/bio/mark-belford.webp')} alt='Mark Belford Portrait' height='100%' width='100%' />
                  </picture>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12 order-md-1 order-xs-2'>
                <h2 className='rag-left hot-pink'>
                &ldquo;If you’re not a little scared, it’s probably <span className='no-wrap'>not couture.&rdquo;</span><br/><h4 style={{paddingTop: "7px"}}>- Mark Belford</h4>
                </h2>
              </div>
            </div>
          </div>
          {/*---------- /MARKS IMAGE ---------*/}
        </div>
      </section>
      <FooterBanner bannerImage={bannerImage} />
  </main>
  );
};