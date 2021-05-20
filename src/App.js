import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Connect from './components/Connect/Connect';
import Events from './components/Events/Events';
import Giving from './components/Giving/Giving';
import WatchLive from './components/WatchLive/WatchLive';
import NavTabs from './components/NavTabs/NavTabs';
import Header from './components/Header';
import Staff from './components/Staff/Staff';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* <Header /> */}
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/connect' exact component={Connect} />
        <Route path='/events' exact component={Events} />
        <Route path='/watchlive' exact component={WatchLive} />
        <Route path='/giving' exact component={Giving} />
        <Route path='/staff' exact component={Staff} />
      </div>
    </Router>
  );
}

export default App;

// import headerImage from './assets/header-assets/image01_edit.jpg'
// import image01 from './assets/header-assets/image01_edit.jpg';
// import image02 from './assets/header-assets/image02.jpg';
// import image03 from './assets/header-assets/image03.jpg';

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
