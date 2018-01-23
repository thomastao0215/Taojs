import React, { Component } from 'react';
import './Header.css';
import Return from '../../static/return.svg'
import home from '../../static/home.png'
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
        <div className="middle">
            <span className="title" id="toptitle">我的地址</span>
        </div>
          <div className="right-header">
            <a href="http://www.ytstore.com.cn"><img src={home} /></a>
          </div>
      </div>
    );
  }
}

export default Header;
