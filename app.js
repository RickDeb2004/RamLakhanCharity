// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Pic from './components/Pic';
import Media from './components/Media';
import Contact from './components/Contact';
import DoctorProfile from './components/DoctorProfile';

const Playground = () => {
  // Your playground component code here
  return <h1>Welcome to the Playground!</h1>;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/what-we-do" component={WhatWeDo} />
        <Route path="/pic" component={Pic} />
        <Route path="/media" component={Media} />
        <Route path="/contact" component={Contact} />
        <Route path="/doctor-profile/:id" component={DoctorProfile} />
        <Route path="/play" component={Playground} /> {/* Add the playground route */}
      </Switch>
    </Router>
  );
};

export default App;
