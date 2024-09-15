import React from 'react';
import styles from '../styles/Mark.module.css';

const MarkBelford = () => {
  return (
    <main>
      <div className='page-marker'></div>
      <section className={`content content-top ${styles.markContent}`}>
        <div className='row'>
          {/*---------- MARKS TEXT ---------*/}
          <div className='col-md-8 col-lg-7 col-xl-7 col-xxl-6 order-md-2 order-xs-1'>
            <div className={styles.heroHeader}>
              <h1>
                <div className={styles.adj1}>Mark</div><div className={styles.adj2}>Belford</div>
              </h1>
            </div>
            <p>Welcome to the effortlessly charming world of Mark Belford Couture, where innovation meets storytelling in a seamless fusion of artistry and elegance. Mark Belford's visionary approach to fashion transcends boundaries, drawing inspiration from the realms of architecture, art, film, jewelry, culture, and music.<br/>
            <br/>
            At the heart of Mark's creative journey lies a passion for storytelling, expressed through his exquisite designs and multi-artistic endeavors. From costume design to conceptual creative direction, Mark's visionary perspective has graced prestigious events such as the Academy Awards, the Grammys, and the Tonys, as well as iconic HBO television series like Sex and the City and its recent continuation, …And Just Like That.<br/>
            <br/>
            In 2006, Mark embarked on his odyssey with Mark Belford Couture, establishing an exclusive Atelier dedicated to crafting Red Carpet Evening Gowns that pay homage to the timeless allure of Old Hollywood glamour. Over the years, his creations have adorned international icons and garnered acclaim at solo museum exhibitions, royal engagements, and charity galas worldwide.<br/>
            <br/>
            Today, Mark Belford Couture continues to enchant global audiences with its exquisite designs, while Mark Belford's visionary work extends to a new frontier with an exclusive accessory and Ready-to-Wear Capsule Collection for 2024. Embraced by premier retailers around the world, Mark's creations epitomize sophisticated sensuality, authenticity, inclusiveness, grace, and the timeless allure of haute couture.<br/>
            <br/>
            Welcome to a world where every creation tells a story, and every detail embodies the essence of Mark Belford.<br/>
            <br/></p>
          </div>
          {/*---------- /MARKS TEXT ---------*/}
          {/*---------- MARKS IMAGE ---------*/}
          <div className='col-sm-7 col-md-4 col-xl-4 col-xxl-5 order-md-1 order-xs-2'>
            <div className='row'>
            <div className='col-xxl-5'></div>
              <div className='col-xxl-7'>
                <div>
                  <picture className='image'>
                    <source srcSet={require('../../images/mark-belford.webp')} type='image/webp' />
                    <img src={require('../../images/mark-belford.png')} alt='' height='100%' width='100%' />
                  </picture>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12 order-md-1 order-xs-2'>
                <h2 className='rag-left hot-pink'>
                    "Right now, in this exact moment, you are authentically your most beautiful version of yourself!"<br/><h4 style={{paddingTop: "7px"}}>- Mark Belford</h4>
                </h2>
              </div>
            </div>
          </div>
          {/*---------- /MARKS IMAGE ---------*/}
        </div>
      </section>
    </main>
  );
};

export default MarkBelford;