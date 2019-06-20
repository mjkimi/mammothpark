import React, { Component } from 'react';
import Contacts from './Contacts';
import { FaBars, FaKiwiBird } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    isOpen: false,
    prevScrollPos: window.pageYOffset,
    visible: true
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
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaBars className="nav-icon" />
            </button>
          </div>
        </div>
        <Contacts />
      </nav>
    );
  }
}
