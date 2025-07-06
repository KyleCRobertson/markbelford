import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../images/mark-belford-logo-dark.svg';
import logoLight from '../images/mark-belford-logo-light.svg';

export default function HeaderComponent({ label, menuLabelReset, menuClose, menuOpen, headerAppearanceDark, headerAppearanceLight, subMenuCollectionClose, subMenuEventsClose, /*menuLabel1on, menuLabel2on, menuLabel3on, menuLabel4on, menuLabel5on, menuLabel6on,*/ menuBG1, menuBG2, menuBG3, menuBG4, menuBG5, menuBG6, menuUnderline1, menuUnderline2, menuUnderline3, menuUnderline4, menuUnderline5, menuUnderline6, menuStyle1, menuStyle2, menuStyle3, menuStyle4, menuStyle5, menuStyle6, menuUnderlineRemove, subMenuCollectionOpen, subMenuEventsOpen }){
    return (
        <header id='header' className='header'>
            <div className='header-container'>
                <div className='header-logo'>
                    <NavLink to="/" onClick={() => {  headerAppearanceDark(); menuLabelReset(); }}>
                        <picture>
                            <img src={logo} width='75' height='16' alt='Mark Belford Logo' className='dark-logo' />
                            <img src={logoLight} width='75'  height='16' alt='Mark Belford Logo' className='light-logo' />
                            <div className='header-logo-text'>Couture</div>
                        </picture>
                    </NavLink>
                </div>
                <div value={label} className='menu-label'>{label}</div>
                <div className='menu-drop-down-btn' id='new-event' onClick={() => { menuOpen(); }}>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <nav className='drop-down-menu'>
                    <div className='menu'>
                        <div className='row'>
                            <div className='col-md-4 col-lg-3 col-xxl-2 col-xxxxxl-1'></div>
                            <div className='col-md-8 col-lg-9 col-xxl-8 col-xxxxxl-11'>
                                <ul>
                                    <NavLink to="Mark" className="nav-link nav-1" type='button' onClick={() => {  subMenuCollectionClose(); subMenuEventsClose(); headerAppearanceLight(); /*menuLabel1on();*/ menuClose(); menuBG1(); }} onMouseEnter={() => { menuUnderline1(); menuStyle1(); }} onMouseLeave={menuUnderlineRemove} >Mark</NavLink>
                                    <Link to="#" className="nav-link nav-2" type='button'  onClick={() => { menuUnderline2(); menuStyle2(); subMenuCollectionOpen(); }} onMouseEnter={() => { menuUnderline2(); menuStyle2(); }} onMouseLeave={menuUnderlineRemove} >Atelier</Link>
                                    <div className='sub-menu sub-menu-collection'>
                                        <NavLink to="Butterfield8" className="sub-nav-link sub-nav-col-1" onClick={() => {  headerAppearanceLight(); /*menuLabel2on();*/ menuClose(); menuBG2(); subMenuEventsClose(); }} >the Butterfield 8</NavLink>
                                        <NavLink to="AcademyGown" className="sub-nav-link sub-nav-col-2" onClick={() => {  headerAppearanceLight(); /*menuLabel2on();*/ menuClose(); menuBG2(); subMenuEventsClose(); }} >the Academy Gown</NavLink>
                                        <NavLink to="BurmeseRuby" className="sub-nav-link sub-nav-col-3" onClick={() => {  headerAppearanceLight(); /*menuLabel2on();*/ menuClose(); menuBG2(); subMenuEventsClose(); }} >the Burmese Ruby</NavLink>
                                        <NavLink to="CoronationGown" className="sub-nav-link sub-nav-col-4" onClick={() => {  headerAppearanceLight(); /*menuLabel2on();*/ menuClose(); menuBG2(); subMenuEventsClose(); }} >the Coronation Gown</NavLink>
                                        <NavLink to="ParkAvenue" className="sub-nav-link sub-nav-col-5" onClick={() => {  headerAppearanceLight(); /*menuLabel2on();*/ menuClose(); menuBG2(); subMenuEventsClose(); }} >the Park Avenue</NavLink>
                                    </div>
                                    <Link to="#" className="nav-link nav-3" type='button' onClick={() => { menuUnderline3(); menuStyle3(); subMenuEventsOpen(); }} onMouseEnter={() => { menuUnderline3(); menuStyle3(); }} onMouseLeave={menuUnderlineRemove} >Spectacle</Link>
                                    <div className='sub-menu sub-menu-events'>
                                        <NavLink to="SwedishPrince" className="sub-nav-link sub-nav-event-1" onClick={() => { subMenuCollectionClose(); headerAppearanceLight(); /*menuLabel3on();*/ menuClose(); menuBG3(); }} >the Swedish Prince at Dior</NavLink>
                                        <NavLink to="HotelCalifornia" className="sub-nav-link sub-nav-event-2" onClick={() => { subMenuCollectionClose(); headerAppearanceLight(); /*menuLabel3on();*/ menuClose(); menuBG3(); }} >Hotel California</NavLink>
                                        <NavLink to="FairmontFashion" className="sub-nav-link sub-nav-event-3" onClick={() => { subMenuCollectionClose(); headerAppearanceLight(); /*menuLabel3on();*/ menuClose(); menuBG3(); }} >Fairmont Fashion</NavLink>
                                    </div>
                                    <NavLink to="/Publications" className="nav-link nav-4" type='button' onClick={() => { subMenuEventsClose(); subMenuCollectionClose(); headerAppearanceLight(); /*menuLabel4on();*/ menuClose(); menuBG4(); }} onMouseEnter={() => { menuUnderline4(); menuStyle4(); }} onMouseLeave={menuUnderlineRemove} >Proof</NavLink>
                                    <NavLink to="/CustomSizing" className="nav-link nav-5" type='button' onClick={() => { subMenuEventsClose(); subMenuCollectionClose(); headerAppearanceLight(); /*menuLabel5on();*/ menuClose(); menuBG5(); }} onMouseEnter={() => { menuUnderline5(); menuStyle5(); }} onMouseLeave={menuUnderlineRemove} >Fit</NavLink>
                                    <NavLink to="/Contact" className="nav-link nav-6 last" type='button' onClick={() => { subMenuEventsClose(); subMenuCollectionClose(); headerAppearanceLight(); /*menuLabel6on();*/ menuClose(); menuBG6(); }} onMouseEnter={() => { menuUnderline6(); menuStyle6(); }} onMouseLeave={menuUnderlineRemove} >Contact</NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}