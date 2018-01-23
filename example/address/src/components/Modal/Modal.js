import React from 'react'
import {createPortal} from 'react-dom';
import './Modal.css'
import classNames from 'classnames';
class Modal extends  React.Component {
  constructor(){
    super(...arguments);
    this.state = {
      visible:false ,
      mask_open:this.props.open,
      tip_disabled:false
    }
    const doc = window.document;
    this.node = doc.createElement('div');
    this.node.id = 'modal'


    doc.body.appendChild(this.node);
  }

  componentWillReceiveProps(nextProps) {
   this.setState({
     mask_open: nextProps.open
   });
}
  componentDidMount(){
    this.xxx = setTimeout(
      function(){
          this.setState({
            tip_disabled:true
          })
      }.bind(this),3000
    );
  }

  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  UpdateFunc(){

  }
  handleMask = () => {
    this.setState({
      mask_open: !this.state.mask_open
    });
  }
  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }

  render () {
    var maskMaskClass = classNames({
      'mask':!this.state.mask_open,
      'mask open':this.state.mask_open,
    });
    var modalContentClass = classNames({
      'modal':!this.state.mask_open,
      'modal open':this.state.mask_open,
    })
    var tipClass = classNames({
      'tip ':!this.state.tip_disabled,
      'tip tip-disabled':this.state.tip_disabled,

    })
    return createPortal(
      <div className='Modal'>
        <div id="modal" className={modalContentClass} >
          <div className="modal-content" >
            {this.props.children}
          </div>
        </div>
        <div id="mask" className={maskMaskClass} onClick={this.handleMask} >
          <span className={tipClass}>轻触返回</span>
        </div>


      </div>
    ,
    this.node);
  }
}
export default Modal
