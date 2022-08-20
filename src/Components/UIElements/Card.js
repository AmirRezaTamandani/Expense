import React from "react";
import "./Card.css";
const Card=(props)=> {
  const CardClassName = "card " + props.className;
  return <div className={CardClassName}>{props.children}</div>;
}

export default Card;
