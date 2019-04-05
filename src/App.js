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
/*
import Game_LabelMe from './games/game-labelme';
*/

class App extends Component {
  constructor(){
    super();
    this.state = {
      routerConfig: {
        landing:{
          title: "Select Game",
          option:[
            {
              name: 'Game 1',
              component: 'LabelMe 1'
            },
            {
              name: 'Game 2',
              component: 'LabelMe 2'
            }
          ]
        }
      }
    }
  }
  render() {
    return (
      <Router>
        <div className="app-container">
          <PageHeader page="LabelMe"/>
          <div className="app-view-container">
            <Route exact path="/" component={GameContainer}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
