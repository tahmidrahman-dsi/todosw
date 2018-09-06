import React, { Component } from 'react';
import TodoList from './components/todo-list';
import './App.css';
import TodoInput from './components/input-todo';

class App extends Component {
  state = {
    submitted: false,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is a simple to do app</h1>
        </header>
        <TodoInput onSuccessfulSubmission = { () => this.setState({ submitted: true })} />
        <TodoList submitted = {this.state.submitted} listReloaded = {() => this.setState({submitted: false})}/>
      </div>
    );
  }
}

export default App;
