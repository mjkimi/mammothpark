import React, { Component } from 'react';
import Landing from '../../layout/Landing';
import RoomsContainer from './RoomsContainer';
import LandingStaircase from '../../layout/LandingStaircase';
import Spinner from '../../layout/Spinner';
import { RoomContext } from '../../../Context';

class Rooms extends Component {
  static contextType = RoomContext;

  render() {
    const { loading, minPrice } = this.context;
    return (
      <>
        <Landing landing="roomsShowcase">
          <LandingStaircase
            addclass="content-all"
            headerline="Our Colorful Rooms"
            maininfo={loading ? <Spinner /> : `From $ ${minPrice}`}
          />
        </Landing>
        <RoomsContainer />
      </>
    );
  }
}

export default Rooms;
