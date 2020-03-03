import React, { Component } from 'react';
import './menuitem.css';
import Header from '../../Common/Header/header';

class MenuItem extends Component {
  render(){

    return <div>
             <Header title={this.props.match.params.startup}/>
               <div className='subheading text-center'>
               {this.props.match.params.menuitem}
               </div>
           </div>
  }
}

export default MenuItem;
