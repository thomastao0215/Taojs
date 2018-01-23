import React, { Component } from 'react';
import './All.css'
import Cell from '../Cell/Cell'
class All extends Component {
  render() {
    return (
      <div className="All">
           <div class="m-orderbox">
             <div className="m-orderitem">
               <ul class="m-goodslist">
                 <Cell/>
               </ul>
               <div class="f-tar m-orderinfo"></div>
               </div>
           </div>
      </div>
    );
  }
}

export default All;
