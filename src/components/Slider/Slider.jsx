import React, { useState } from "react";
import "./Slider.scss";
import arrow from "../../assets/arrow.png";
const Slider = ({ images }) => {
  const [imageIndex, setimageIndex] = useState(null);

  const changeSlider = (direction) => {
    if(direction === "left"){
          if(imageIndex ===0){
            setimageIndex(images.length-1)
          }else{
            setimageIndex(imageIndex-1)
          }
    }else{
      if(imageIndex===images.length-1){
          setimageIndex(0)
      }else{
            setimageIndex(imageIndex +1)
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex != null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src={arrow} alt="" onClick={() => changeSlider("left")} />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src={arrow}
              alt=""
              className="right"
              onClick={() => changeSlider("right")}
            />
          </div>
          <div className="close" onClick={() => setimageIndex(null)}>
            x
          </div>
        </div>
      )}
      <div className="bigImg" onClick={() => setimageIndex(0)}>
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImg">
        {images.slice(1).map((img, index) => (
          <img
            src={img}
            key={index}
            alt=""
            onClick={() => setimageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
