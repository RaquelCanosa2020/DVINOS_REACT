import React from "react";
import OneWine from "./OneWine";


export default function WineList({wines}) {
  console.log(wines);
  if(wines.length === 0){
    
    return (
      <section id="winelist">
        <img src="img/cepas.jpg" alt="cepas blanco y negro"/>
       
      <p>No hay vinos que cumplan los criterios</p>
      </section>

    )
    
  } else{

    return (
      <section id="winelist">
        <img src="img/cepas.jpg" alt="cepas blanco y negro"/>
       
      <ul id="winelist">
                       
        {wines.map((wine) => (
          <li key={wine.id}>
            <OneWine {...wine}/>
          </li>))
      }</ul>
      </section>
          
        );
  }

     
  
 
}

