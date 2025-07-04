import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import Root from '../Root';
import MarkBelfordWebsite from '../pages/MarkBelfordWebsite';
import Mark from '../pages/Mark';
import Butterfield8 from '../pages/Butterfield8';
import AcademyGown from '../pages/AcademyGown';
import BurmeseRuby from '../pages/BurmeseRuby';
import CoronationGown from '../pages/CoronationGown';
import ParkAvenue from '../pages/ParkAvenue';
import HotelCalifornia from '../pages/HotelCalifornia';
import SwedishPrince from '../pages/SwedishPrince';
import FairmontFashion from '../pages/FairmontFashion';
import Publications from '../pages/Publications';
import CustomSizing from '../pages/CustomSizing';
import Contact from '../pages/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> } >
    <Route exact path='/' element={<MarkBelfordWebsite />} />
    <Route path='Mark' element={<Mark/>} />
    <Route path='Butterfield8' element={<Butterfield8/>} />
    <Route path='AcademyGown' element={<AcademyGown/>} />
    <Route path='BurmeseRuby' element={<BurmeseRuby/>} />
    <Route path='CoronationGown' element={<CoronationGown/>} />
    <Route path='ParkAvenue' element={<ParkAvenue/>} />
    <Route path='HotelCalifornia' element={<HotelCalifornia/>} />
    <Route path='SwedishPrince' element={<SwedishPrince/>} />
    <Route path='FairmontFashion' element={<FairmontFashion/>} />
    <Route path='Publications' element={<Publications/>} />
    <Route path='CustomSizing' element={<CustomSizing/>} />
    <Route path='Contact' element={<Contact/>} />
    <Route path="/*" element={<Navigate replace to="/" />} />
  </Route>
));
/*
const NotFoundPage = () => {
  <div>
    <h1>404 - Page Not Found Sucka</h1>
    <p>We cant find your page. looks like someone screwed up!</p>
    <a href='/'>Go back home</a>
  </div>
}
*/
export default function App(){
  return (
    <RouterProvider router={router} />
  );
};