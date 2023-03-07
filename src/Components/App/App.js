import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Home from '../Pages/';
import AboutMark from '../Pages/AboutMark';
import Work from '../Pages/Work';
import Press from '../Pages/Press';
import Contact from '../Pages/Contact';


class App extends React.Component{
  render(){
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' exact element={<Home />} />
          <Route exact path='/AboutMark' exact element={<AboutMark />} />
          <Route exact path='/Work' exact element={<Work />} />
          <Route exact path='/Press' exact element={<Press />} />
          <Route exact path='/Contact' exact element={<Contact />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

/*
import React from 'react';
import './App.css';
import Navbar from '../Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../../Pages/';
import About from '../../Pages/about';
import Blogs from '../../Pages/blog';
import SignUp from '../../Pages/signup';
import Contact from '../../Pages/contact';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
);
}
  
export default App;
*/