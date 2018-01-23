import React, { Component } from 'react';
import './Cell.css'
class Cell extends Component {
  render() {
    return (
      <li className="Cell">
        <div className="m-orderhd">
          <span className="ordertype">交易关闭</span>
          <span className="ordertime">2017-07-31 15:57:16</span>
        </div>
        <section>
          <div className="goodsdetail f-cb">
            <div className="gimg u-tagbox f-fl">
              <a>
                <img src="http://haitao.nos.netease.com/j1hazm3f4_800_800.jpg?imageView&thumbnail=60x60&quality=95&type=webp"/>
              </a>
            </div>
            <div className="ginfo1 f-fl">
              <div className="gtitle">
                <a href="/"> PHILIPS 飞利浦 声波震动电动牙刷 HX3215</a>
              </div>
              <div className="gsku">
                <a>白色</a>
              </div>
            </div>
            <div className="ginfo2 f-fr"></div>
          </div>
        </section>
      </li>
    );
  }
}

export default Cell;
