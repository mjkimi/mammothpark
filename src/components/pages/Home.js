import React from 'react';
import Landing from '../layout/Landing';
// import Banner from '../layout/Banner';
// import { Link } from 'react-router-dom';
// import Services from '../Services';
import FeaturedRooms from '../FeaturedRooms';
import Description from '../Description';
import Staircase from '../Staircase';

const Home = () => {
  return (
    <>
      <Landing landing="defaultShowcase">
        <Staircase
          white="adding color to breakfast"
          green="Book your stay with breakfast included"
          orange="Get the most out of your stay"
        />
      </Landing>
      <Description />
      {/* <Services /> */}
      <FeaturedRooms />
      <section className="nearby narrow">
        <h2>Nearby</h2>

        <div className="grid-info">
          <div className="sight">
            <span>Staro-Tatarskaya Sloboda</span>
            <span>500 m</span>
          </div>
          <div className="sight">
            <span>Pedestrian street Ulitsa Baumana</span>
            <span>1 km</span>
          </div>
          <div className="sight">
            <span>
              Kremlin, Qolşärif Mosque, Söyembikä Tower, Annunciation Cathedral{' '}
            </span>
            <span>2.5 km</span>
          </div>
          <div className="sight">
            <span>Kazan Arena </span>
            <span>7 km</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
