import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Footer from './Footer';
import Newsletter from './Newsletter';
import { RoomConsumer } from '../Context';
import Spinner from './Spinner';

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Spinner />;
        }

        return (
          <>
            <section className="narrow ">
              <div className="article">
                <h1 className="article-header">Hotel Rooms</h1>
                <h3 className="article-subheader">
                  Bright, comfortable, inviting — our accommodation lets you
                  rest easy
                </h3>
                Watch the bustle and the lovely skyline of Kazan city center
                from our accommodation, which offers 84 cosy rooms and suites
                featuring amenities like Free Wireless High-speed Internet and
                heated bathroom floors. Accessible rooms are available upon
                request.
              </div>
            </section>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
            <section className="narrow ">
              <div className="article">
                <h3 className="article-subheader">Accessibility Features</h3>
                The hotel understands that accessibility is important to guests.
                Accessible rooms and amenities are available and may include the
                following features:
                <br />
                <ul className="standard-list">
                  <li>Amenities within accessible range to reach</li>
                  <li>Braille elevators</li>
                  <li>Grab bars alongside toilet</li>
                  <li>Grab bars by tub</li>
                  <li>Wheelchair-accessible lobby</li>
                  <li>Wheelchair-accessible public entrance</li>
                  <li>Wheelchair-accessible public restrooms</li>
                  <li>Wider guest room and bathroom doorways</li>
                </ul>
                <br />
                Please contact the hotel for further information or if you have
                questions.
              </div>
            </section>
            <Newsletter />
            <Footer />
          </>
        );
      }}
    </RoomConsumer>
  );
}
