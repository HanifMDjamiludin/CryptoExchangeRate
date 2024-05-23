import './App.css';
import Dropdown from 'react-dropdown';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [first, pickFirst] = useState();
  const [second, pickSecond] = useState();
  const [rateVar, setRate] = useState();
  const [txt, setText] = useState();


  const options = [
    'BTC', 'ETH', 'SOL' ,'LTC'
  ];
  // const defaultOption = options[0];

  function test(ticker1, ticker2){
    try {
      if(ticker1 == ticker2){
        console.log()
      }else{
        axios.get(`http://localhost:3001/${ticker1}${ticker2}`).then(response => {
        setText("Exchange Rate: ");
        setRate(response.data[0].rate);
      }) 
      }
    } catch (error) {
      setRate("Same ticker, conversion rate is 1")
      
    }
  }
  
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
            <h1>{txt}</h1>
            <h1>{rateVar}</h1>
            <Button variant="primary" onClick={()=>{console.log(test(first.value,second.value))}}>Submit</Button>
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

export default App;
