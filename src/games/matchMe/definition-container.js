import React, { Component } from 'react';

class MatchMe_DefinitionHolder extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
    this.renderBlanks = this.renderBlanks.bind(this);
    this.checkSolution = this.checkSolution.bind(this);
  }
  checkSolution(event){
    if(!this.props.highlight){
      return false
    }
    console.log('check')
    //Send the chosen input to the MatchMe Component
    this.props.checkAnswers(event.target.getAttribute('index'))
  }
  renderBlanks(){
    return this.props.definition.map((item,index) =>{
        if(item.index == 0){
          return(
            <input index={item.match} name="matchMeBlank" value="" readOnly className="matchMe_Input" onClick={this.checkSolution}/>
          )
        }else{
          return(
            <span> {item.word} </span>
          )
        }
    })
  }
  render(){
    let highlightSection = "highlight-container ";
    let highlightDefintion = "definition-para ";
    highlightSection += this.props.highlight ? '' : 'disp-none';
    highlightDefintion += this.props.highlight ? 'highlightInput' : '';
    return(
      <div className={highlightDefintion}>
        <div className={highlightSection}></div>
        <div>
          {this.renderBlanks()}
        </div>
      </div>
  )
  }
}

export default MatchMe_DefinitionHolder;
