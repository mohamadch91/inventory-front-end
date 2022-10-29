import React from 'react';
import classes from './Card.module.css';
/**
 * @component return div card component with special styles 
 * @param  {props} props
 */
const Card = (props) => {
    return <div className={classes.card}>{props.children}</div>;
};

export default Card;
