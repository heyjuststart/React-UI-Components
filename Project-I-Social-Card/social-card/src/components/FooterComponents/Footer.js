import React from 'react';
import Heart from './Heart';
import './Footer.css';

export default () => {

  return (
    <footer className="footer">
      <i className="far fa-comment"></i>
      <i className="fas fa-sync"></i>
      <Heart />
      <i className="far fa-envelope"></i>
    </footer>
  );
}
