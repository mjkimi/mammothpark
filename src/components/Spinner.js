import React from 'react';
import spinnerBlue from '../images/gif/loading-bluebg.gif';
import spinnerWhite from '../images/gif/loading-whitebg.gif';

export default function Spinner({ bgcolor }) {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img
        src={bgcolor === 'blue' ? spinnerBlue : spinnerWhite}
        alt="loading"
      />
    </div>
  );
}
