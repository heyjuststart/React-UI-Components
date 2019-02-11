import React from 'react';

class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  increment() {
    this.setState({ ...this.state, clicks: this.state.clicks + 1});
  }

  render() {

    return (
      <div className="heart" onClick={() => this.increment()}>
        <i className="far fa-heart"></i>
        { this.state.clicks > 0 ? this.state.clicks : '' }
      </div>
    );
  }
}

export default Heart;
