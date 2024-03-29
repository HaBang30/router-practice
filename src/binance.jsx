import './App.css';

import React, {useEffect, useState} from "react";

import axios from 'axios';

function App (){
  const [binance, setBinance] = useState([])
  useEffect(()=> {
    const fetchData= async()=> {
      try{
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price')
        setBinance(response.data)
        console.log(response.data)
      }catch(error){
        console.log('Error fetching Data from Binance API: ', error)
      }
    }
    fetchData();
  },[])
  return (
    <div className='container'>
      <ul>
        {binance.map((data, index) => (
          <li key={index}>{data.symbol}:{data.price}</li>
        
        ))}
      </ul>

    </div>



  )
}
export default App;