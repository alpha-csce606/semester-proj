import React,{ Component } from 'react';
import { Link } from "react-router-dom";

import PrimaryButton from './common/button';

class ChooseGame extends Component{
  constructor(props){
    super(props);
    this.state={
      games:[{
        message: "LabelMe",
        link: "/game/labelMe"
      },{
        message: "MatchMe",
        link: "/game/matchMe"
      }]
    }
  }
  render(){
    const button = this.state.games.map((item,index) => <PrimaryButton id={index} message={item.message} link={item.link}/>)
    return(
    <div className="fullpage-button-ctr">
      {button}
    </div>
  )
  }
}

export default ChooseGame;

/*
<Link to="/game/labelMe">LabelMe</Link>
<Link to="/game/matchMe">MatchMe</Link>
*/
