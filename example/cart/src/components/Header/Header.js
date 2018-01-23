import React, { Component } from 'react';
import './Header.css';
import Return from '../../static/return.svg'
class Header extends Component {
  returnBack() {
      window.history.go(-1);
  }
  render() {
    return (
      <div className="header">
        <div className="left">
          <img src={Return} alt="logo" className="return-button" onClick={this.returnBack}/>
        </div>
        <div className="middle">购物车</div>
        <div className="right"></div>
      </div>
    );
  }
}

export default Header;
