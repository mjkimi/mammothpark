import React, { Component } from 'react';
import { FaReact } from 'react-icons/fa';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span>&copy; 2019 Mammoth Park Kazan. All rights reserved.</span>
        <span>
          Created in <FaReact /> React.
        </span>
      </footer>
    );
  }
}
