import React from "react";
import "./Filter.scss";
import search from '../../assets/search.png'
const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>{" "}
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="any">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">property</label>
          <select name="property" id="property">
            <option value="any">any</option>
            <option value="apatment">apatment</option>
            <option value="house">house</option>
            <option value="condo">condo</option>
            <option value="land">land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="text" id="minPrice" name="minPrice" placeholder="any" />
        </div>

        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="text" id="maxPrice" name="maxPrice" placeholder="any" />
        </div>{" "}
        <div className="item">
          <label htmlFor="badroom">Bedroom</label>
          <input
            type="text"
            id="badroom"
            name="badroom"
            placeholder="any"
          />
        </div>
        <button>
          <img src={search} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
