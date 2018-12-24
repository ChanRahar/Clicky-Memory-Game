import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container" attribute={props.click} onClick={() => props.clickCount(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
    
  </div>
);

export default Card;
