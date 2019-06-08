import React from 'react';
import Landing from '../layout/Landing';
import Banner from '../layout/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../RoomsContainer';

const Rooms = () => {
  return (
    <>
      <Landing landing="roomsShowcase">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Landing>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
