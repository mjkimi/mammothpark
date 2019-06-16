import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Spinner from './Spinner';

export default class Description extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, minPrice } = this.context;
    return (
      <section className="explore">
        <div className="article">
          <h2 className="article-header">
            Explore the Tatarstan Republic capital from our Kazan hotel
          </h2>
          The fascinating city of Kazan, capital of Russia's Tatarstan Republic,
          boasts stunning monasteries, magnificent mosques, and landmarks
          spanning hundreds of years. The Mammoth Park Hotel is the perfect base
          for exploring this ancient yet up-and-coming city.
          <h3 className="article-subheader">
            A historic Russian city with an edge
          </h3>
          Kazan may be one of the most historic cities in Russia, but our hotel
          is as modern as they come. Rooms have individual climate control so
          you can set your ideal temperature, plus free high-speed Wi-Fi for
          work and gaming activities. Enjoy the spectacular views over Kazan's
          skyline from your large window as you relax in the luxuriously soft
          bed.
          <br />
          <br />
          If you're traveling for business, you will find the 4 meeting rooms
          equipped with state-of-the-art facilities. Start your conference with
          coffee and networking in our pre-function area, and let us take care
          of the catering and cocktails.
          <h3 className="article-subheader">
            A unique vacation, where East meets West
          </h3>
          Kazan is one of the most dynamic cities in Russia, famous for its
          universities, sporting facilities, and international arts. You’ll find
          all of these attractions within the city center, a 20-minute drive
          from our hotel.
          <br />
          <br />
          Soak up the unique mixture of cultures: Russian and Tatar, Christian
          and Islamic. We're just a 7-minute drive from the Tatar Musa Jalil
          State Academic Theatre of Opera and Ballet, or 9 minutes from the
          Kazan Kremlin.
          <ul>
            <li>
              Under 10 minutes' drive from the Theater of Opera and Ballet and
              the Kazan Kremlin.
            </li>
            <li>
              20 minutes away from the city center for speedy access to the
              universities, shopping districts, and entertainment.
            </li>
            <li>Free high-speed Wi-Fi in every room.</li>
            <li>
              Rooms offer beautiful views over the city from the large windows.
            </li>
            <li>
              “Happiness Guarantee” is our promise to you. If you’re not 100%
              happy with something, please let one of our staff know during your
              stay and we’ll make it right or you won’t pay.
            </li>
          </ul>
        </div>
        <div className="sidebar">
          <div className="price-teaser">
            <span className="price-text">
              From $
              <span className="price">
                <strong>
                  {loading ? <Spinner bgcolor="blue" /> : minPrice}
                </strong>
              </span>
            </span>
          </div>
          <div className="hotel-at-glance">
            <h4>Hotel at a glance</h4>
            <ul>
              <li>Guest rooms: 84</li>
              <li>Meeting facilities</li>
              <li>Free Wireless High-speed Internet</li>
              <li>Distance to city centre: 0.5 km</li>
              <li>Distance to airport: 25 km</li>
              <li>Distance to train station: 1.51 km</li>
              <li>Individual climate control</li>
              <li>Rooms for disabled</li>
              <li>Smoke-free property</li>
              <li>Parking</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
