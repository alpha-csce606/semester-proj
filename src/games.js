import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Games extends Component{
  constructor(props){
    super(props);
  }
  activateGame1(){
    ReactDOM.render(<App />, document.getElementById('root'));
  }
  render(){
    return(
      <React.Fragment>
        <button onClick={this.activateGame1}>
              Game 1 - Guess the object
        </button>
        
      </React.Fragment>
    )
  }
}

export default Games;