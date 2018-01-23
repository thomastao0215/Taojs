import React, { Component } from 'react';
import './Navbar.css'
import route from '../../route.json';
import NavArrow from '../../assets/download.png'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
          <a href={route.pagedomain+route.redirecturl.orders} className="up-nav">
              <a id="my-order" >我的订单</a>
              <a id="nav-arrow">
                <img src={NavArrow} alt="NavArrow"/>
              </a>
          </a >
          <div className="down-nav">

              <li className="order-all">
                  <a href={route.pagedomain+route.redirecturl.orders}>全部</a>
              </li>
              <li className="wait-pay">
                  <a href={route.pagedomain+route.redirecturl.orders+"unpaid"}>待付款</a>
              </li>
              <li className="wait-send">
                  <a href={route.pagedomain+route.redirecturl.orders+"paid"}>待发货</a>
              </li>
              <li className="wait-receive">
                  <a href={route.pagedomain+route.redirecturl.orders+"send"}>待收货</a>
              </li>


          </div>
      </div>
    );
  }
}

export default Navbar;
