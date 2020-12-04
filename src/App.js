import React, {useContext} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import {AppContext} from "./context/AppContext"; 
//import wines from "./Api.js";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import WineList from "./components/WineList";
import OneWine from "./components/OneWine";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import {AppError, AppWaiting} from "./components/AppStatus";



function App() {
const{filtered} = useContext(AppContext);
  

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
          <Filter/>

          <WineList wines={filtered}/> 
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
