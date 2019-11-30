import React, { Component, Fragment } from 'react';
import Navbar from './components/layouts/Navbar';
import UserItems from './components/users/UserItems';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar icon='fab fa-github' />
        <UserItems />
      </div>
    );
  }
}

export default App;
