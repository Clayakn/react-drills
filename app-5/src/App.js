import React, { Component } from 'react';
import './App.css';
import Image from './Image.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage="https://http.cat/425"/>
      </div>
    );
  }
}

export default App;
