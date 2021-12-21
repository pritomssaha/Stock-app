
import './App.css';
import { useState } from 'react';
import StockChart from './StockChart';
import StocKOverview from './StocKOverview'

function App() {
  const [query, setQuery]=useState("");
  const [symbol, setSymbol]=useState("")

  const handle=(e)=>{
    e.preventDefault();
    console.log(query.toString())
    setSymbol(query)
   
  }

  return (
    <div className="container">
      <div className="jumbotron bg-primary mt-4 p-5 text-white rounded">
        <h1>Stock information</h1>
        <p>Get latest share price, chart and information about the company</p>
        <input type="text" onChange={(e)=>setQuery(e.target.value)}/>
        <button onClick={handle}>Search</button>
     <br />
    </div>

    { symbol.length>0 &&
      <StockChart symbol={symbol}/>
    }     

    { symbol.length>0 &&
      <StocKOverview symbol={symbol}/>
    }

     

    </div>
  );
}

export default App;
