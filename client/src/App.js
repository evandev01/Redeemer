import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import News from './pages/News';
import NavTabs from './components/NavTabs';
import Header from './components/Header';
import image01 from './assets/header-assets/image01.jpg';
import image02 from './assets/header-assets/image02.jpg';
import image03 from './assets/header-assets/image03.jpg';


function App() {
  const [srcState, setSrcState] = useState();

  useEffect(() => {
    handleHeader();
  }, []);

  function handleHeader() {
    if (window.location.pathname === '/') {
      setSrcState(image01)
    } else if (window.location.pathname === '/about') {
      setSrcState(image02)
    } else if (window.location.pathname === '/contact') {
      setSrcState(image03)
    } else if (window.location.pathname === '/events') {
      setSrcState(image01)
    } else if (window.location.pathname === '/news') {
      setSrcState(image02)
    }
  };

  return (
    <Router>
      <div>
        <Header
          src={srcState} />
        <NavTabs />
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/events' exact component={Events} />
        <Route path='/news' exact component={News} />
      </div>
    </Router>
  )
};

export default App;
