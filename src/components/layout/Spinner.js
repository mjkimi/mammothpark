import React from 'react';
import spinnerBlue from '../../images/gif/loading-bluebg.gif';
import spinnerWhite from '../../images/gif/loading-whitebg.gif';

export default function Spinner({ bgcolor }) {
  return (
    <div className="loading">
      <img
        src={bgcolor === 'blue' ? spinnerBlue : spinnerWhite}
        alt="loading"
      />
      <h4>loading...</h4>
    </div>
  );
}
