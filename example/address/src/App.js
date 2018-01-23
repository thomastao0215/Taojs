import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Address from './components/Address/Address'
import Selection from './components/Selection/Selection'
import Account from './components/Account/Account'
import FixedBar from './components/FixedBar/FixedBar'
import Modal from './components/Modal/Modal'
import { Picker, List, WhiteSpace, InputItem,Toast} from 'antd-mobile';
import { district, provinceLite as province } from 'antd-mobile-demo-data';
import arrayTreeFilter from 'array-tree-filter';

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

function setCookie(name,value)
{
var Days = 30;
var exp = new Date();
exp.setTime(exp.getTime() + Days*24*60*60*1000);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', paddingLeft: 15 }}
  >
    <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',  textAlign: 'left'}}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
    </div>
  </div>
);

class App extends Component {
  state = {
    address :[],
    open:false,
    detail:null,
    name:null,
    pca:["","",""],
    realid:null,
    phone:null

  }
  constructor(props){
    super(props)
    this.updateState = this.updateState.bind(this)
    this.updateInnerState = this.updateInnerState.bind(this)
    this.ToAddNew = this.ToAddNew.bind(this)
    this.ConfirmToAdd = this.ConfirmToAdd.bind(this)
    this.ConfirmToSend = this.ConfirmToSend.bind(this)

    console.log(district)
  }

  componentDidMount(){
    Toast.loading('加载中', 1, () => {
      console.log('Load complete !!!');
    },true);

    var token = getCookie("token")

    if (token !== null) {
       var content

       //加载所有地址
       fetch("http://api.ytstore.com.cn/api/address/findAll",
       {
         method: "GET",
         mode:"cors",
         credentials: 'include',
       }).then ((res) => res.json())
       .then(function(data) {
         // data就是我们请求的repos
         console.log (data)
         var address = data
         var items = []

         for (var i =0; i<data.length;i++){
           var addressItem =
           {
             id:0,
             addressCode:"",
             receiver:"",
             telphone:"",
             detail:"",
             isSelected:false
           }
           addressItem['id']  = i +1;
           addressItem['addressCode'] = data[i].addressCode;
           addressItem['receiver'] = data[i].realName;
           addressItem['telphone'] = data[i].phone;
           var values = [data[i].province,data[i].city,data[i].area]
           const result = arrayTreeFilter(
             district,(item,level) => item.value === values[level]
           );
           console.log(result)
           addressItem['detail']  = result[0].label+result[1].label+result[2].label+data[i].detail

           items.push(addressItem)
         }
        console.log(items)
         this.setState({
           address:items
         });

       }.bind(this));
       Toast.hide();

     }



  }
  ConfirmToAdd(){
    console.log(this.state)
    console.log(this.state.pca[0])
    var judge = !this.state.PhoneHasError && !this.state.IdHasError && this.state.detail !==null && this.state.name !==null && this.state.pca[0] !=="" && this.state.pca[1] !=="" && this.state.pca[2] !==""
    var P = this.state.pca[0] || null
    var C = this.state.pca[1] || null
    var A = this.state.pca[2] || null
    if (judge){
      var json = {
        name:this.state.name,
        phone:this.state.phone,
        country:"86",
        province:P,
        city:C,
        area:A,
        detail:this.state.detail,
        realName:this.state.name,
        realId:this.state.realid
      }


      var headers = new Headers({
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
      });
      Toast.loading('加载中',1, () => {
        console.log('Load complete !!!');
      },true);

      //添加地址
      fetch("http://api.ytstore.com.cn/api/address/add", {
        method: "POST",
        mode:"cors",
        credentials: 'include',
        headers,
        body:  JSON.stringify(json)
      }).then(function(res) {
        if (res.ok) {
          this.setState({
            open:false,
            detail:null,
            name:null,
            pca:["","",""],
            phone:null,
            realid:null
          })
          Toast.hide();

        }
      }.bind(this))


    }
  }
  ConfirmToSend(){

    console.log(this.state)
    this.state.address.map(item => {

      if (item.isSelected) {
        console.log(item)

        var addressItem= JSON.stringify(item)
        console.log(item)
        window.sessionStorage.setItem("address",addressItem)
        window.history.go(-1);
      }
    })

  }
  ToAddNew(){

      this.setState({
        open:!this.state.open
      })

  }

    updateInnerState(id,isSelected){
      var x = this.state.address
      x[id].isSelected = isSelected
      this.setState({
        address:x
      })
      this.updateState(this.state.address)
    }

    onPickerChange = (val) => {

      console.log(val);
      let colNum = 1;
      const d = [...this.state.data];
      const asyncValue = [...val];
      if (val[0] === 'zj') {
        d.forEach((i) => {
          if (i.value === 'zj') {
            colNum = 2;
            if (!i.children) {
              i.children = [{
                value: 'zj-nb',
                label: '宁波',
              }, {
                value: 'zj-hz',
                label: '杭州',
              }];
              asyncValue.push('zj-nb');
            } else if (val[1] === 'zj-hz') {
              i.children.forEach((j) => {
                if (j.value === 'zj-hz') {
                  j.children = [{
                    value: 'zj-hz-xh',
                    label: '西湖区',
                  }];
                  asyncValue.push('zj-hz-xh');
                }
              });
              colNum = 3;
            }
          }
        });
      } else {
        colNum = 1;
      }
      this.setState({
        data: d,
        cols: colNum,
        asyncValue,
      });
      console.log(this.state)
    };

    getSel() {
      const value = this.state.pickerValue;
      if (!value) {
        return '';
      }
      const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
      return treeChildren.map(v => v.label).join(',');
    }


  updateState(address){

    var prevState = this.state

    address.map((item) => {
      if (item.isSelected)
      {
        prevState.address[item.id-1].isSelected = true ;
      }
      else
      {
        prevState.address[item.id-1].isSelected = false ;
      }
    })
    var newState = prevState
     this.setState({
          address:newState.address
    })

  }

  onChange = (phone) => {
  if (phone.replace(/\s/g, '').length < 11) {
    this.setState({
      PhoneHasError: true,
    });
  } else {
    this.setState({
      PhoneHasError: false,
    });
  }
  this.setState({
    phone,
  });
}

IdOnChange = (realid) => {
  if (realid.replace(/\s/g, '').length < 18) {
    this.setState({
      IdHasError: true,
    });
  } else {
    this.setState({
      IdHasError: false,
    });
  }
  this.setState({
    realid,
  });
}
onChangex = (detail) => {
this.setState({
  detail,
});
}
onChangeName = (name) => {

this.setState({
  name,
});
}
onBlur(v){
    Toast.info('姓名和身份证号码将用于清关，请务必真实填写，以免造成不必要的麻烦', 3);
}


  render() {
    return (
      <div className="App">
        <Header />
        <div className="btn confirm addnew " onClick={this.ToAddNew}>添加新地址</div>
        <div>
          {
            this.state.address.map(
              item =>
              <div className="address-body">
                <div key={item.id} className="address-item">
                  <div className="address-item-left">
                    <Selection
                      id={item.id-1}
                      isSelected={this.state.address[item.id-1].isSelected}
                      updateState={this.updateInnerState}
                      />
                  </div>

                  <div className="address-item-middle" >
                    <Address
                      address = {this.state.address[item.id-1]}
                       />
                  </div>

                </div>
                </div>
            )
          }
        </div>
        <Modal open={this.state.open} update={this.Update}>

        <div className="Add-new-Address">

          <Picker
          title="选择地区"
          extra="请选择(可选)"
          data={district}
          value={this.state.pca}
          onChange={v => this.setState({ pca: v })}
          onOk={v => this.setState({ pca: v })}
        >
          <CustomChildren>请选择地区</CustomChildren>
        </Picker>
        <InputItem
          type="text"
          clear
          placeholder="请输入地址"
          onChange={this.onChangex}
          value={this.state.detail}
        >收件人地址</InputItem>
        <InputItem
          type="text"
          clear
          placeholder="请输入姓名"
          onChange={this.onChangeName}
          value={this.state.name}
          onBlur={this.onBlur}
        >收件人姓名</InputItem>
        <InputItem
          type="number"
          placeholder="请输入身份证号码"
          error={this.state.IdHasError}
          onChange={this.IdOnChange}
          value={this.state.realid}
        >身份证号码</InputItem>

        <InputItem
          type="number"
          placeholder="请输入手机号"
          error={this.state.PhoneHasError}
          onChange={this.onChange}
          value={this.state.phone}
        >手机号码</InputItem>

      <div className="btn confirm" onClick={this.ConfirmToAdd}>确认添加</div>

        </div>
        </Modal>

        <div className="btn submit" onClick={this.ConfirmToSend}>送到该地址</div>


      </div>
    );
  }
}

export default App;
