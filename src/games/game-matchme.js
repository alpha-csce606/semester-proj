import React, { Component } from 'react';
import MatchMe_DefinitionHolder from './matchMe/definition-container';
import MatchMe_Options from './matchMe/options-holder';

class Game_MatchMe extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: undefined,
      activeSelection: undefined,
      highlight: false
    }
    this.lockSelection = this.lockSelection.bind(this);
    this.checkSolution = this.checkSolution.bind(this);
  }
  componentDidMount(){
    let randomIndex;
    fetch('http://localhost:3000/data/data_matchMe.json')
      .then(res => res.json())
      .then((res) => {
        randomIndex = Math.floor(Math.random() * res.length);
        let blankCount = 0;
        let words = res[randomIndex].definition.split(' ');
        let blanks = res[randomIndex].blanks;
        let options = res[randomIndex].options;
        let wordsHash = words.map((item,index) => {
          let checkItem = item.toLowerCase();

          if(blanks.indexOf(checkItem.replace(/[^a-zA-Z ]/g, "")) != -1){
            return {
              word: item,
              index: 0,
              match: blankCount++
            }
          }else{
            return {
              word: item,
              index: index
            }
          }
        });

        let solutionMap = wordsHash.filter((item) => {
          return item.match != undefined
        });

        this.setState({
          data: wordsHash,
          solution: solutionMap,
          options: options
        })
      });
  }
  lockSelection(activeIndex){
    this.setState({
      activeSelection: this.state.options[activeIndex],
      highlight: true
    })
  }
  checkSolution(index){
    console.log(this.state.activeSelection)
    console.log(this.state.solution[index])
    if(this.state.solution[index].word.toLowerCase() == this.state.activeSelection.toLowerCase()){
      alert('Right Answer')
    }else{
      alert('Wrong Answer')
    }
  }
  render(){
    if (this.state.data != undefined){
      return(
        <div className="definition-holder">
          <MatchMe_DefinitionHolder checkAnswers={this.checkSolution} definition={this.state.data} highlight={this.state.highlight} blanks={this.state.blanks}/>
          <MatchMe_Options options={this.state.options} blanks={this.state.blanks} lockSelection={this.lockSelection}/>
        </div>
      )
    }
    else{
      return <div></div>
    }
  }
}

export default Game_MatchMe;
