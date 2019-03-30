import React,{ Component } from 'react';
import image from './../assets/mitochondria.jpg';

import './game.css';
import GameBlanksHolder from './game-blanks';

class Game_LabelMe extends Component{
  constructor(props){
    super(props);
    this.state = {
      solution:{
        words: []
      }
    }
  }

  componentDidMount(){
      this.setState({
        solution:{
          words: this.props.solution.split(' ')
        }
      });
      console.log(this.state,this.props.solution)
  }

  render(){
    return(
      <div className="row game-detail-container">
        <div className="game-image-container">
          <img src={image}/>
        </div>

        <div className="game-blanks-container">
          <ul className="game-blanks-holder row">
            <GameBlanksHolder words={this.props.solution.split('')}/>
          </ul>
        </div>
      </div>
    )
  }
}

export default Game_LabelMe;


/*
<div className="game-detail-desc-ctr">

</div>
*/
