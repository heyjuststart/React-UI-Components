import React from 'react';
import './Button.css';

export default props => {
  const text = props.children;
  const classes = props.className;
  // const onClick = props.onClick || console.log;

  return <div onClick={props.onClick} className={`number-button ${classes}`}>{text}</div>;
};
