import React from 'react';
import PropTypes from 'prop-types';

export default function Staircase({ white, green, orange, addClass }) {
  // if it's a number add $ sign
  const whiteNum = parseInt(white, 10);
  return (
    <div className={`gallery-item ${addClass}`}>
      <div className="gallery-item-header">
        <span>{whiteNum ? `$ ${white}` : `${white}`}</span>
      </div>
      <div className="gallery-item-description">{green}</div>
      <div className="gallery-bottom">{orange}</div>
    </div>
  );
}

Staircase.propTypes = {
  white: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  green: PropTypes.string.isRequired,
  orange: PropTypes.string.isRequired,
  addClass: PropTypes.string
};
