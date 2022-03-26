import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toogleState, menuState } from "../../features/selector";
import { statusToogle } from "../../features/toogle/toogleSlice";
import logoWhiteInverse from "../../assets/image/logo-white-inverse.svg";
import "./sidebar.css";

export function Sidebar() {
  const menu = useSelector(menuState);
  const toogle = useSelector(toogleState);
  const dispatch = useDispatch();
  const [currentLang, setCurrentLang] = useState("en");
  const [toogleLang, setToogleLang] = useState(false);
  const [toogleSub, setToogleSub] = useState(false);
  const [contentSub, setContentSub] = useState({ title: "", dropdown: [] });

  return (
    <div className={`sidebar${toogle ? "" : " closed"}`}>
      <div className="sidebar__top">
        <img
          className="sidebar__top__img"
          src={logoWhiteInverse}
          alt="gojek-logo"
        />
        <div
          className="sidebar__top__btn--close"
          onClick={() => dispatch(statusToogle(false))}
        >
          <ion-icon name="close"></ion-icon>
        </div>
      </div>
      <div className="sidebar__lang">
        <div className="sidebar__lang__label">
          <div
            className="sidebar__lang__label__title"
            onClick={() => setToogleLang(!toogleLang)}
          >
            Language
          </div>
          <div className="sidebar__lang__label__icon">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
        </div>
        <div
          className={`sidebar__lang__dropdown${
            toogleLang ? "" : " sidebar__dropdown__lang--closed"
          }`}
        >
          <div
            className={`sidebar__lang__dropdown__option${
              currentLang === "vn" ? " active--lang" : ""
            }`}
            onClick={() => setCurrentLang("vn")}
          >
            Vietnam
          </div>
          <div
            className={`sidebar__lang__dropdown__option${
              currentLang === "en" ? " active--lang" : ""
            }`}
            onClick={() => setCurrentLang("en")}
          >
            English
          </div>
        </div>
      </div>
      <div className="sidebar__menu">
        {menu.length > 0 &&
          menu.map((item, index) => (
            <div
              key={index}
              className="sidebar__menu__row"
              onClick={() => {
                setContentSub(item);
                setToogleSub(true);
              }}
            >
              <div className="sidebar__menu__row__title">{item.title}</div>
              {item.dropdown.length > 0 && (
                <div className="sidebar__menu__row__icon">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
              )}
            </div>
          ))}
      </div>
      <div
        className={`sidebar__sub${toogleSub ? "" : " sidebar__sub--closed"}`}
      >
        <div
          className="sidebar__sub__header"
          onClick={() => setToogleSub(false)}
        >
          <div className="sidebar__sub__header__icon">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
          <div className="sidebar__sub__header__title">{contentSub.title}</div>
        </div>
        {contentSub.title === "Services" ? (
          <>
            <div className="sidebar__sub__row">GoRide</div>
            <div className="sidebar__sub__row">GoFood</div>
            <div className="sidebar__sub__row">GoSend</div>
            <div className="sidebar__sub__row">GoCar</div>
          </>
        ) : (
          contentSub.dropdown.map((item, index) => (
            <div key={index} className="sidebar__sub__row">
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
