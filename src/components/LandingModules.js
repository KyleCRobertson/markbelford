import React, { useEffect } from 'react';



function ShopLinkAnimation (){

    const showHiddenText = () => {
        const hiddenText = document.querySelector('.hidden-text');
        hiddenText.classList.add('on');
    };
    const removeHiddenText = () => {
        const hiddenText = document.querySelector('.hidden-text');
        hiddenText.classList.remove('on');
    };

}
export default ShopLinkAnimation;


