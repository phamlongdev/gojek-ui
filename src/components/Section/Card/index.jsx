import React from "react";
import "./card.css";

export default function Card({ data }) {
  return (
    <div className="card">
      <img className="card__img" src={data.img} alt="img-card" />
      <div className="card__title">{data.title}</div>
      <div className="card__content">{data.content}</div>
    </div>
  );
}
