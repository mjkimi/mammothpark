import React from 'react';
import PropTypes from 'prop-types';

export default function Staircase({ white, green, orange, addClass }) {
  return (
    <div className={`gallery-item ${addClass}`}>
      <div className="gallery-item-header">
        <span>{white}</span>
      </div>
      <div className="gallery-item-description">{green}</div>
      <div className="gallery-bottom">{orange}</div>
    </div>
  );
}

Staircase.propTypes = {
  white: PropTypes.string.isRequired,
  green: PropTypes.string.isRequired,
  orange: PropTypes.string.isRequired,
  addClass: PropTypes.string
};
