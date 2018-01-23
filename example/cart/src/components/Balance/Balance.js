import React, { Component } from 'react';
import './Balance.css'



class Balance extends Component {

  render() {
    return (
      <div className="balance">
        <div className="balance-cell">
          <div className="cell-left">结算</div>
          <div className="cell-right"></div>
        </div>
        <div className="balance-cell">
          <div className="cell-left">商品总额</div>
          <div className="cell-right">¥{this.props.bill.amounts.toFixed(2)}</div>
        </div>
        <div className="balance-cell">
          <div className="cell-left">商品应付总额</div>
          <div className="cell-right">¥{this.props.bill.payable.toFixed(2)}</div>
        </div>
        <div className="balance-cell">
          <div className="cell-left">运费</div>
          <div className="cell-right">¥{this.props.bill.deliver.toFixed(2)}</div>
        </div>
        <div className="balance-cell">
          <div className="cell-left">税费</div>
          <div className="cell-right">¥{this.props.bill.tax.toFixed(2)}</div>
        </div>
        <div className="balance-cell">
          <div className="cell-left">应付总额</div>
          <div className="cell-right">¥{this.props.bill.total.toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default Balance;
