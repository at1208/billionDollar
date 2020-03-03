import React, { Component } from 'react';
import AppBar from '../../Container/AppBar/appbar';
import { Link } from 'react-router-dom';
import './homepage.css';

class HomePage extends Component {


  render(){
    const Startup = () => {
      const startupList = ['Kalakicar', 'MyTutor', 'Canteen', 'NearAuto']
      const list = startupList.map( item => {
      return <div className='text-center row col justify-content-center'>
             <Link to={`dashboard/${item}`}>
               <div className='startup-name col-md-4'>
                {item}
               </div>
             </Link>
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
