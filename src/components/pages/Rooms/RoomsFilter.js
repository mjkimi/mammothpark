import React, { useContext } from 'react';
import { RoomContext } from '../../../Context';
import Title from '../../layout/Title';
import {
  FaHotel,
  FaUserFriends,
  FaArrowAltCircleLeft,
  FaArrowCircleRight
} from 'react-icons/fa';

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomsList({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    clearFilter,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    breakfast,
    pets,
    view
  } = context;

  // get unique types
  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let guests = getUnique(rooms, 'capacity');
  guests = guests.map((number, index) => {
    return (
      <option key={index} value={number}>
        {number}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="search-form">
        {/* select type */}
        <div className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
            <FaHotel className="filter-icon" />
          </div>
          {/* end select type */}
          {/* select guest */}
          <div className="form-group">
            <label htmlFor="capacity">guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {guests}
            </select>
            <FaUserFriends className="filter-icon" />
          </div>
          {/* end select guest */}
          {/* room price */}
          <div className="form-group">
            <label htmlFor="price">Price / night ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {/* end room price */}
          {/* date */}
          <div className="form-group">
            <label htmlFor="date">Check-in</label>
            <div className="date-inputs">
              <input type="date" name="from" id="" placeholder="From" />
            </div>
            <FaArrowCircleRight className="filter-icon" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Check-out</label>
            <div className="date-inputs">
              <input type="date" name="to" id="" placeholder="To" />
            </div>
            <FaArrowAltCircleLeft className="filter-icon" />
          </div>
        </div>
        {/* end of date */}
        {/* extras */}
        <div className="form-group-checks">
          <div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">Free breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">Pet friendly</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="view"
                id="view"
                checked={view}
                onChange={handleChange}
              />
              <label htmlFor="view">View</label>
            </div>
          </div>
          <input
            type="button"
            value="X Clear Filters"
            name="clear"
            id="clear"
            onClick={clearFilter}
          />
        </div>
      </form>
    </section>
  );
}
