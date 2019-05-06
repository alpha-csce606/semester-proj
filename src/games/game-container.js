import React,{ Component } from 'react';
import Game_LabelMe from './game-labelme';

class GameContainer extends Component{
  constructor(props){
      super(props);
      this.state = {
        data : undefined
      }
      this.childKey = 0;
      this.changeQuestion = this.changeQuestion.bind(this);
  }
  componentDidMount(){
    let randomIndex;
    console.log(this.props)
    let url = 'http://localhost:3000/data/LabelMe/'+this.props.level+'.json';
    console.log(url)
    fetch(url,{headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
       })
     })
      .then(res => res.json())
      .then((res) => {
        console.log(this.state,res);

        randomIndex = Math.floor(Math.random() * res.length);
        this.setState({
          data: res[randomIndex],
          questionBank: res
        })
      });
  }
  changeQuestion(){
    let randomIndex = Math.floor(Math.random() * this.state.questionBank.length);
    this.setState({
      data: null
    })
    this.setState({
      data: this.state.questionBank[randomIndex]
    })
  }
  render(){
    if(this.state.data == undefined){
      return null;
    }
    ++this.childKey;
    return(
      <Game_LabelMe key={this.childKey} solution={this.state.data.solution} nextQuestion={this.changeQuestion} imageSrc={this.state.data.imageSrc}/>
    )
  }
}

export default GameContainer;
