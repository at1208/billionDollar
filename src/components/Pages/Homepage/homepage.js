import React, { Component } from 'react';
import AppBar from '../../Common/AppBar/appbar';
import './homepage.css';

class HomePage extends Component {


  render(){
    const Startup = () => {
      const startupList = ['Kalakicar', 'MyTutor', 'Canteen', 'NearAuto']
      const list = startupList.map( item => {
      return <div className='text-center row col justify-content-center'>
               <div className='startup-name shadow col-md-4 '>
                {item}
               </div>
             </div>
      })
      return list;
    }


    return <div>
          <AppBar />
            <div className='startup-list-container'>
             {Startup()}
            </div>
          </div>
  }
}
export default HomePage;
