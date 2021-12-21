import { useState, useEffect } from "react";
import Plot from 'react-plotly.js';



export default function Stock({symbol}){
const [data, setData] = useState("");
  //const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY="API_KEY"
  const chartX=[]
  const chartY=[]

  console.log(symbol)

  useEffect(() => {
    setLoading(true);
    try{
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then(setData)
    setLoading(false); 
    }
    catch(e){
        console.log(e)
    }   
  }, [symbol]);

  
  for(var key in data["Time Series (Daily)"]){
    chartX.push(key)
    chartY.push(data["Time Series (Daily)"][key]["1. open"])

  }
  
  
  const changePercent=(chartY[0]-chartY[1])/chartY[0]*100
  const profit=chartY[0]>chartY[1]
  console.log(profit) 

  if(loading) return (<><h2>Data is loading.....</h2></>)
  if(data["Error Message"]){
   
    return(
      <div className="alert alert-danger">
      <strong>Error!</strong> Data is not available
    </div>)
  }
 

  else{

    return(
        <>
          <div className="container mt-4">
            
            {profit?
                  <p className="text-center mt-2">⬆️{changePercent.toFixed(2)}%</p>:
                  <p className="text-center mt-2">⬇️{changePercent.toFixed(2)}%</p>
                  } 
            
            <p class="text-center">The current tradable stock price is ${parseFloat(chartY[0]).toFixed(2)}</p>
          </div>
        
          
            <Plot
              data={[
              {
                x: chartX,
                y: chartY,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'blue'},
              }
            ]}
            layout={ { title: `${symbol} chart`} }
            useResizeHandler={true}
            style={{width: "100%", height: "100%"}}
        />
          
       
        </>
        );
    }


}