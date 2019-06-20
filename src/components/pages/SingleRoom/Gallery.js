import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';
import { FaTimes, FaSearch } from 'react-icons/fa';

class Gallery extends Component {
  state = {
    showModal: false,
    currentImg: ''
  };

  handleOpen = img => {
    this.setState({ showModal: true, currentImg: img });
  };
  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { imgs, name } = this.props;
    let imageListContent;
    if (imgs) {
      imageListContent = (
        <div className="single-room-images">
          {imgs.map((img, index) => {
            return (
              <div
                key={index}
                className="single-image"
                onClick={() => this.handleOpen(img)}
              >
                <FaSearch className="zoom" />
                <img src={img} alt="" />
              </div>
            );
          })}
        </div>
      );
    } else {
      imageListContent = <Spinner bgcolor="blue" />;
    }
    return (
      <>
        {imageListContent}
        {this.state.showModal ? (
          <div onClick={this.handleClose} className="gallery">
            <div className="image-wrapper">
              <img src={this.state.currentImg} alt="" className="gallery-img" />
              <span className="gallery-close">
                <FaTimes /> Close
              </span>
              <div className="photo-caption">
                <span className="caption">{name}</span>
                <span className="fake-border" />
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

Gallery.propTypes = {
  imgs: PropTypes.array.isRequired
};

export default Gallery;
