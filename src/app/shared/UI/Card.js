import React from "react";
import classes from "./Card.module.css";
/**
 *   return div card component with special styles
 * @param  {props} props
 * uses in all card
 */
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
