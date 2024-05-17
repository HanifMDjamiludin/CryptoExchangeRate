import './App.css';
import Dropdown from 'react-dropdown';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [first, pickFirst] = useState();
  const [second, pickSecond] = useState();


  const options = [
    'BTC', 'ETH', 'LTC', 'ANA'
  ];
  // const defaultOption = options[0];

  
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className='column'>
            <h1 className="ticker">First Ticker</h1>
            <Dropdown options={options} onChange={(value) =>{pickFirst(value)}}/>
            </div>
            <div className='column'>
            <button onClick={()=>{console.log(test(first.value,second.value))}}>Submit</button>
            </div>
            <div className='column'>
            <h1 className="ticker">Second Ticker</h1>
            <Dropdown options={options} onChange={(value)=>{
              pickSecond(value)
            }}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

function test(ticker1, ticker2){
  axios.get(`http://localhost:3001/${ticker1}${ticker2}`).then(response => {
    console.log(response.data[0].rate);
  })
}

export default App;
