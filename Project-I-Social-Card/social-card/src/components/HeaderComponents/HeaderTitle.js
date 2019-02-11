import React from 'react';
import './Header.css';
import moment from 'moment';

export default () => {
  return (
    <div className="header-title">
      <p>
        Lambda School <span>@LambdaSchool • { moment().format('DD MMM') }</span>
      </p>
    </div>
  );
}
