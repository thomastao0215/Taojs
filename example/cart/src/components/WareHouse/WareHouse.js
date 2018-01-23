import React, { Component } from 'react';
import './WareHouse.css';
import Selection from '../Selection/Selection'
import Counter from '../Counter/Counter'
class WareHouse extends Component {
  constructor(props){
    super(props)
    this.updateState = this.updateState.bind(this)
    this.updateCount = this.updateCount.bind(this)


  }
  componentWillMount(){
    this.setState({
      items:this.props.data,
      promotion:this.props.promotion,
      total:this.props.total
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      items:nextProps.data,
      promotion:nextProps.promotion,
      total:nextProps.total
    })
  }

  updateState(id,isSelected){
    var x = this.state.items
    x[id].isSelected = !isSelected
    this.setState({
      items:x
    })
    this.props.updateState(this.state.items)
  }

  updateCount(id,count){
    var x = this.state.items
    x[id].count = count
    this.setState({
      items:x
    })
    this.props.updateState(this.state.items)
  }


  render() {


    return (
      <div className="WareHouse">
        <div className="cart-header">
          <div className="cart-header-inner">
            <div className="checkbox">
              <div className="checkbox-inner">
                <img src="" alt=""/>
              </div>
            </div>
            <div className="cart-name">
              <div className="cart-name-inner">
                <img className="cart-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAbCAYAAAAZMl2nAAAAGXRFWHRT
                  b2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXBJREFUeNrsl
                  rFKw0Acxi9Hxg6Co9JBdOkD6CaIIFhx
                  EV/CJ0iwHVvMG+hDiIvS3bG616GTDyAtmD1+J19oDI3+c7nE
                  Cv7h16TX6/VL7tfLeUEQqAq1DW54fgGmtgPpCiGOwTM4JE+g22QQD1yCB7AG7og5vwc99qk1SAvcgiHf98E56bNtwD6tuoLsgDE4A3NwykAJGbJtzj5jfsdpkC4d6IAJ2AWjJf1G/
                  GzCvmJvtMCHHuc+9WHvh3/HlH1KeaMFPgxyPsSCC4zLeqMtfJBWKW90BR+kJfJGf+ODEvggrdQbVeSNLvAhO9eu
                  Kj/WF29MkPYSH+quvDdtE2RGsVz4YOON+e2Zj5d3cALeHE+F1Jt
                  1k8Fn46v6nYrTi/eSZLE0hGGYXQOUzVNUsLZ8jhtFkZP9yAZ4zDzwUsztPmpyY3QF9gt2bNdNBjng
                  scPp8zLTuNVkkE0eX1zJo9WK1H+QlQ3iCxcg24Xr792RDwEGAHd9Zoir
                  zOlAAAAAAElFTkSuQmCC" alt="" />
                <div className="cart-text">{this.props.warehouse_name}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-body">
          {
            this.props.data.map(
              item =>
                <div key={item.id} className="cart-item">
                  <div className="cart-item-left">
                    <Selection
                      id={item.id-1}
                      isSelected={this.state.items[item.id-1].isSelected}
                      updateState={this.updateState}
                      />
                  </div>
                  <div className="cart-item-middle">
                    <div className="cart-item-box">
                      <div className="cart-item-img">
                        <img src={item.avatar} alt="a" />
                      </div>
                        <div className="cart-item-detail">
                          <div className="cart-item-title">{item.title}</div>
                          <div className="cart-item-option">
                            <Counter
                              id={item.id-1}
                              code={item.code}
                              count={item.count}
                              updateCount={this.updateCount}
                            />
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="cart-item-right">
                    <div className="cart-item-infor">
                      <div className="cart-item-price">¥{item.price.toFixed(2)}</div>
                    </div>
                    <div className="cart-item-alter">
                      <div className="cart-item-count">x {item.count}</div>
                    </div>
                  </div>
                </div>
            )
          }
        </div>
        <div className="cart-footer">
          <div className="cart-footer-inner">
            <div className="cart-promotion">活动优惠：- ¥{this.state.promotion.toFixed(2)}</div>
            <div className="cart-total">本仓总计（不含税）：¥ {this.state.total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WareHouse;
