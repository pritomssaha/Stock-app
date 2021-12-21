import React,{useState, useEffect} from "react"

export default function StocKOverview({symbol}){
    const [data, setData] =useState("")
    const [loading, setLoading] = useState(false);
    const API_KEY="API_KEY"


    useEffect(() =>{        
        setLoading(true); 
        try{
            fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`)
              .then((res) => res.json())
              .then(setData)
            setLoading(false); 
            }
            catch(e){
                console.log(e)
            }      
        setLoading(false)       
    },[symbol])

    console.log(data)

    if(loading){
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
    
    else{
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <table className="table table-striped">
                        
                            <tbody>

                                <tr>								
                                    <td>Symbol</td>
                                    <td>{data["Symbol"]}</td>								
                                </tr>

                                <tr>								
                                    <td>Name</td>
                                    <td>{data["Name"]}</td>								
                                </tr>

                                <tr>								
                                    <td>Sector</td>
                                    <td>{data["Sector"]}</td>								
                                </tr>

                                <tr>
                                    <td>Industry</td>
                                    <td>{data["Industry"]}</td>
                                </tr>

                                <tr>								
                                    <td>Address</td>
                                    <td>{data["Address"]}</td>								
                                </tr>
                                
                                <tr>								
                                    <td>Beta</td>
                                    <td>{data["Beta"]}</td>								
                                </tr>
    
                              
    
                                <tr>								
                                    <td>BookValue</td>
                                    <td>{data["BookValue"]}</td>								
                                </tr>
    
                                <tr>								
                                    <td>CIK</td>
                                    <td>{data["CIK"]}</td>								
                                </tr>
    
                                <tr>								
                                    <td>DilutedEPSTTM</td>
                                    <td>{data["DilutedEPSTTM"]}</td>								
                                </tr>
    
                                <tr>								
                                    <td>EPS</td>
                                    <td>{data["EPS"]}</td>								
                                </tr>
    
                                <tr>								
                                    <td>EBITDA</td>
                                    <td>{data["EBITDA"]}</td>								
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6 mt-5">
                        <table className="table table-striped">						
                            <tbody>
                                <tr>								
                                    <td>FiscalYearEnd</td>
                                    <td>{data["FiscalYearEnd"]}</td>								
                                </tr>
    
                                <tr>								
                                    <td>ForwardPE</td>
                                    <td>{data["ForwardPE"]}</td>								
                                </tr>
    
                                <tr>								
                                    <td>PriceToBookRatio</td>
                                    <td>{data["PriceToBookRatio"]}</td>								
                                </tr>
    
                                <tr>								
                                    <td>PriceToSalesRatioTTM</td>
                                    <td>{data["PriceToSalesRatioTTM"]}</td>								
                                </tr>
    
                                <tr>								
                                    <td>PEGRatio</td>
                                    <td>{data["PEGRatio"]}</td>								
                                </tr>
    
                                <tr>								
                                    <td>RevenueTTM</td>
                                    <td>{data["RevenueTTM"]}</td>								
                                </tr>
    
                                <tr>								
                                    <td>ProfitMargin</td>
                                    <td>{data["ProfitMargin"]}</td>								
                                </tr>  
                          </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
    
    
    
        );

    }
    
    

    
    
}