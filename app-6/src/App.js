import React, { Component } from 'react';
import './App.css';
import ToDo from './Todo';

class App extends Component {
  constructor(){
    super();
    this.state={
      toDoList: ['wash dishes','vacuum floor'],
      input: '',
    }
    this.addTask = this.addTask.bind(this)
  }
  changeInput(val){
    this.setState({
      input: val,
    })
  }
  addTask() {
    this.setState({ 
      toDoList: [...this.state.toDoList, this.state.input], 
      input: '', 
    });
  }

  render() {
    let displayToDoList = this.state.toDoList.map((e,i) =>{
      return (
        <ToDo key={i} item={e}/>
        )
      })
    return (
      <div className="App">
          <h2>My to-do list:</h2>
          <input 
            value={this.state.input}
            placeholder="Enter new task" 
            onChange={(e)=>this.changeInput(e.target.value)}>
          </input>
          <button onClick={this.addTask}>Add</button>
          {displayToDoList}
      </div>
    );
  }
}

export default App;
