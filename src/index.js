import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppContextProvider} from "./context/AppContext";//si no definimos AppContextProvider, importaríamos AppContext y en render se indicaría AppContext.Provider

import {CartContextProvider} from "./context/CartContext"; 

ReactDOM.render(

  <AppContextProvider>
   
      <CartContextProvider>

    <App />

    </CartContextProvider>
  
  </AppContextProvider>,
  
  document.getElementById('root')
);


