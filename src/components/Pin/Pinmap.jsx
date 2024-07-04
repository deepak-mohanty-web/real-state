import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./Pin.scss";

const Pinmap = ({ item }) => {
  return (
    <div>
      <Marker position={[item.latitude, item.longitude]}>
        <Popup>
          <div className="popContainer">
            <img src={item.img} alt="" />
            <div className="textContainer">
              <Link to={`/${item.id}`}>{item.title}</Link>
              <span className="bed">{item.bedroom} bedroom</span>
              <b>$ {item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
};

export default Pinmap;
