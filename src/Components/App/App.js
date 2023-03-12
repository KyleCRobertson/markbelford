import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Home from '../Pages/index';
import MarkBelford from '../Pages/MarkBelford';
import Work from '../Pages/Work';
import Press from '../Pages/Press';
import Contact from '../Pages/Contact';

import MarkBelfordWebsite from '../Pages/Mark-Belford-Website';

class App extends React.Component{
  render(){
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Mark-Belford-Website' element={<MarkBelfordWebsite />} />
          <Route path='/MarkBelford' element={<MarkBelford />} />
          <Route path='/Work' element={<Work />} />
          <Route path='/Press' element={<Press />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    );
  }
}

export default App;