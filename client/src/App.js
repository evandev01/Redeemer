import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import News from './pages/News';
import NavTabs from './components/NavTabs';


function App() {
  return (
    <Router>
      <div>
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
