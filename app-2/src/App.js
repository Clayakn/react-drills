import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      listOfCharacters: [
        "Iron Man", 
        "Batman", 
        "Mega Man"
      ]
    } 
  }
  render() {
    let charactersToDisplay = this.state.listOfCharacters.map((e,i)=>{
    return (
      <h3 key={i}>{e}</h3>
    )
    })
    return (
      <div className="App">
        {charactersToDisplay}
      </div>
    );
  }
}

export default App;
