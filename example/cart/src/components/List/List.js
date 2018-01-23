import React, { Component } from 'react';
import './List.css'
class List extends Component {
  render() {
    return (
      <div className="List">
          <li className="cell">
              <div className="cell-inner">
                  <div class="cell-left">会员中心</div>
                  <div class="cell-right"></div>
              </div>
          </li>
          <li className="cell">
             <div className="cell-inner">
                  <div class="cell-left">我的收藏</div>
                  <div class="cell-right"></div>
              </div>
          </li>
          <li className="cell">
             <div className="cell-inner">
                  <div class="cell-left">关于洋桃</div>
                  <div class="cell-right"></div>
              </div>
          </li>
          <li className="cell">
             <div className="cell-inner">
                  <div class="cell-left">联系小洋桃</div>
                  <div class="cell-right"></div>
              </div>
            </li>
        
      </div>
    );
  }
}

export default List;
