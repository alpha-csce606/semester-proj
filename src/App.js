import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './common.css';

import PageHeader from './common/page-header';
/*
import Menu from './common/menu';
import HomePage from './homepage';
*/
import GameContainer from './games/game-container';
import ModalWindow from './common/modal-window';

import ChooseGame from './choose-game';
import GameViewContainer from './game-view';
/*
import Game_LabelMe from './games/game-labelme';
*/

class App extends Component {
  constructor(){
    super();
    this.state = {
      routerConfig: {

      }
    }
  }
  componentDidMount(){
    this.setState({
      url: this.props.location
    })
  }
  render() {
    return (
      <Router>
        <div className="app-container">
          <PageHeader page="BioPro - Learn Biology the fun way"/>
          <div className="app-view-container">
            <Route exact path="/" component={ChooseGame}/>
            <Route exact path="/game/:id/:level" component={GameViewContainer}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

  /*<Route exact path="/" component={GameContainer}/>*/
