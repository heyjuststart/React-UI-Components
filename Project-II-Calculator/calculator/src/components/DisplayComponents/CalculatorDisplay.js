import React from 'react';
import './Display.css';

export default (props) => {
  const value = props.children;
  return <div className="calculator-display">{ value || '|' }</div>;
};
