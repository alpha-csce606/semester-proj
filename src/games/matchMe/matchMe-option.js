import React, { Component } from 'react';

class MatchMeOption extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    this.props.setActive(this.props.index);
  }
  render(){
    let inputClasses = "matchme-option ";
    inputClasses += (this.props.index == this.props.activeItem) ? 'active':'';
    return(
      <li id={this.props.index+1} onClick={this.handleClick} className={inputClasses}>{this.props.index+1}. {this.props.option}</li>
    )
  }
}
export default MatchMeOption;
