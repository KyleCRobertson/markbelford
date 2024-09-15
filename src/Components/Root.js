import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;