import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PrimaryButton extends Component{
  constructor(props){
    super(props);
  }
  selectGame = (e) => {
    this.props.chooseGame(e.target.id);
  }
  render(){
    return(
      <div id={this.props.id} className="primary-btn" onClick={this.selectGame}>
        {this.props.message}
      </div>
    )
  }
}

export default PrimaryButton;

/*
<Link to={this.props.link} id={this.props.id} level={this.props.levels[0]} className="primary-btn">
  {this.props.message}
</Link>
*/
