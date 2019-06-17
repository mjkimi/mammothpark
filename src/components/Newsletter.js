import React, { Component } from 'react';
import { FaEnvelopeSquare } from 'react-icons/fa';

export default class Newsletter extends Component {
  render() {
    return (
      <section className="newsletter">
        <div className="empty" />
        <div className="form">
          <span>Receive great offers, inspiration for trips & much more</span>
          <form>
            <input type="email" name="email" id="" placeholder="Email" />
            <input type="submit" value="Submit" />
            <FaEnvelopeSquare className="icon" />
          </form>
        </div>
      </section>
    );
  }
}
