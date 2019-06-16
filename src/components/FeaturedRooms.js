import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Spinner from './Spinner';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms narrow">
        <Title title="Special Offers" />
        <div className="featured-rooms-center">
          {loading ? <Spinner /> : rooms}
        </div>
      </section>
    );
  }
}
