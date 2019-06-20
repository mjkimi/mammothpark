import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LandingStaicase({ addclass, headerline, maininfo, more }) {
  return (
    <div className={`block-content ${addclass}`}>
      <div className="first">
        {/* <div className=> */}
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

LandingStaicase.propTypes = {};

export default LandingStaicase;
