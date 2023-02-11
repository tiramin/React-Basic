import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1><a href="/">React</a></h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">css</a></li>
        <li><a href="/read/3">js</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <article>
        <h2>welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;
