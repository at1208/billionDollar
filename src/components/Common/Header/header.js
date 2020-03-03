import React, { Component } from 'react';
import './header.css';
import Drawer from '../Drawer/drawer'

class Header extends Component {
  render(){
    return <div className='header'>
          <div className='row'>
            <Drawer />
            <div className='title'>{this.props.title}</div>
          </div>


           </div>
  }
}

export default Header;
