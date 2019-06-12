import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import { FaAlignRight, FaKiwiBird } from 'react-icons/fa';
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
            <Link to="/">
              <FaKiwiBird className="bird-logo" />
              {/* <img src={logo} alt="Beach Resort" /> */}
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <div className="nav-container">
            <ul
              className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
            >
              <li>
                <Link to="/">Hotel home</Link>
              </li>
              <li>
                <Link to="/rooms">Hotel rooms</Link>
              </li>
            </ul>
            <div className="book">
              <Link to="/rooms">Book</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
