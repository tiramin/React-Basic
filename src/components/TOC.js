import React, { Component } from 'react';

class TOC extends Component {
  render() {
    return (
      <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
      </nav>
    );
  }
}

export default TOC;