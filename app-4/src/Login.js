import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super(); 
        this.state ={
           username: '', 
           password: '', 
        }
    }
    onChangeUsername(val){
        this.setState({
            username: val,
        })
    }
    onChangePassword(val){
        this.setState({
            password: val,
        })
    }
    loginAlert(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    render() {
        return (
        <div>
         <input placeholder="username" onChange={e=>this.onChangeUsername(e.target.value)}></input> 
         <input placeholder="password" onChange={e=>this.onChangePassword(e.target.value)}></input> 
         <button onClick={()=>this.loginAlert()}> Login</button>
        </div>
      );
    }
  }
  
  export default Login;