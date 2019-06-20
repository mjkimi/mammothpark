import React, { Component } from 'react';

export default class Nearby extends Component {
  render() {
    return (
      <section className="nearby narrow">
        <h2>Nearby</h2>
        <div className="grid-info">
          <div className="sight">
            <span>Staro-Tatarskaya Sloboda</span>
            <span>500 m</span>
          </div>
          <div className="sight">
            <span>Pedestrian street Ulitsa Baumana</span>
            <span>1 km</span>
          </div>
          <div className="sight">
            <span>
              Kremlin, Qolşärif Mosque, Söyembikä Tower, Annunciation Cathedral{' '}
            </span>
            <span>2.5 km</span>
          </div>
          <div className="sight">
            <span>Kazan Arena </span>
            <span>7 km</span>
          </div>
        </div>
      </section>
    );
  }
}
