import React, { Component, Fragment } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const name = 'John Doe';

    return (
      <div className="App">
        <h1>Hello {name.toUpperCase()}</h1>
        <h2> Goodbye</h2>
      </div>
    );
  }
}

export default App;
