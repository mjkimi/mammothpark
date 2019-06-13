import React, { Component } from 'react';
import { FaBars, FaKiwiBird, FaPhone, FaEnvelopeOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <div className="nav-container">
              <Link to="/">
                <FaKiwiBird className="bird-logo" />
              </Link>
              <ul
                className={
                  this.state.isOpen ? 'nav-links show-nav' : 'nav-links'
                }
              >
                <li>
                  <Link to="/">Hotel home</Link>
                </li>
                <li>
                  <Link to="/rooms">Hotel rooms</Link>
                </li>
              </ul>
            </div>
            <div className="book">
              <Link to="/rooms">Book</Link>
            </div>
          </div>
          <h1 className="hotel-name">Mammoth Park Kazan</h1>
          <div className="nav-header hotel-title">
            <ul className="contact">
              <li>Tatarstan St. 7</li>
              <li>420024</li>
              <li>Kazan</li>
              <li>Russia</li>
              <li>
                <a href="tel:6715555555">
                  <FaPhone />
                  (617)-555-5555
                </a>
              </li>
            </ul>
            <span>
              {' '}
              <FaEnvelopeOpen />
              <a href="mailto:contact@mammothpark.com">
                {' '}
                contact@mammothpark.com
              </a>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}
