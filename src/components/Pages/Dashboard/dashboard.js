import React, { Component } from 'react';
import Header from '../../Common/Header/header';
import './dashboard.css';

class Dashboard extends Component {
  render(){
    console.log(this.props.match.params)
    return <div>
          <Header title={this.props.match.params.startup}/>
           </div>
  }
}

export default Dashboard;
