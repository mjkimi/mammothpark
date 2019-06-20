import React from 'react';
import Landing from '../../layout/Landing';
import FeaturedRooms from './FeaturedRooms';
import Description from './Description';
import Staircase from '../../layout/Staircase';
import Nearby from './Nearby';
import Newsletter from '../../layout/Newsletter';
import Footer from '../../layout/Footer';

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
      <FeaturedRooms />
      <Nearby />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
