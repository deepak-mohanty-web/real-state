import React from "react";
import "./SinglePage.scss";
import Slider from "../../components/Slider/Slider";
import { singlePostData, userData } from "../../store/dummydata";
import Pin from "../../assets/pin.png";
import Save from "../../assets/save.png";
import chat from "../../assets/chat.png";
import utility from "../../assets/utility.png";
import pet from "../../assets/pet.png";
import fee from "../../assets/fee.png";
import size from "../../assets/size.png";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";
import school from "../../assets/school.png";
import bus from "../../assets/bus.png";
import resturant from "../../assets/restaurant.png";

import GoogleMap from "../../components/Googlemap/GoogleMap";
const Singlepage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData?.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src={Pin} alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src={utility} alt="" />
              <div className="text">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src={pet} alt="" />
              <div className="text">
                <span>Pet policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src={fee} alt="" />
              <div className="text">
                <span>Property fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src={size} alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src={bed} alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src={bath} alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="size">
              <img src={school} alt="" />
              <span>School</span>
              <p>100m away</p>
            </div>
            <div className="size">
              <img src={bus} alt="" />
              <span>Bus stop</span>
              <p>100m away</p>
            </div>
            <div className="size">
              <img src={resturant} alt="" />
              <span>Resturant</span>
              <p>200m away</p>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <GoogleMap items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src={chat} alt="" />
              Send a Message
            </button>
            <button>
              <img src={Save} alt="" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
