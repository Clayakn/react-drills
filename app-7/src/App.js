import React, { Component } from 'react';
import './App.css';
import List from './List'; 
import NewTask from './NewTask'


class App extends Component {
  constructor(){
    super();
    this.state={
      toDoList: ['wash dishes','vacuum floor'],
    }
    this.addTask = this.addTask.bind(this)
  }
  addTask(task) {
    this.setState({ 
      toDoList: [...this.state.toDoList, task], 
    });
  }

  render() {
    return (
      <div className="App">
          <h2>My to-do list:</h2>
          <NewTask add={this.addTask}/> 
          <List item={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;
