import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super(); 
    this.state={
      movies: ['Avengers: Infinity Wars','Avatar','Toy Story'],
      userInput: '',
    }
  }
  changeUserInput(val){
    this.setState({
      userInput: val,
    })
  }

  render() {
    let moviesToDisplay = this.state.movies.filter((e,i) => {
      return e.includes(this.state.userInput);
    }).map((e,i)=>{
      return (
        <h3 key={i}>{e}</h3>
      )
      })
    return (
      <div className="App">
        <input onChange={(event)=>this.changeUserInput(event.target.value)}></input>
        {moviesToDisplay}
      </div>
    );
  }
}

export default App;
