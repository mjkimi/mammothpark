import React from 'react';
import PropTypes from 'prop-types';

const Landing = ({ children, landing }) => {
  return <header className={landing}>{children}</header>;
};

Landing.defaultProps = {
  landing: 'defaultShowcase'
};
Landing.propTypes = {
  children: PropTypes.node.isRequired,
  landing: PropTypes.string.isRequired
};

export default Landing;
