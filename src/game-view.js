import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GameContainer from './games/game-container';
import Game_MatchMe from './games/game-matchme';

class GameViewContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeRoute: undefined
    }
  }
  componentDidMount(){
    console.log(this.props.match.params)
  }
  render(){
    return(
      <React.Fragment>
        <Route path="/game/labelMe" component={GameContainer}/>
        <Route path="/game/matchMe" component={Game_MatchMe}/>
      </React.Fragment>
    )
  }
}

export default GameViewContainer;
