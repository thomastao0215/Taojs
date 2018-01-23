import React, { Component } from 'react';
import './FixedBar.css';

class FixedBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items:props.items,
      total:props.total,
      count:props.count,
      tax:props.tax
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    console.log (this.props.state)
    var payload ={
      isCart:1,
      items:this.state.items,
      total:this.state.total,
      count:this.state.count,
      tax:this.state.tax
    }
    
    payload= JSON.stringify(payload)
    console.log(payload)
    window.sessionStorage.setItem("payload",payload)
    window.location.href = "http://www.ytstore.com.cn/confirm"

  }
  componentWillReceiveProps(nextProps)
  {
    this.setState({
      items:nextProps.items,
      total:nextProps.total,
      count:nextProps.count,
      tax:nextProps.tax
    })
  }


  render() {

    return (
      <div className="FixedBar" >
        <div className="fixed-left"></div>
        <div className="fixed-middle">
          <div className="fixed-total">总价(不含税):
            <label>¥{this.props.total.toFixed(2)}</label></div>
          <div className="fixed-tax">商品税费：¥{this.props.tax.toFixed(2)}</div>
        </div>
        <div className="fixed-right">
          <div className="checkout-button" onClick={this.handleClick}>
            结算({this.props.count})
          </div>
        </div>
      </div>
    );
  }
}

export default FixedBar;
