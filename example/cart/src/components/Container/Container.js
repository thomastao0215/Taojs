import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
  render() {
    return (
      <div className="Container">
          {this.props.children}
      </div>
    );
  }
}

export default Container;
