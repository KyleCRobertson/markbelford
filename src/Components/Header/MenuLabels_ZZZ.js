import React from "react";

const MenuLabels = () => {

// MENU LABELS
const menuLabelText = menuLabel;
const menuLabelReset = () => {
    setMenuLabel(null);
    const header = document.getElementById("header");
    header.classList.remove("dark");
}
const menuLabel1on = () => {
    const navLink1 = document.querySelector('.drop-down-menu .menu ul .nav-link.nav-1');
    const newMenuLable = menuLabels[0]; 
    setMenuLabel(newMenuLable);
    navLink1.classList.add('on');
    }
const menuLabel2on = () => {
    const newMenuLable = menuLabels[1]; 
    setMenuLabel(newMenuLable);
    }
const menuLabel3on = () => {
    const newMenuLable = menuLabels[2];
    setMenuLabel(newMenuLable);
    }
const menuLabel4on = () => {
    const newMenuLable = menuLabels[3]; 
    setMenuLabel(newMenuLable);
    }
const menuLabel5on = () => {
    const newMenuLable = menuLabels[4]; 
    setMenuLabel(newMenuLable);
    }
// MENU LABELS

}

export default MenuLabels;