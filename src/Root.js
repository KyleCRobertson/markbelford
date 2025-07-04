import { Outlet } from 'react-router-dom';
import HeaderContainer from './header/HeaderContainer';
import Footer from './footer/Footer';

export default function Root() {
    return (
        <>
            <HeaderContainer />
            <Outlet />
            <Footer />
        </>
    )
}