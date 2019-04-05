import React,{ Component } from 'react';
import Game_LabelMe from './game-labelme';

class GameContainer extends Component{
  constructor(props){
      super(props);
      this.state = {
        data : undefined
      }
  }
  componentDidMount(){
    let randomIndex;
    fetch('http://localhost:3000/data/data_labelMe.json')
      .then(res => res.json())
      .then((res) => {
        console.log(this.state,res);
        randomIndex = Math.floor(Math.random() * res.length);
        this.setState({
          data: res[randomIndex]
        })
      });
  }
  render(){
    if(this.state.data == undefined){
      return null;
    }
    return(
      <Game_LabelMe solution={this.state.data.solution} imageSrc={this.state.data.imageSrc} level="3"/>
    )
  }
}

export default GameContainer;
