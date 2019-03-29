import React,{ Component } from 'react';

import BlankComponent from './individualblank'

class GameBlanksHolder extends Component{
  constructor(props){
    super(props);
    this.state = {
      words: this.props.words
    }
  }

  returnBlanks(){
    return this.props.words.map((item,outterIndex) => (
      <li className="row game-word-specific-blank" id={outterIndex}>
      {
        item.split('').map((innerItem,innerIndex) => (
          <BlankComponent letter={innerItem}/>
        ))
      }
      </li>
    ))
  }
  render(){
    var words = this.props.words;
    return(
      this.returnBlanks()
    )
  }
}

export default GameBlanksHolder;
