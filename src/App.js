//=========================== [ROUTER 2] useNAVIGATE (TRY ONCHANGE)==================================

// import {BrowserRouter, Route, Routes} from "react-router-dom";

// import Nevigate from "./Component/Nevigate";
// import Product from "./Component/Product";
// import React from "react";

// const App=()=> {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Nevigate/>}/>
//         <Route path="/Product/:id" element={<Product/>}/>
//       </Routes>
//     </BrowserRouter>

//   )
// }
// export default App;

//=========================== [ROUTER 2] useNAVIGATE (TRY CLICK)==================================

// import './App.css'

// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Item from "./Component/Item";
// import Nevigate from "./Component/Nevigate";
// import Product from "./Component/Product";
// import React from "react";

// const App =()=> {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Nevigate/>}/>
//         <Route path="/Product" element={<Product/>}/>
//         <Route path="/Item" element={<Item/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App;

//=========================== [ROUTER 3] Sử dụng được useNavigate để truyền dữ liệu là một object qua router giữa hai component==================================

// import './App.css';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Item from './Component/Item';
// import Nevigate from './Component/Nevigate';
// import Product from './Component/Product';
// import React from "react";

// const App=()=> {
//   return (
//     <div>
//       <h1 >HIEU IS LOVER FOREVER</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Nevigate/>}/>
//           <Route path='/Product' element={<Product/>}/>
//           <Route path='/Item' element={<Item/>}/>
//         </Routes>
//       </BrowserRouter>

//     </div>

//   )
// }
// export default App;

// ============================= TAKE API FROM BINANCE BY useEFFECT =======================

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