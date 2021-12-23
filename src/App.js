import logo from './logo.svg';
import './App.css';
import React from 'react';

//This is the "promise-y version"
fetch('https:///api.cryptonator.com/api/ticker/btc-usd')
  .then(res => {
    console.log("RESPONSE, WAITING TO PARSE", res)
    return res.json()
  })
  .then(data => {
    console.log("DATA PARSED", data)
    console.log(data.ticker.price)
  })
  .catch(err => {
    console.log("ERROR", err)
  })

//this is the async version
// const fetchBitcoinPrice = async () => {
//   const res = await fetch('https:///api.cryptonator.com/api/ticker/btc-usd');
//   const data = await res.json()
//   console.log(data.ticker.price)
// }


function App() {
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

export default App;
