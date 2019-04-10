
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Games from './games';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './menu.css';

///////////////////
// App           //
///////////////////
class Menu extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     routerConfig: {

  //     }
  //   }
  // } 
  render() {
    return (
      <MenuContainer/>
    )
  }
}

class MenuContainer extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      activeItem: '',
      activeItemPosition: 0,
      activeItemColor: '',
      menuItems: [
        { text: 'Play' },
        { text: 'Scores' },
        { text: 'Settings' },
        { text: 'Help' },
      ],
    }
    
    this.selectOption = this.selectOption .bind(this)
  }
  startGame(){
    ReactDOM.render(<Games />, document.getElementById('root'))
  }
  selectOption(activeItem) {
    return e => {
      e.preventDefault()
      this.startGame();
      this.setState({
        activeItem,
        activeItemPosition: document.getElementById(activeItem).offsetTop,
        activeItemColor: window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'),
        widthMenu : '115%'
      })
    }
  }
  
  render() {
    const menuItems = this.state.menuItems.map(item => <MenuItem item={ item } handleClick={ this.selectOption }/>)
    return (
      <div className='menu-container'>
        <span className='menu-item--active' style={{ top: this.state.activeItemPosition, backgroundColor: this.state.activeItemColor, width:this.state.widthMenu}}/>
        { menuItems }
      </div>
    )
  }
}

///////////////////
// MenuItem      //
///////////////////
function MenuItem(props) {
  return (
    <div 
      className='menu-item'
      id={ props.item.text }
      onClick={ props.handleClick(props.item.text) }
    >
      { props.item.text.toUpperCase() }
    </div>
  )
}

export default Menu;