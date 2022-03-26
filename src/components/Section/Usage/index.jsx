import React, { useState, useRef, useEffect } from "react";
import imgUsageChoose from "../../../assets/image/usage01.png";
import imgUsagePut from "../../../assets/image/usage02.png";
import imgUsageEnjoy from "../../../assets/image/usage03.png";
import "./usage.css";

export default function Usage() {
  const [currentSlide, setCurrentSlide] = useState(null);
  const tagRef = useRef();

  useEffect(() => {
    tagRef.current.click();
  }, []);

  return (
    <div className="usage">
      <div className="usage__title">How to use Gojek</div>
      <div className="usage__select">
        <div className="usage__select__left">
          <div
            ref={tagRef}
            className={`usage__select__left__option${
              currentSlide === imgUsageChoose ? " tag--active" : ""
            }`}
            onClick={() => setCurrentSlide(imgUsageChoose)}
          >
            <div className="usage__select__left__option__title">
              1. Choose a service
            </div>
            <div className="usage__select__left__option__content">
              Select GoRide, GoFood, or GoSend
            </div>
          </div>
          <div
            className={`usage__select__left__option${
              currentSlide === imgUsagePut ? " tag--active" : ""
            }`}
            onClick={() => setCurrentSlide(imgUsagePut)}
          >
            <div className="usage__select__left__option__title">
              2. Put in your details
            </div>
            <div className="usage__select__left__option__content">
              Enter in your addresses
            </div>
          </div>
          <div
            className={`usage__select__left__option${
              currentSlide === imgUsageEnjoy ? " tag--active" : ""
            }`}
            onClick={() => setCurrentSlide(imgUsageEnjoy)}
          >
            <div className="usage__select__left__option__title">
              3. Enjoy the journey
            </div>
            <div className="usage__select__left__option__content">
              Get ready for your ride/food/delivery!
            </div>
          </div>
        </div>
        <div
          className="usage__select__right"
          style={{ backgroundImage: `url(${currentSlide})` }}
        ></div>
      </div>
    </div>
  );
}
