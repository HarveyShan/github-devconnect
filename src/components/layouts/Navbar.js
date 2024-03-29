import React, { Component } from 'react';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finer',
    icon: 'fab fa-github'
  };

  //FIXME: need to fix font awesome icon
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          {this.props.icon} {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
