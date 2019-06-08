import React, { Component } from 'react';
import defaultImg from '../../images/room-1.jpeg';
import Landing from '../layout/Landing';
import Banner from '../layout/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../Context';
import StyledLanding from '../StyledLanding';

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImg
    };
  }
  static contextType = RoomContext;
  // componentDidMount(){}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    // destructuring of images:
    const [mainImg, ...otherImg] = images;

    return (
      <>
        <StyledLanding img={mainImg || this.state.defaultImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledLanding>
        <section className="single-room">
          <div className="single-room-images">
            {otherImg.map((img, index) => {
              return <img key={index} src={img} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : ${size} SQFT</h6>
              <h6>
                max capacity :{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((point, index) => {
              return <li key={index}>- {point}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
