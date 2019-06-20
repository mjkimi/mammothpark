import React, { Component } from 'react';
import { FaPhone, FaEnvelopeOpen } from 'react-icons/fa';

export default class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollPos: window.pageYOffset,
      visible: true
    };
  }
  // Adds a sroll event listener when the component is mount.
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div
        className={
          this.state.visible ? 'lowernav ' : 'lowernav lowernav-hidden'
        }
      >
        <h1 className="hotel-name">Mammoth Park Kazan</h1>
        <div className="nav-header">
          <address>
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
          </address>
          <span className="mailto">
            {' '}
            <FaEnvelopeOpen />
            <a href="mailto:contact@mammothpark.com">
              {' '}
              contact@mammothpark.com
            </a>
          </span>
        </div>
      </div>
    );
  }
}
