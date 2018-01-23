import React, { Component } from 'react';
import './Orders.css'
class Orders extends Component {
  render() {
    return (
      <div className="orders">
        {this.props.orders.map(item =>
          <div className="order">
            <div className="up-box">
              <div className="up-left">
                {item.tag}
              </div>
              <div className="up-right">
                预计{item.month}月{item.date}日送达
              </div>
            </div>
            <div className="down-box">
              <div className="down-img ">
                <img src={item.imgURL} width="100px"/>
              </div>
              <div className="down-content">
                <h5>{item.title}</h5>
              </div>
              <div className="down-others">
                <div className="price">¥{item.price}</div>

                <div className="count">x{item.count}</div>
              </div>
            </div>
          </div>
        )
      }
      </div>
    );
  }
}

export default Orders;
