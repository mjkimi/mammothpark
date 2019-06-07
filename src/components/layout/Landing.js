import React from 'react';

const Landing = ({ children, landing }) => {
  return <header className={landing}>{children}</header>;
};

Landing.defaultProps = {
  landing: 'defaultShowcase'
};

export default Landing;
