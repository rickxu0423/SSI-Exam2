import React from 'react';
import logo from '../assets/images/logo.svg';
import './index.css';

function ReactContainer() {

  //react-1
  fetch('https://www.mocky.io/v2/5e35fc392f0000612179350b')
  .then(function(res) {
    return res.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  })
  .catch(function() {
    console.log("no data")
  });

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
      </header>
    </div>
  );
}                               

export default ReactContainer;