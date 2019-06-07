import React from 'react';

export default function Banner({ children, title, info }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <hr />
      <p>{info}</p>
      {children}
    </div>
  );
}
