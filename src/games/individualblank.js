import React,{ Component } from 'react';

class BlankComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      letter: this.props.letter.toLowerCase(),
      value: '',
      status: false //This value is used to identify if a right letter was entered
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const val = this.state.letter
    if(event.target.value == val){
      this.setState({value: event.target.value})
    }else{
      this.setState({value: ''})
    }
  }
  render(){
    return(
      <div className="game-blanks">
        <input className="game-blankinput" value={this.state.value} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default BlankComponent;
