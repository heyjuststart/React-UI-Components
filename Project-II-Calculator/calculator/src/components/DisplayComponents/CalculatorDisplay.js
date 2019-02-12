import React from 'react';
import './Display.css';

export default (props) => {
  const { value } = props;
  return <div className="calculator-display">{ value !== undefined || 0 }</div>;
};
