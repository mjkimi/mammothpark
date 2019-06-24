import React from 'react';
import Landing from '../../layout/Landing';
const Error = () => {
  return (
    <Landing landing="error">
      <div className="error-bg">
        <div className="warning" />
      </div>
    </Landing>
  );
};

export default Error;
