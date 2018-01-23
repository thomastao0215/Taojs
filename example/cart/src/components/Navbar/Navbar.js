import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import classNames from 'classnames';

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state={
      all:true,
      unpaid:false,
      paid:false,
      send:false
    };

    this.handleAll = this.handleAll.bind(this);
    this.handleUnpaid= this.handleUnpaid.bind(this);
    this.handlePaid = this.handlePaid.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }
  handleAll() {
    this.state.unpaid=false;
    this.state.paid=false;
    this.state.send=false;
    this.state.all=true;
  }
  handleUnpaid() {
    this.state.unpaid=true;
    this.state.paid=false;
    this.state.send=false;
    this.state.all=false;
  }
  handlePaid() {
    this.state.unpaid=false;
    this.state.paid=true;
    this.state.send=false;
    this.state.all=false;
  }
  handleSend() {
    this.state.unpaid=false;
    this.state.paid=false;
    this.state.send=true;
    this.state.all=false;
  }
  render() {
    var allClass = classNames({
      'td':true,
      'tab':true,
      'tab-cur':this.state.all
    });
    var unpaidClass = classNames({
      'td':true,
      'tab':true,
      'tab-cur':this.state.unpaid
    });
    var paidClass = classNames({
      'td':true,
      'tab':true,
      'tab-cur':this.state.paid
    });
    var sendClass = classNames({
      'td':true,
      'tab':true,
      'tab-cur':this.state.send
    });


    return (
      <div className="Navbar m-table m-orderstab ">
          <ul className="tr ">
              <li className={allClass} onClick={this.handleAll}>
                <Link to="/" className="link-span">全部</Link>
              </li>
              <li className={unpaidClass} onClick={this.handleUnpaid}>
                <Link to="/unpaid" className="link-span">待付款</Link>
              </li>
              <li className={paidClass} onClick={this.handlePaid}>
                <Link to="/paid" className="link-span">待发货</Link>
              </li>
              <li className={sendClass} onClick={this.handleSend}>
                <Link to="/send" className="link-span">待收货</Link>
              </li>
          </ul>
      </div>
    );
  }
}

export default Navbar;
