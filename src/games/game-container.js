import React,{ Component } from 'react';
import Game_LabelMe from './game-labelme';

class GameContainer extends Component{
  constructor(props){
      super(props);
  }
  render(){
    return(
      <Game_LabelMe solution="Golgi Apparatus" level="3"/>
    )
  }
}

export default GameContainer;
