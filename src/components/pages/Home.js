import React from 'react';
import Landing from '../layout/Landing';
import Banner from '../layout/Banner';
import { Link } from 'react-router-dom';
import Services from '../Services';
import FeaturedRooms from '../FeaturedRooms';

const Home = () => {
  return (
    <>
      <Landing landing="defaultShowcase">
        <Banner title="luxurios rooms" info="deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Landing>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
