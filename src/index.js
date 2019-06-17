import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoomProvider } from './Context';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <RoomProvider>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </RoomProvider>,
  document.getElementById('root')
);
