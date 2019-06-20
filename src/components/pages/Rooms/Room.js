import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../../images/room-1.jpeg';
import PropTypes from 'prop-types';
import Staircase from '../../layout/Staircase';

export default function Room({ room }) {
  const { name, slug, images, price, special } = room;

  return (
    <article className="room">
      <Link to={`/rooms/${slug}`}>
        <Staircase
          white={special ? special : price}
          green={name}
          orange="See more"
          addClass="show-room"
        />
        <div className="img-container">
          <img src={images[0] || defaultImg} alt="featured room" />
        </div>
      </Link>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
