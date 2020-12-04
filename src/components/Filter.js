import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";

export default function Filter() {
const{filter, handleFilterChange} = useContext(AppContext);

    return (
        <div className="filter">
        <fieldset>
        <label htmlFor="filter">Filtro</label>
        <input
          type="search"
          id="filter"
          onChange={handleFilterChange}
          value={filter}
         
        />
      </fieldset>

        </div>
    )
}
