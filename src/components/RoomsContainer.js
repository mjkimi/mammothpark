import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
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
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </>
        );
      }}
    </RoomConsumer>
  );
}
