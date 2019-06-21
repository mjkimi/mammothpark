import React from 'react';
import Landing from '../../layout/Landing';
import { Link } from 'react-router-dom';
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
