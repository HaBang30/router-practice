import './index.css';

import NavigatePage from './NavigatePage';
//import TheoryOfRouter from './theoryOfRouter';
//import App from './App';
//import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      {/* <TheoryOfRouter/> */}
      {/* <App /> */}
      <NavigatePage/>
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
