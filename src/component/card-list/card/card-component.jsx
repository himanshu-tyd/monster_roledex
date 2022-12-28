import React from "react";
import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      // key={props.monsters.id}
      alt="monsters"
      src={'https://robohash.org/${props.monsters.id}&180x180'}
    />
    <h2>{props.monsters.name}</h2>
    <p>{props.monsters.email}</p>
  </div>
);
