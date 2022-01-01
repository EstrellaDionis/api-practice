import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';



//This is the "promise-y version"
// fetch('https:///api.cryptonator.com/api/ticker/btc-usd')
//   .then(res => {
//     console.log("RESPONSE, WAITING TO PARSE", res)
//     return res.json()
//   })
//   .then(data => {
//     console.log("DATA PARSED", data)
//     console.log(data.ticker.price)
//   })
//   .catch(err => {
//     console.log("ERROR", err)
//   })

//this is the async version
// const fetchBitcoinPrice = async () => {
//   const res = await fetch('https:///api.cryptonator.com/api/ticker/btc-usd');
//   const data = await res.json()
//   console.log(data.ticker.price)
// }

//axios
// axios.get('https:///api.cryptonator.com/api/ticker/btc-usd')
//   .then(res => {
//     console.log(res.data.ticker.price)
//   })
//   .catch(err => {
//     console.log("Error!", err)
//   })

// const fetchBitcoinPrice = async () => {
//   try {
//     const res = await axios.get('https:///api.cryptonator.com/api/ticker/btc-usd')
//     console.log(res.data.ticker.price)
//   }catch(e){
//     console.log("ERROR!", e)
//   }
// }


// axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
//   .then(res => {
//     console.log(res.data.joke)
//   })
//   .catch(err => {
//     console.log("Error!", err)
//   })

// const getDadJoke = async () => {
//   const config = { headers: {Accept: 'application/json'}}
//   const res = await axios.get('https://icanhazdadjoke.com/')
//   console.log(res)
//   return res.data.joke;
// }

function App() {
  return (
    <div className="App">
      <Greet name='Braum' heroName='The Best'>This is children props</Greet>

      <Welcome name='Braum' heroName='Class Component'/>

      <Hello />

      <Message />

      <Counter />

      <FunctionClick />

      <ClassClick />
    </div>
  );
}

export default App;
