import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Connect from './components/Connect/Connect';
import Events from './components/Events/Events';
import Giving from './components/Giving/Giving';
import WatchLive from './components/WatchLive/WatchLive';
import NavTabs from './components/NavTabs/NavTabs';
import Staff from './components/Staff/Staff';
import lightHeader from './assets/logo-assets/logo-3trees.png';
import darkHeader from './assets/logo-assets/logo-3trees-dark.png';

function App() {
  const [src, setSrc] = useState();
  const [linkColor, setLinkColor] = useState();
  const [navColor, setNavColor] = useState();

  const lightLinkColor = 'white';
  const darkLinkColor = '#666666';
  const lightNavColor = 'white';
  const darkNavColor = 'black';

  useEffect(() => {
    if (window.location.pathname === '/watchlive') {
      document.body.style.setProperty('background-color', 'black');
      setLinkColor(lightLinkColor);
      setNavColor(darkNavColor);
      setSrc(darkHeader);
    } else {
      document.body.style.setProperty('background-color', 'white');
      setLinkColor(darkLinkColor);
      setNavColor(lightNavColor);
      setSrc(lightHeader);
    }
  }, []);

  return (
    <Router>
      <div>
        <Image src={src} id='light-header' />
        <NavTabs linkColor={linkColor} navColor={navColor} />
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
