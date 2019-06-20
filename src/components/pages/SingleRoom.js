import React, { Component } from 'react';
import defaultImg from '../../images/room-1.jpeg';
import Landing from '../layout/Landing';
import Banner from '../layout/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../Context';
import StyledLanding from '../StyledLanding';
import Gallery from '../Gallery';
import Newsletter from '../Newsletter';
import Footer from '../Footer';
import LandingStaircase from '../LandingStaircase';

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
          {/* <Banner title={`${name} `}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner> */}
          <LandingStaircase
            headerline={name}
            more="Back to rooms"
            maininfo={`$ ${price}`}
          />
        </StyledLanding>
        <section className="single-room">
          <div className="bg">
            <Gallery imgs={otherImg} name={name} />
          </div>
          <article className="narrow">
            <div className="desc">
              <h3 className="article-subheader">{name}</h3>
              <p>{description}</p>
              <br />
              Price: ${price}
              <br />
              Approximate size: {size} m<sup>2</sup>
              <br />
              Maximum number of guests:{' '}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              <br />
              {pets ? 'Pets allowed' : 'No pets allowed'}
              <br />
              {breakfast && 'Free breakfast included'}
            </div>
            <h6>Key features:</h6>
            <ul className="standard-list">
              {extras.map((point, index) => {
                return <li key={index}> {point}</li>;
              })}
            </ul>
          </article>
        </section>
        <Newsletter />
        <Footer />
      </>
    );
  }
}
