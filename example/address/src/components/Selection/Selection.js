import React, { Component } from 'react';
import './Selection.css'
class Selection extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id,
      isSelected : this.props.isSelected
    }
    this.handleClickimg = this.handleClickimg.bind(this)
  }
  handleClickimg(){
    this.setState({
      id: this.state.id,
      isSelected : !this.state.isSelected
    })
    this.props.updateState(this.state.id,!this.state.isSelected)
  }


  render() {
    let button = null;
    var isSelected = this.state.isSelected
    if (isSelected) {
      button = <img onClick={this.handleClickimg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAulJREFUeNrMmU1sEkEYhr+urZrGHvAnFFCRECsnPSAcvNlz40+iRq0nTYDW6q2JsZEEPXk0Kn8aT40aNZp40JvePOlBLqgBDxoaSGh6qDFpmzS+H36YTQHZAXbZN3myBJidhxl2dmZ2IBgMUgfRwGFwVI5jwA22yee/wAL4Bj6C93JcV61oUPH7HjADzoO9//neVrATHASn5L0fYB4kQUmlJYxkB7gPvoNrbeRahctcB0VwF2zvleBp8AVMg83UfbZIL3zVtW5Hgtz9KfBMuqvX4XM+l54ZVBUcBq9AjMzPtNQ1bFSQf80TMEHWZULq3GRE8B44RtaH67zTTvAsiFL/chmcaSW4S/6w/U5KXBoEbxkdm0wOO9zcKMiD6EWyTy7Vbwaa7lIfspHgUH2I04RJsl8usBvLhcFus2tzOByUTCbJ5/MZLbIHBFlw3Aq5dDpN4XCYZmdnVYqOs2DQCjm/30/FYpHm5uZUitdacMwquVgsRktLSyqnCGgyE7ajHMfFgiNKJVwuSqVStaPJcpwRTbVEPB6nUChEmUymqaRerlAodCP3706yrFIgkUhQqVQit9vdILlRbmpqqis5dtNk9WU45XKZotFog6QJcrXqBrDsfIkXJ1VLOp1Oymaz5PF4atIrKyvk9Xp7Kcd5ocl6VTmVSoUikUitJUdHR82Q43zSZFFN3Ujm83nK5XK9luO84y7WZFHtsdlk4SfYp8l2xLwNZzPstF4fB3mqv2ojudX68kPTNecjGwk+rO/f6O8kN8CiDeTYId5s0VQFV20gOKNvqI334sfgQR/lsuBpu50F/gVv+iD3GlwxsvXBVxBvub21UI4b5FyzkaTVdOs3OA4yFshxHSekTjIqyFmTtemkSVf3opw7JnWRqqD+wgnIH7gXg/mqtFpAzt12wmokVdn12g9uq84hJQtS1i+tVjVSaKDDxxC80XiE/j6GOAQOyOKrvr5ZFiHeh/7MsxLwgTp4DPFHgAEAWJnmqBwgVNQAAAAASUVORK5CYII=" alt=""/>
    } else {
      button =
      <img onClick={this.handleClickimg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NJREFUeNrMmUtoE1EUhm+mvijtplXoA6IUtEKkFROsYivatVoXvu1KUKlJo+BGRJRWXKvVKqWCC0NrQQi6UFxowQfWkqrVjQ9wYU10kbhp6aJK9T/6T7mEpJnEJDMHfm5ukt7z5cy9M+ecurxer8rBDMgHbeW4CqqByvj5FBSDPkIRaJjjbPJCkUhkXkcLsgSrhfzQQcg9z/eWQEuhBmgX3/sChaBrUNSqQ6uAFVAXdBhazPdGoWfQC+gTIzbFz8oY0ZXQRqgZWg+dhk5C/dA56Ecmxy4Ll1gicJ0RERuCeqGnWUZ/M3QM2st5HOrAJb6TK6BEt0cW4fwef/Ub9X+2lldjB+dyyY8D9Fe6zZ7KSqGwBncCassDnOIabVxTMaphn89XahWwBBqEtkET3OiXVf5N1mykD/E1CMgSK4CXGH45aVugd6pw9pY+ovR5MRPgHijA1/KrPqsCG/ae+NjOaSeiuDsdYCV0la+DedpvViFfy0HhtBeQFakA5WQtg+5CV1SRDZA9vFMIQ3cyoJs3YcVbiV12luMRRNGtAx6FFkED0LhddIjiOBkWkukvoKid3+lT9pvJ0I4oGgLn5SWWtOKJ3XSIojCMkWmdwZRJ5fBsLaSZLK1mXic24iBAk8UrgPWcfHAQ4HuOqwWwmpNvDgL8zrHKSErTnWKTHMsF0MXJb+VAM3RaB3GZLJOGtveqHQRYZe5FQzu99Q4CnLuzCOArTpocBGiyjAngY06aHQRosgwbfAZPsG5tsZsMCUILWYQpYrAdEeLnfgdEz2QIIXGYNfNBKcRnWFQ32Bi9RjLMkGkuYZWq6gZfd9sYvS6O/YheNLkmkXQ7waLab0P0AvQd18sOHTChlZxSwHiKCOfRmgMBRC+Rri6+zZRb3n8I1RUBro6+xGcf4IYydRaCLP+kF/iowJH08D5cS5+dVlofcoL2Qw+gFWxPdBQAroNrL4fui09E76cVQLFpbljzckuLTLpda/IUtTDXNOhjJ+CmU33ZSgPzAA9NpbZPpUXyPEuwTTyE+7RDGQTYwHx/5LLYRJfu6nnoEAt8sZesvkaYEcWScssaZiUb+Aht0rbQTeiM3FLy1USPc89cYBTa6TCbDEh+wC1G/6vVP8q2yy8Ln1L/muHyQG9l4V/PiJVrNUWMkR3jSR1VKf4Nkcn+CDAAJ2LbtklBp/UAAAAASUVORK5CYII=" alt="" />
    }

    return (
      <label className="Selection" onClick={this.handleClickimg}>
          {button}
      </label>
    );
  }
}

export default Selection;
