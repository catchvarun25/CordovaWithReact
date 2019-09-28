import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openCameraHandler = () => {
    console.log("Opening Camera...");
    alert("Opening Camera...")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <button variant="outline-primary" onClick={openCameraHandler}> Open Camera</button>
        </p>
      </header>
    </div>
  );
}

export default App;
