import React from "react";
import "./banner.css";

export function Banner() {
  return (
    <div className="banner">
      <div className="banner__title">Gojek - The Flow</div>
      <div className="banner__description">
        <div className="banner__description__row">Vietnam, meet Gojek.</div>
        <div className="banner__description__row">Watch the film to see</div>
        <div className="banner__description__row">
          a world where life just flows.
        </div>
      </div>
      <div className="banner__gr_btn">
        <div className="banner__gr_btn__btn">Play video</div>
        <div className="banner__gr_btn__btn">Download Gojek</div>
      </div>
    </div>
  );
}
