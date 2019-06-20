import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LandingStaicase({ addclass, headerline, maininfo, more }) {
  return (
    <div className={`block-content ${addclass}`}>
      <div className="first">
        <strong>{headerline}</strong>
      </div>
      {more ? (
        <Link to="/rooms">
          <div className="middle">{more}</div>
        </Link>
      ) : null}
      <div className="bottom">
        <strong> {maininfo}</strong>
      </div>
    </div>
  );
}

LandingStaicase.propTypes = {
  addclass: PropTypes.string,
  headerline: PropTypes.string.isRequired,
  maininfo: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]),
  more: PropTypes.string
};

export default LandingStaicase;
