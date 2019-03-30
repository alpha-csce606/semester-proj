import React,{ Component } from 'react';

import BlankComponent from './individualblank'

class GameBlanksHolder extends Component{
  constructor(props){
    super(props);
    this.state = {
      words: []
    }
  }
  componentDidMount(){
    const arr = [];
    let obj = {};
    this.props.words.map((item,index) => (
      obj = {},
      obj.value = item,
      obj.id = index,
      obj.reveal = false,
      arr.push(obj)
    ));

    this.setState({
      words: arr
    })
  }
  returnBlanks(){
    return this.props.words.map((item,outterIndex) => (
      <li className="row game-word-specific-blank" id={outterIndex}>
      {
        item.split('').map((innerItem,innerIndex) => (
          <BlankComponent letter={innerItem} />
        ))
      }
      </li>
    ))
  }
  updateScore(evt){
    console.log('Game-blank holder component',parseInt(evt));
  }
  returnBlankStates(){
    return this.state.words.map((item,index) =>
      {
        if(item.value == ' '){
          return (
              <li className="row game-blank-row" id={index}></li>
          )
        }else{
          return(
            <li className="row game-word-specific-blank" id={index}>
              <BlankComponent isRevealed={item.reveal} letterIndex={item.id} letter={item.value} updateParent={this.updateScore}/>
            </li>
          )
        }
      }
    )
  }
  render(){
    return(
      this.returnBlankStates()
    )
  }
}

export default GameBlanksHolder;
