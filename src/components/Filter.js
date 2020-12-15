import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";
import Countries from "./Countries";
import {countries} from "../Api.js";

export default function Filter() {
 
const{filter, handleFilterChange} = useContext(AppContext);
const{priceSelected, handlePrice} = useContext(AppContext);
const{countrySelected, handleCountry} = useContext(AppContext);

    return (
        <div className="filter">
        <fieldset>
        <label htmlFor="filter">Buscar vino</label>
        <input
          type="search"
          id="filter"
          onChange={handleFilterChange}
          value={filter}
         
        />
      </fieldset>

      <fieldset>
        <label htmlFor="countryFilter">Buscar país</label>
        <Countries countries = {countries}
        countrySelected={countrySelected}
        handleCountry = {handleCountry}/>
         </fieldset>
      

      <fieldset>
    <label htmlFor="priceFilter">Precio hasta: {priceSelected} €</label>
        <input
          type="range"
          id="priceFilter"
          min="5"
          max="25"
          step="5"
          onChange={handlePrice}
          value={priceSelected}
                 
        />
      </fieldset>

        </div>
    )
}
