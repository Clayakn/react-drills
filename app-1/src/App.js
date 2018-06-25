import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      blankLine: "",
    }
  }
  onChangeHandle(event){
    this.setState({
      blankLine: event,
    })
  }
  render() {
    return (
      <div className="App">
        <input onChange={(event)=>this.onChangeHandle(event.target.value)}/> 
        <p> {this.state.blankLine}</p>
      </div>
    );
  }
}

export default App;
