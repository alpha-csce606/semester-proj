import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PrimaryButton extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Link to={this.props.link} id={this.props.id} className="primary-btn">
        {this.props.message}
      </Link>
    )
  }
}

export default PrimaryButton;
