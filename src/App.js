import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.getData();
  }
  render() {
    const list = this.props.data.map(item => {
      return (<li key={item.id}>{item.title}</li>)
    });

    return (
      <div className="App">
        <h1 onClick={this.handleClick}>Load</h1>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default App;
