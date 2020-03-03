import React, { Component } from 'react';
import { Input, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './login.css';




class Login extends Component{
    state = {
      username: '',
      password: ''
    }
    onUsernameChange = (e) => {
      this.setState({ username: e.target.value })
    }

    onPasswordChange = (e) => {
      this.setState({ password: e.target.value })
    }
  render(){
    console.log(this.state.username)
    console.log(this.state.password)
    return <div className='login-outer-container row justify-content-center'>
            <div className='login-container shadow col-sm-4'>
                <div className='text-center login-title'>
                  <h1>Billion$</h1>
                </div>
                <div className='text-center input-container'>
                      <TextField
                      label="Username"
                      variant="outlined"
                      color="primary"
                      margin='dense'
                      onChange={this.onUsernameChange}
                      value={this.state.username}
                      />

                        <br />

                      <TextField
                      label="Password"
                      variant="outlined"
                      color="primary"
                      margin='dense'
                      onChange={this.onPasswordChange}
                      value={this.state.password}
                      />

                        <br />
                     <Link to='/home'>
                     <Button variant="contained" color="primary" className='submit-button'>
                      LOGIN
                     </Button>
                     </Link>
                </div>
            </div>
          </div>
  }
}

export default Login;
