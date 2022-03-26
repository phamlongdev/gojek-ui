import React from "react";
import logoWhite from "../../assets/image/logo-white.svg";
import logoGooglePlay from "../../assets/image/google-play.png";
import logoAppStore from "../../assets/image/app-store.png";
import logoSubscribe from "../../assets/image/dadangky.png";
import logoAnnounced from "../../assets/image/logoSaleNoti.png";
import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__left">
          <div className="footer__top__left__nav">
            <img
              className="footer__top__left__nav__logo"
              src={logoWhite}
              alt="gojek-logo-white"
            />
            <div className="footer__top__left__nav__navlink">
              <div className="footer__top__left__nav__navlink__left">
                <div className="footer__top__left__nav__navlink__left__link">
                  About Us
                </div>
                <div className="footer__top__left__nav__navlink__left__link">
                  Blog
                </div>
                <div className="footer__top__left__nav__navlink__left__link">
                  Help Centre
                </div>
              </div>
              <div className="footer__top__left__nav__navlink__right">
                Terms and Policies
              </div>
            </div>
          </div>
          <div className="footer__top__left__info">
            <div className="footer__top__left__info__row">
              Go Viet Technology Trading Company Limited
            </div>
            <div className="footer__top__left__info__row">
              Address: 19th floor, Pearl Plaza tower (office area),
            </div>

            <div className="footer__top__left__info__row">
              561A Dien Bien Phu Street, Ward 25, Binh Thanh District, Ho Chi
              Minh City, Vietnam
            </div>
            <div className="footer__top__left__info__row">
              Business code: 0314924845
            </div>
            <div className="footer__top__left__info__row">
              Legal Representative: Phung Tuan Duc
            </div>
            <div className="footer__top__left__info__row">
              Position: General Director
            </div>
          </div>
        </div>
        <div className="footer__top__right">
          <div className="footer__top__right__connect">
            <div className="footer__top__right__connect__title">
              Connect with us
            </div>
            <div className="footer__top__right__connect__list">
              <div className="footer__top__right__connect__list__icon">
                <ion-icon name="logo-instagram"></ion-icon>
              </div>
              <div className="footer__top__right__connect__list__icon">
                <ion-icon name="logo-facebook"></ion-icon>
              </div>
              <div className="footer__top__right__connect__list__icon">
                <ion-icon name="logo-twitter"></ion-icon>
              </div>
              <div className="footer__top__right__connect__list__icon">
                <ion-icon name="logo-youtube"></ion-icon>
              </div>
            </div>
          </div>
          <div className="footer__top__right__download">
            <div className="footer__top__right__download__title">
              Download the app
            </div>
            <div className="footer__top__right__download__list">
              <img
                className="footer__top__right__download__list__logo"
                src={logoGooglePlay}
                alt="google-play"
              />
              <img
                className="footer__top__right__download__list__logo"
                src={logoAppStore}
                alt="app-store"
              />
            </div>
          </div>
          <div className="footer__top__right__certificated">
            <div className="footer__top__right__certificated__title">
              Certificated
            </div>
            <div className="footer__top__right__certificated__list">
              <img
                className="footer__top__right__certificated__list__logo"
                src={logoSubscribe}
                alt="da-dang-ky"
              />
              <img
                className="footer__top__right__certificated__list__logo"
                src={logoAnnounced}
                alt="da-thong-bao"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__option">
          <div className="footer__bottom__option__combobox">
            <div className="footer__bottom__option__combobox__icon">
              <ion-icon name="location-sharp"></ion-icon>
            </div>
            <div className="footer__bottom__option__combobox__select">
              <div className="footer__bottom__option__combobox__select__title">
                Vietnam
              </div>
              <div className="footer__bottom__option__combobox__select__arrow">
                <ion-icon name="chevron-up-outline"></ion-icon>
              </div>
            </div>
            <div className="footer__bottom__option__combobox__dropdown"></div>
          </div>
          <div className="footer__bottom__option__combobox">
            <div className="footer__bottom__option__combobox__icon">
              <ion-icon name="language-outline"></ion-icon>
            </div>
            <div className="footer__bottom__option__combobox__select">
              <div className="footer__bottom__option__combobox__select__title">
                English
              </div>
              <div className="footer__bottom__option__combobox__select__arrow">
                <ion-icon name="chevron-up-outline"></ion-icon>
              </div>
            </div>
            <div className="footer__bottom__option__combobox__dropdown"></div>
          </div>
        </div>
        <div className="footer__bottom__copyright">
          &#169;&ensp;2022 Gojek UI by Pham Long
        </div>
      </div>
    </div>
  );
}
