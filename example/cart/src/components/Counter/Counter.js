import React, { Component } from 'react';
import './Counter.css';
import classNames from 'classnames' ;

class Counter extends Component {
  constructor(props){
    super(props)
    var disabled = (this.props.count) <= 1 ? true : false
    this.state = {
      id: props.id,
      count : props.count,
      disabled: disabled,
      code: props.code
    }
    console.log(this.state)
    this.handleDecrease = this.handleDecrease.bind(this)
    this.handleIncrease = this.handleIncrease.bind(this)
  }
   componentWillReceiveProps(nextProps){
    var  disabled = (nextProps.count) <= 1 ? true : false
     this.setState({
       id: nextProps.id,
       count : nextProps.count,
       disabled: disabled,
       code: nextProps.code

     })
   }

  async handleUpdateData(code,newCount)
  {
    console.log(code)
    console.log(newCount)
    var jsondata = {
      productCode:code,
      quantity:newCount
    }
    var requestState = false
    var headers = new Headers({
      "Content-Type":"application/json",
      "Access-Control-Allow-Origin":"*"
    });

      const res = await fetch("http://api.ytstore.com.cn/api/cart/update", {
      method: "POST",
      mode:"cors",
      credentials: 'include',
      headers,
      body:  JSON.stringify(jsondata)
    })
    if (res.ok) {
      requestState = true
    }

    return requestState


  }

   async handleDecrease() {
    var preCount = this.state.count
    if (preCount <= 2) {
      this.setState({disabled:true})
    }
    var newCount = preCount - 1;
    //Update data on Server First

    var updateResponse = await this.handleUpdateData(this.state.code,newCount)
    console.log(updateResponse)
    if (updateResponse == true){
      this.setState({
        id: this.state.id,
        count : newCount
      })
      this.props.updateCount(this.state.id,newCount)
      console.log("Updated")
    }
    else {
        console.log("Failed to update")
        }

  }

  async handleIncrease(){
    var preCount = this.state.count
    if (preCount >= 1) {
      this.setState({disabled:false})
    }
    var newCount = preCount + 1;
    //Update data on Server First
    var updateResponse = await this.handleUpdateData(this.state.code,newCount)
    console.log(updateResponse)
    if (updateResponse == true){
      this.setState({
        id: this.state.id,
        count : newCount
      })
      this.props.updateCount(this.state.id,newCount)
            console.log("Updated")
    }
    else {
        console.log("Failed to update")
        }


  }
  render() {
    var decrease_button_complex = classNames({
      'decrease-button':!this.state.disabled,
      'decrease-button disabled':this.state.disabled
    });
    return (
      <div className="Counter">
        <button className={decrease_button_complex} onClick={this.handleDecrease} disabled={this.state.disabled}>-</button>
        <button className="increase-button" onClick={this.handleIncrease}>+</button>
      </div>
    );
  }
}

export default Counter;
