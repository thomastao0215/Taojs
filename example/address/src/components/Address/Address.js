import React, { Component } from 'react';
import './Address.css';
import classNames from 'classnames';
class Address extends Component {

  handleClick() {

  }
  render() {
    var dic  = {
        cn:'中国',
        zj:'浙江',
        hangzhou:'杭州'
    }
    return (
      <div className="address" onClick={this.handleClick} >
        <div className="up-box">
          <div className="receiver">收货人：{this.props.address.receiver}</div>
          <div className="telphone">{this.props.address.telphone}</div>
          <div className="rec-address">收货地址：{this.props.address.detail}</div>
        </div>

      </div>
    );
  }
}

export default Address;
