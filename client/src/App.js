import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import News from './pages/News';
import Give from './pages/Give';
import WatchLive from './components/WatchLive';
import NavTabs from './components/NavTabs/Navtabs';
import Header from './components/Header';
import Logo from './components/Logo';


function App() {
  // const [srcState, setSrcState] = useState();

  // useEffect(() => {
  //   handleHeader();
  // }, []);

  // function handleHeader() {
  //   if (window.location.pathname === '/') {
  //     setSrcState(image01)
  //   } else if (window.location.pathname === '/about') {
  //     setSrcState(image02)
  //   } else if (window.location.pathname === '/contact') {
  //     setSrcState(image03)
  //   } else if (window.location.pathname === '/events') {
  //     setSrcState(image01)
  //   } else if (window.location.pathname === '/news') {
  //     setSrcState(image02)
  //   }
  // };

  return (
    <Router>
      <div>
        <NavTabs />
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/events' exact component={Events} />
        <Route path='/watchlive' exact component={WatchLive} />
        <Route path='/news' exact component={News} />
        <Route path='/Give' exact component={Give} />
      </div>
    </Router>
  )
};

export default App;







// import headerImage from './assets/header-assets/image01_edit.jpg'
// import image01 from './assets/header-assets/image01_edit.jpg';
// import image02 from './assets/header-assets/image02.jpg';
// import image03 from './assets/header-assets/image03.jpg';
