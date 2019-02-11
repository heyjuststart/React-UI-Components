import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

export default () => {
  return (
    <a className="card-container" href="http://https://www.reactjs.org">
      <CardBanner />
      <CardContent />
    </a>
  );
};
