import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';


import wines from "./Api.js";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Cart from "./components/Cart";
import WineList from "./components/WineList";
import OneWine from "./components/OneWine";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import {AppError, AppWaiting} from "./components/AppStatus";



function App() {

  

  return (
    
      <BrowserRouter>

    <AppError/>
    <AppWaiting/>

      <Header/>

      <main>

        <Switch>

          <Route exact path="/">
          <Cover/>
          </Route>

          <Route exact path="/wines">
          <Cart/>
          <WineList wines={wines}/> 
          </Route>

          <Route exact path="/wines/:id">
          <OneWine/> 
          </Route>

          <Route path="*">
          <NotFound/> 
          </Route>

        </Switch>

      </main>
      <Footer/>
      </BrowserRouter>
            
        
    
  );
}

export default App;
