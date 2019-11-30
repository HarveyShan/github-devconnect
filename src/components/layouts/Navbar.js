import React, { Component } from 'react';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finer',
    icon: 'fab fa-github'
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i class={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
