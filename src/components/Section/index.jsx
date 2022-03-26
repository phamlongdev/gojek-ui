import React from "react";
import Card from "./Card";
import Usage from "./Usage";
import imgIntro from "../../assets/image/img01.png";
import imgDownload from "../../assets/image/img02.png";
import imgGoRide from "../../assets/image/goride.png";
import imgFood from "../../assets/image/gofood.png";
import imgSend from "../../assets/image/gosend.png";
import imgCarProtect from "../../assets/image/gocar-protect.png";
import "./section.css";

export function Section() {
  return (
    <div className="section">
      <div className="section__intro">
        <img className="section__intro__img" src={imgIntro} alt="img01" />
        <div className="section__intro__text">
          <div className="section__intro__text__row">
            To improve people's lives, we don't think adding more stuff would do
            any good. Quite the opposite. We believe it's about removing
            obstacles that make us lose focus on the things that matters.
            Getting rid of inefficiencies, stealing time from things we rather
            would be doing. And eliminating hassles getting in the way of us
            spending time with our loved ones. That would do good.
          </div>
          <div className="section__intro__text__row">
            No more hiccups testing our temper. No more bumps on the road
            draining our energy. No more friction getting to our heads.
          </div>
          <div className="section__intro__text__row">
            Therefore we'll{" "}
            <b>always strive to make things run smoother, faster and easier</b>.
            And it's in our DNA to think there's a hack for every difficulty, a
            remedy for every headache and a shortcut around.
          </div>
        </div>
      </div>
      <div className="section__service">
        <div className="section__service__title">What's on Gojek</div>
        <div className="section__service__list">
          <Card
            data={{
              img: imgGoRide,
              title: "GoRide",
              content:
                "Make commuting comfortable - get across town and through traffic at affordable prices",
            }}
          />
          <Card
            data={{
              img: imgFood,
              title: "GoFood",
              content:
                "Feast at home - tons of great dishes and promos with just a tap",
            }}
          />
          <Card
            data={{
              img: imgSend,
              title: "GoSend",
              content:
                "Sign, seal, deliver - send goods, gifts, and parcels when you want",
            }}
          />
          <Card
            data={{
              img: imgCarProtect,
              title: "GoCar Protect",
              content: "Sit back. Sleep. Snore. Be comfortable",
            }}
          />
        </div>
      </div>
      <Usage />
      <div className="section__download">
        <img className="section__download__img" src={imgDownload} alt="img02" />
        <div className="section__download__info">
          <div className="section__download__info__title">
            Want on-demand services that won't break your bank?
          </div>
          <div className="section__download__info__description">
            We're here to help – try Gojek and experience it yourself!
          </div>
          <div className="section__download__info__btn">Download now</div>
        </div>
      </div>
    </div>
  );
}
