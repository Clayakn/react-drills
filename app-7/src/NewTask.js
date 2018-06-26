import React, { Component } from 'react';

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };

    this.addTask = this.addTask.bind( this );
  }

  changeInput(val) {
    this.setState({ 
        input: val,
    });
  }

  addTask() {
    this.props.add( this.state.input );
    this.setState({ 
        input: '', 
    });
  }

  render() {
    return (
      <div>
        <input value={ this.state.input } 
              placeholder="Enter new task" 
              onChange={ (e) => this.changeInput( e.target.value ) }
        />

        <button onClick={ this.addTask }>Add</button>
      </div>
    )
  }
}

export default NewTask;