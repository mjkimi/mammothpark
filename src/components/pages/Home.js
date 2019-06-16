import React from 'react';
import Landing from '../layout/Landing';
// import Banner from '../layout/Banner';
// import { Link } from 'react-router-dom';
// import Services from '../Services';
import FeaturedRooms from '../FeaturedRooms';
import Description from '../Description';

const Home = () => {
  return (
    <>
      <Landing landing="defaultShowcase">
        <div className="gallery-item">
          <div className="gallery-item-header">
            <span>adding color to breakfast</span>
          </div>
          <div className="gallery-item-description">
            Book your stay with breakfast included
          </div>
          <div className="gallery-bottom">Get the most out of your stay</div>
        </div>
      </Landing>
      <Description />
      {/* <Services /> */}
      <FeaturedRooms />
    </>
  );
};

export default Home;
