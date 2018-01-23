import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import WareHouse from './components/WareHouse/WareHouse'
import FixedBar from './components/FixedBar/FixedBar'

var total = 0
var promotion = 0
var tax = 0
var Status
function getCookie(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName === arr[0]){
            return arr[1];
        }
    }
    return null;
}

class App extends Component {
  constructor(props){
    super(props)
    this.updateState = this.updateState.bind(this)
    this.Constructor = this.Constructor.bind(this)
  }

  state = {
    isLogined:localStorage.isLogined,
    cartid:"10000",
    warehouse_name:"海外直邮",
    promotion:0.00,
    total:0.00,
    tax:0.00,
    items:[
      {
        id:'1',
        avatar:'',
        title:'',
        price:0,
        promotion:0,
        code:'',
        tax:0,
        isSelected:false,
        count:0
      }

      ]

  }

  componentDidMount(){
  //  fetch('./shoppingcart'+cartid)

  var token = getCookie("token")

  if (token !== null) {
     var content
     fetch("http://api.ytstore.com.cn/api/cart/find",
     {
       method: "GET",
       mode:"cors",
       credentials: 'include',
     })
     .then(response => response.json())
     .then(function(data) {
       // data就是我们请求的repos
       var content = data.content
       var items = this.Constructor(content)
       console.log(items)
       this.setState({
         items:items,
         cartid:content.id
       });

     }.bind(this));

   }
 }

 updateState(items){

   var prevState = this.state
   console.log(items)
   items.map((item) => {
     console.log(prevState.items[item.id-1])
     if (item.isSelected)
     {
       prevState.items[item.id-1].isSelected = true ;
     }
     else
     {
       prevState.items[item.id-1].isSelected = false ;
     }
   })
   total = items.reduce((total,item) => item.isSelected ? total + item.price * item.count : total ,0);
   promotion =  items.reduce((promotion,item) => item.isSelected ? promotion + item.promotion : promotion ,0);
   tax = this.state.items.reduce((tax,item) => item.isSelected ? tax + item.tax*item.count : tax + item.tax*item.count*0,0)
   prevState.total = total
   prevState.promotion = promotion
   prevState.tax = tax
   var newState = prevState
   console.log(newState)
    this.setState({
         cartid:this.state.cartid,
         warehouse_name:this.state.warehouse_name,
         promotion:newState.promotion,
         total:newState.total,
         items:newState.items,
         tax:newState.tax
       })

 }



  Constructor(content){


    var items = []
    var product = []
    var quantityMap = {}
    product = content.products
    quantityMap = content.quantityMap
    for (var i=0;i<product.length;i++){
      var item = {
        id:'',
        code:'',
        avatar:'',
        title:'',
        price:0,
        promotion:0,
        tax:0,
        isSelected:false,
        count:0
      }
      item['id']=i+1;
      item['code']=product[i].code;
      item['avatar']=product[i].avatar.url;
      item['title']=product[i].name;
      item['price']=product[i].price;
      var productCode = product[i].code;
      item['count']=quantityMap[productCode]
      item['tex']=0
      item['isSelected']=false
      console.log (item)
      items.push(item)
    }
    return items
  }



  render() {
    var count = this.state.items.reduce((total,item) => item.isSelected ? total + item.count :total + item.count*0,0);
    var total = this.state.items.reduce((totalX,item) => item.isSelected ? totalX + item.price*item.count : totalX + item.price*item.count*0,0)
    var tax = this.state.items.reduce((tax,item) => item.isSelected ? tax + item.tax*item.count : tax + item.tax*item.count*0,0)
    var items = this.state.items
    var itemsX = []
    for (var i=0;i<items.length;i++){
      var item = {
        id:'',
        code:'',
        avatar:'',
        title:'',
        price:0,
        promotion:0,
        tax:0,
        isSelected:false,
        count:0
      }
      if (items[i].isSelected == true) {
        item['id']=items[i].id
        item['code']=items[i].code;
        item['avatar']=items[i].avatar;
        item['title']=items[i].title;
        item['price']=items[i].price;
        var productCode = items[i].code;
        item['count']=items[i].count;
        item['promotion']=items[i].promotion
        item['tax']=items[i].tax
        item['isSelected']=true
        item['count']=items[i].count
        console.log (item)
        itemsX.push(item)
      }

    }
    var token = getCookie("token")
     if (token !== null)
     {
       console.log(this.state.items)
       Status =
       <WareHouse
         warehouse_name={this.state.warehouse_name}
         promotion={this.state.promotion}
         total={this.state.total}
         data={this.state.items}
         updateState = {this.updateState}
       />
     }
     else {
       Status =
       <div className="drawer-header">
           <a href="http://www.ytstore.com.cn/login">请登陆</a>
       </div>
     }
    return (
      <div className="App">
        <Header/>
        {Status}
        <div className="placeholder"></div>
        <FixedBar total={total} tax={this.state.tax} count={count} items={itemsX}/>

      </div>
    );
  }
}

export default App;
