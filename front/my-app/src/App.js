import './App.css';
import Dropdown from 'react-dropdown';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


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
    <Application>
      <Header>
        <Container>
          <Row>
            <Column>
            <Ticker>First Ticker</Ticker>
            <Dropdown options={options} onChange={(value) =>{pickFirst(value)}}/>
            </Column>
            <Column>
            <h1>{txt}</h1>
            <h1>{rateVar}</h1>
            <Button variant="primary" onClick={()=>{console.log(test(first.value,second.value))}}>Submit</Button>
            </Column>
            <Column>
            <Ticker>Second Ticker</Ticker>
            <Dropdown options={options} onChange={(value)=>{
              pickSecond(value)
            }}/>
            </Column>
          </Row>
        </Container>
      </Header>
    </Application>
  );
}

const Column = styled.div`
flex: 0 0 calc(33.33% - 10px);
margin-right: 10px;
padding: 10px;
box-sizing: border-box;
`

const Application = styled.div`
text-align: center;
`
const Header = styled.div`
background-color: #758173;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`

const Container = styled.div`
margin: 0 auto;
max-width: 1200px;
`

const Row = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between; 
`

const Ticker = styled.h1`
margin-right: 30px;
margin-left: 30px;
`

export default App;
