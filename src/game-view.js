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
    console.log(this.props.match.params.level)
  }
  render(){
    return(
      <React.Fragment>
        <Route path={"/game/labelMe"} level={this.props.match.params.level} render={(props) => <GameContainer {...props} level={this.props.match.params.level} /> }/>
        <Route path={"/game/matchMe"} level={this.props.match.params.level} render={(props) => <Game_MatchMe {...props} level={this.props.match.params.level} /> }/>
      </React.Fragment>
    )
  }
}

export default GameViewContainer;
