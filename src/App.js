import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Rooms from './components/pages/Rooms';
import SingleRoom from './components/pages/SingleRoom';
import Error from './components/pages/Error';
import Navbar from './components/layout/Navbar';

import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
