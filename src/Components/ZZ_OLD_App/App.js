import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*import {Route, Link, Routes, useLocation} from 'react-router-dom';*/
import '../Styles/App.css';
import Header from '../Header/Header';
import MarkBelfordWebsite from '../Pages/Mark-Belford-Website';
import MarkBelford from '../pages/MarkBelford';
import Collection from '../Pages/Collection';
import Butterfield8 from '../Pages/Butterfield8';
import AcademyGown from '../Pages/AcademyGown';
import BurmeseRuby from '../Pages/BurmeseRuby';
import CoronationGown from '../Pages/CoronationGown';
import ParkAvenue from '../Pages/ParkAvenue';
import HotelCalifornia from '../Pages/HotelCalifornia';
import Events from '../Pages/Events';
import SwedishPrince from '../Pages/SwedishPrince';
import Press from '../Pages/Press';
import Contact from '../Pages/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> } >
    <Route path='MarkBelford' element={<MarkBelford />} />
    <Route path='Collection' element={<Collection />} />
    <Route path='Butterfield8' element={<Butterfield8 />} />
    <Route path='AcademyGown' element={<AcademyGown />} />
    <Route path='BurmeseRuby' element={<BurmeseRuby />} />
    <Route path='CoronationGown' element={<CoronationGown />} />
    <Route path='ParkAvenue' element={<ParkAvenue />} />
    <Route path='HotelCalifornia' element={<HotelCalifornia />} />
    <Route path='Events' element={<Events />} />
    <Route path='SwedishPrince' element={<SwedishPrince />} />
    <Route path='Press' element={<Press />} />
    <Route path='Contact' element={<Contact />} />
  </Route>
));

function App(){
  /*const [headerBackground, setHeaderBackground] = useState('');*/
  return (
    <RouterProvider router={router} />

    /*
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<MarkBelfordWebsite />} />
        <Route path='MarkBelford' element={<MarkBelford />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/Butterfield8' element={<Butterfield8 />} />
        <Route path='/AcademyGown' element={<AcademyGown />} />
        <Route path='/BurmeseRuby' element={<BurmeseRuby />} />
        <Route path='/CoronationGown' element={<CoronationGown />} />
        <Route path='/ParkAvenue' element={<ParkAvenue />} />
        <Route path='/HotelCalifornia' element={<HotelCalifornia />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/SwedishPrince' element={<SwedishPrince />} />
        <Route path='/Press' element={<Press />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
    */
  );
};

export default App;