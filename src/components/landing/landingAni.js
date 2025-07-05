import { useState, useEffect } from 'react'; 
import styles from '../../styles/homeStyles.module.scss';
import logo from '../../images/mark-belford-logo-light.svg';
import image1 from '../../images/home/mark-belford-landing-4.webp';
import image2 from '../../images/home/mark-belford-landing-3.webp';
import image3 from '../../images/home/mark-belford-landing-5.webp';

const images = [{ name: 'logo', image: logo }, { name: 'img1', image: image1}, { name: 'img2', image: image2}, { name: 'img3', image: image3}];

export default function LandingAni(){
    //const [ image, setImage ] = useState([{ name: 'img1', image: image1}, { name: 'img2', image: image2}])
    const [ visability, setVisability ] = useState(false);

    /*
    const zash1 = images[0].name;
    const zash2 = images[1].name;
    console.log(zash1);
    console.log(zash2);
    */
    /*
    const startSlideshow = (name) => {
        if(image.name === 'img1'){
            setTimeout(() => {
                setVisability(true);
            }, 3000)
        }
    }
    startSlideshow();
    */
    
    useEffect(() => {
        const imageLogo = document.querySelector('.logo');
        const image1 = document.querySelector('.img1');
        const image2 = document.querySelector('.img2');
        const image3 = document.querySelector('.img3');
        const landingAniBlock = document.querySelector('.landingAni');
        const headerLogo = document.querySelector('.header-logo');
        const headerMenuBtn = document.querySelector('.menu-drop-down-btn');
        const landingText = document.querySelector('.landingTextImg');
        const landingClickText = document.querySelector('.landingClickTextImg');
        const image2img = document.querySelector('.img2 img');
        image2img.classList.add(styles.left)
        const timeoutId1 = setTimeout(() => {
            imageLogo.classList.add(styles.on);
            //setVisability(true);
        }, 500);
        const timeoutId2 = setTimeout(() => {
            image1.classList.add(styles.on);
            imageLogo.classList.remove(styles.on);
            //setVisability(true);
        }, 2500);
        const timeoutId3 = setTimeout(() => {
            image2.classList.add(styles.on);
            image1.classList.remove(styles.on);
            //setVisability(true);
        }, 4500);
        const timeoutId4 = setTimeout(() => {
            image3.classList.add(styles.on);
            image2.classList.remove(styles.on);
            //setVisability(true);
        }, 6500);
        const timeoutId5 = setTimeout(() => {
            landingAniBlock.classList.add(styles.off);
            image3.classList.remove(styles.on);
        }, 8500);
        const timeoutId6 = setTimeout(() => {
            landingAniBlock.classList.add(styles.gone);
        }, 9000);
        const timeoutId7 = setTimeout(() => {
            headerLogo.classList.add('on');
            headerMenuBtn.classList.add('on');
        }, 9200);
        const timeoutId8 = setTimeout(() => {
            landingText.classList.add(styles.on);
        }, 9400);
        const timeoutId9 = setTimeout(() => {
            landingClickText.classList.add(styles.on);
        }, 9600);
        return () => clearTimeout(timeoutId1, timeoutId2, timeoutId3, timeoutId4, timeoutId5, timeoutId6, timeoutId7, timeoutId8, timeoutId9);
    }, []);
    
    /*
    const startSlideshow = () => {
        const timeoutId = setTimeout(() => {
            setVisability(true);
        }, 3000);
        return () => clearTimeout(timeoutId);
    };
    startSlideshow();
    */


    return (
        <div className={`landingAni ${styles.landingAni}`}>
            {/*
            <div>
                <img src={image1} alt='vvv' className={`${styles.landingImg} ${visability ? styles.on : ''}`} />
            </div>
            */}
            
            {images.map(img => {
                let imgName = img.name;
                let imgImage = img.image;
                return (
                <div key={imgName} className={`${styles.landingImgCont} ${imgName} ${visability ? styles.on : ''}`}>
                    <img src={imgImage} alt='landing images' height='100' width='100' className={styles.landingImg} />
                </div>
                )
            })}
        </div>
    )
}