import React, { Component } from 'react';
import './Account.css';
import classNames from 'classnames'
import fetch from 'isomorphic-fetch';
import route from '../../route.json';


class Account extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        account:'',
        password:'',
        logined:false
      };

      this.handleAccountChange = this.handleAccountChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAccountChange(event) {
      this.setState({account: event.target.value});
    }
    handlePasswordChange(event) {
      this.setState({password: event.target.value});
    }

    handleSubmit(event) {

      var jsondata = {
        account: this.state.account,
        password: this.state.password
      }
      var headers = new Headers({
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
      });

      fetch(route.requesthost+route.requesturl.login, {
        method: "POST",
        mode:"cors",
        credentials: 'include',
        headers,
        body:  JSON.stringify(jsondata)
      }).then(function(res) {
        if (res.ok) {
          alert("登陆成功！愿你享受你的生活～～");
          window.history.go(-1);
        } else if (res.status === 401) {
          this.setState({
            error:"Oops! You are not authorized."
          })
        }
      }).catch((e) => {

        this.setState({
          error:"Internal ERROR"
        })
        this.xxx = setTimeout(
          function(){
              this.setState({
                error:null
              })
          }.bind(this),3000
        );

      });
      event.preventDefault();

    }

    render() {
      var errorClass = classNames({
        'error': this.state.error == null,
        'error active-error': this.state.error,

      })

      return (
        <form className="Account">
          <div className="text-filed">
            <input type="text" value={this.state.phone} onChange={this.handleAccountChange} placeholder="账号／手机号／邮箱"/>
          </div>
          <div className="text-filed">

            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="请输入密码" />
          </div>
          <div className="box">
            <div className="forget">忘记密码？</div>
          </div>
          <span id="error" className={errorClass}>{this.state.error}</span>
          <div className="btn login" onClick={this.handleSubmit}>登陆</div>
        </form>
      );
    }

}

export default Account;
