import React,{ Component } from 'react';

class BlankComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: '',
      wrongValue: '',
      status: undefined //This value is used to identify if a right letter was entered
    }
    this.handleChange = this.handleChange.bind(this);
    this.highlightWrongElement = this.highlightWrongElement.bind(this);
  }
  componentDidMount(){
    if(this.props.isRevealed == true){
      this.setState({
        status: true,
        value: this.props.letter
      })
    }
  }
  handleChange(event){
    const val = this.props.letter.toLowerCase()
    if(event.target.value.toLowerCase() == val){
      this.setState({
        value: event.target.value,
        status: true
      })
      this.props.updateParent();
    }else{
      this.setState({
        value: '',
        status: false
      })
      this.highlightWrongElement(event.target.value);
    }
  }
  highlightWrongElement(wrongVal){
    var that = this;
    this.setState({
      wrongValue: wrongVal
    });

    setTimeout(function(){
      that.setState({
        wrongValue: ''
      })
    },1500)
  }
  renderWrongInput(){
    if(this.state.wrongValue != ''){
      return(
        <span className="wrong-indicator animate-flicker">{this.state.wrongValue}</span>
      )
    }
  }
  render(){
    let inputClasses = "game-blankinput ";
    inputClasses += (this.state.status == true) ? 'disabled' : '';

    return(
      <div className="game-blanks">
        <input className={inputClasses} value={this.state.value} letterindex={this.props.letterIndex} disabled={this.state.status} onChange={this.handleChange}/>
        {this.renderWrongInput()}
      </div>
    )
  }
}

export default BlankComponent;
