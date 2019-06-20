import React from 'react';
import './App.min.css';
import Home from './components/pages/Home/Home';
import Rooms from './components/pages/Rooms/Rooms';
import SingleRoom from './components/pages/SingleRoom/SingleRoom';
import Error from './components/pages/Error/Error';
import Navbar from './components/navbar/Navbar';

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
