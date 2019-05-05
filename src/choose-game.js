import React,{ Component } from 'react';
import { Link } from "react-router-dom";
import ChooseLevel from './common/choose-level';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PrimaryButton from './common/button';

class ChooseGame extends Component{
  constructor(props){
    super(props);
    this.state={
      games:[{
        message: "LabelMe",
        link: "/game/labelMe",
        //levels: [1,2,3,4]
        levels: ['Easy','Medium','Hard']
      },{
        message: "MatchMe",
        link: "/game/matchMe",
        // levels: [1,2,3]
        levels: ['Easy','Medium','Hard']
      }],
      gameSelected: 0,
      chooseLevelDialog: false
    };
    this.renderLevels = this.renderLevels.bind(this);
  }

  selectGame = (GameId) => {
    console.log(GameId)
    this.setState({
      gameSelected: GameId,
      chooseLevelDialog: true
    })
  }

  renderLevels(){
    const link = this.state.games[this.state.gameSelected].link;
    return(
      this.state.games[this.state.gameSelected].levels.map((item,index) =>
        <li>
          <Link to={link + '/' + item} index={index}>
            {item}
          </Link>
        </li>
      )
    )
  }

  render(){
    const button = this.state.games.map((item,index) => <PrimaryButton chooseGame={this.selectGame} id={index} message={item.message} link={item.link} levels={item.levels}/>)

    return(
      <React.Fragment>
        <ChooseLevel showLevels={this.state.chooseLevelDialog}>
          <h1 className="choose-level-heading">Pick Level</h1>
          <ul className="chooselevel-container">
          {
            this.renderLevels()

          }
          </ul>
        </ChooseLevel>
        <ReactCSSTransitionGroup
            transitionName="fadeIn"
            transitionEnterTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={0}>
            <div className="fullpage-button-ctr">
              {button}
            </div>
        </ReactCSSTransitionGroup>
      </React.Fragment>
  )
  }
}

export default ChooseGame;

/*
<Link to="/game/labelMe">LabelMe</Link>
<Link to="/game/matchMe">MatchMe</Link>
*/
