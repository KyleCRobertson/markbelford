import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*import {Route, Link, Routes, useLocation} from 'react-router-dom';*/
import '../components/styles/App.css';
//import Header from '../Header/Header';
import Root from '../components/Root';
import MarkBelfordWebsite from '../components/pages/Mark-Belford-Website';
import Mark from '../components/pages/Mark';
//import Collection from '../components/pages/Collection';
import Butterfield8 from '../components/pages/Butterfield8';
import AcademyGown from '../components/pages/AcademyGown';
import BurmeseRuby from '../components/pages/BurmeseRuby';
import CoronationGown from '../components/pages/CoronationGown';
import ParkAvenue from '../components/pages/ParkAvenue';
import HotelCalifornia from '../components/pages/HotelCalifornia';
//import Events from '../components/pages/Events';
import SwedishPrince from '../components/pages/SwedishPrince';
import CAFAawards from '../components/pages/CAFAawards';
import FairmontFashion from '../components/pages/FairmontFashion';
import Publications from '../components/pages/Publications';
import Contact from '../components/pages/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> } >
    <Route exact path='/' element={<MarkBelfordWebsite />} />
    <Route path='Mark' element={<Mark/>} />
    {/*<Route path='Collection' element={<Collection/>} />*/}
    <Route path='Butterfield8' element={<Butterfield8/>} />
    <Route path='AcademyGown' element={<AcademyGown/>} />
    <Route path='BurmeseRuby' element={<BurmeseRuby/>} />
    <Route path='CoronationGown' element={<CoronationGown/>} />
    <Route path='ParkAvenue' element={<ParkAvenue/>} />
    <Route path='HotelCalifornia' element={<HotelCalifornia/>} />
    {/*<Route path='Events' element={<Events/>} />*/}
    <Route path='SwedishPrince' element={<SwedishPrince/>} />
    <Route path='CAFAawards' element={<CAFAawards/>} />
    <Route path='FairmontFashion' element={<FairmontFashion/>} />
    <Route path='Publications' element={<Publications/>} />
    <Route path='Contact' element={<Contact/>} />
  </Route>
));

function App(){
  /*const [headerBackground, setHeaderBackground] = useState('');*/
  return (
    <RouterProvider router={router} />
  );
};

export default App;