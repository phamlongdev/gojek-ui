import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { menuState } from "../../features/selector";
import { statusToogle } from "../../features/toogle/toogleSlice";
import logoGojek from "../../assets/image/logo.svg";
import imgGoRide from "../../assets/image/goride.png";
import imgGoFood from "../../assets/image/gofood.png";
import imgGoSend from "../../assets/image/gosend.png";
import imgGoCar from "../../assets/image/gocar.png";
import "./header.css";

export function Header() {
  const [toogleDropdown, setToogleDropdown] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [toogleLang, setToogleLang] = useState(false);
  const menu = useSelector(menuState);
  const dispatch = useDispatch();

  const handleDropdown = (option) => {
    setDropdown(option);
    dropdown === option
      ? setToogleDropdown(!toogleDropdown)
      : setToogleDropdown(true);
  };

  return (
    <div className="header">
      <img className="header__logo" src={logoGojek} alt="gojek-logo" />
      <div className="header__nav">
        {menu.length > 0 &&
          menu.map((item, index) => (
            <div
              key={index}
              className="header__nav__link"
              onClick={() => handleDropdown(item.title.toLowerCase())}
            >
              {item.icon && (
                <div className="header__nav__link__icon">
                  <ion-icon name={item.icon}></ion-icon>
                </div>
              )}
              <div className="header__nav__link__title">{item.title}</div>
              {item.dropdown.length > 0 && (
                <div className="header__nav__link__btn">
                  <ion-icon
                    name={`chevron-${
                      toogleDropdown && dropdown === item.title.toLowerCase()
                        ? "up"
                        : "down"
                    }-outline`}
                  ></ion-icon>
                </div>
              )}
            </div>
          ))}
        <div
          className="header__nav__lang"
          onClick={() => setToogleLang(!toogleLang)}
        >
          <div className="header__nav__lang__icon">
            <ion-icon name="language-outline"></ion-icon>
          </div>
          <div className="header__nav__lang__title">EN</div>
          <div className="header__nav__lang__arrow">
            <ion-icon
              name={`chevron-${toogleLang ? "up" : "down"}-outline`}
            ></ion-icon>
          </div>
          <div
            className={`header__nav__lang__dropdown${
              toogleLang ? "" : " dropdown__lang--closed"
            }`}
          >
            <div className="header__nav__lang__dropdown__row">
              Vietnam<ion-icon name="checkmark-circle-outline"></ion-icon>
            </div>
            <div className="header__nav__lang__dropdown__row">
              English<ion-icon name="checkmark-circle-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
      <div
        className="header__burger"
        onClick={() => dispatch(statusToogle(true))}
      >
        <ion-icon name="menu"></ion-icon>
      </div>
      {toogleDropdown && (
        <div className="header__dropdown">
          {dropdown === "services" ? (
            <>
              <img
                className="header__dropdown__img"
                src={imgGoRide}
                alt="goride"
              />
              <img
                className="header__dropdown__img"
                src={imgGoFood}
                alt="gofood"
              />
              <img
                className="header__dropdown__img"
                src={imgGoSend}
                alt="gosend"
              />
              <img
                className="header__dropdown__img"
                src={imgGoCar}
                alt="gocar"
              />
            </>
          ) : dropdown === "driver" ? (
            <>
              <div className="header__dropdown__navlink">
                Driver Landing Page
              </div>
              <div className="header__dropdown__navlink">
                GoRide Registration
              </div>
              <div className="header__dropdown__navlink">
                GoCar Registration
              </div>
              <div className="header__dropdown__navlink">Driver's Blog</div>
              <div className="header__dropdown__navlink">GoCaptain</div>
            </>
          ) : (
            <>
              <div className="header__dropdown__navlink">
                Merchant Landing Page
              </div>
              <div className="header__dropdown__navlink">
                Merchant Registration
              </div>
              <div className="header__dropdown__navlink">
                Claim GoBiz Account
              </div>
              <div className="header__dropdown__navlink">Merchant's Blog</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
