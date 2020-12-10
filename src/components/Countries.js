import React from 'react'


export default function Countries({countries, countrySelected, handleCountry}) {
    console.log(countrySelected)
    return (
        <select name={countrySelected} id={countrySelected}
        onChange={handleCountry}>
            <option value="cualquiera">Cualquiera</option>
            {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>))}
        </select>
    )
}
