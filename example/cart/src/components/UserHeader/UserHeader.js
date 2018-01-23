import React, { Component } from 'react';
import './UserHeader.css'

class UserHeader extends Component {
  render() {
    return (
      <div className="UserHeader">
          <div className="avatar">
            <a>
              <img src="//haitao.nos.netease.com/ecb77c8578f44fffa4ea9cea62ef40b6.png?imageView&thumbnail=65x0&quality=95&" alt="用户头像"/>
            </a>
          </div>
          <div className="user-name">
            <a>
              <span className="m-nick">THOMAS TAO</span>
              <i className="u-arrow"></i>
            </a>
          </div>
      </div>
    );
  }
}

export default UserHeader;
