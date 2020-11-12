import React, {useContext} from "react";
import OneWine from "./OneWine";




export default function WineList({wines}) {
  
  
  return (
<section id="winelist">
<ul id="winelist">
                 
  {wines.map((wine) => (
    <li key={wine.id}>
      <OneWine {...wine}/>
    </li>))
}</ul>
</section>
   
      
    
  );
}

