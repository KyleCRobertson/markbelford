export function headerAppearanceDark(){
    const menuDropDownBtn = document.querySelector('.menu-drop-down-btn');
    const headerLogoText = document.querySelector('.header-logo-text');
    const headerBlock = document.querySelector('header');
    headerBlock.classList.remove('bg-color-on');
    menuDropDownBtn.classList.remove('light');
    headerLogoText.classList.remove('light');
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    };

export function headerAppearanceLight(){
  const menuDropDownBtn = document.querySelector('.menu-drop-down-btn');
  const headerLogoText = document.querySelector('.header-logo-text');
  const headerBlock = document.querySelector('header');
  headerBlock.classList.add('bg-color-on');
  menuDropDownBtn.classList.add('light');
  headerLogoText.classList.add('light');
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };