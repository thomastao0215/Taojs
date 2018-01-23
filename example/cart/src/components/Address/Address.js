import React, { Component } from 'react';
import './Address.css'
class Address extends Component {
  handleClick() {
    console.log("click");
  }
  render() {
    return (
      <div className="address" onClick={this.handleClick} >
        <div className="up-box">
          <div className="receiver">收货人：{this.props.receiver}</div>
          <div className="telphone">{this.props.telphone}</div>
          <div className="rec-address">收货地址：{this.props.address}</div>
        </div>
      </div>
    );
  }
}

export default Address;
