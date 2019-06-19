import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

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
  // }

  render() {
    const { imgs } = this.props;
    let imageListContent;
    if (imgs) {
      imageListContent = (
        <div className="single-room-images">
          {imgs.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => this.handleOpen(img)}
              />
            );
          })}
        </div>
      );
    } else {
      imageListContent = <Spinner />;
    }
    return (
      <>
        {imageListContent}
        {this.state.showModal ? (
          <div onClick={this.handleClose} className="gallery">
            <img
              src={this.state.currentImg}
              alt="Gallery Image"
              className="gallery-img"
            />
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
