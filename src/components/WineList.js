import React, {useState, useEffect} from "react";
import OneWine from "./OneWine";


export default function WineList({wines}) {

  const [windowHigh, setWindowHigh] = useState({ display: "none" });
  const [loading, setLoading] = useState(true);
  const goUp = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
      window.onscroll = function () {
        let scroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scroll > 300) {
          setWindowHigh({ display: "unset" });
        } else {
          setWindowHigh({ display: "none" });
        }
      };
      return () => {
        setLoading(false);
      };
  
    }, [loading]);

    
  
  if(wines.length === 0){
    
    return (
      <section id="winelist">
        <img src="img/strains.jpg" alt="cepas blanco y negro"/>
       
      <p>No hay vinos que cumplan los criterios</p>
      </section>

    )
    
  } else{

    return (
      <section id="winelist">
        <img src="img/strains.jpg" alt="cepas blanco y negro"/>
       
      <ul id="winelist">
                       
        {wines.map((wine) => (
          <li key={wine.id}>
            <OneWine {...wine}/>
          </li>))
      }</ul>

        <button
          onClick={goUp}
          id="buttonUp"
          style={windowHigh}
          > <span>&#8593;</span></button>
      </section>
          
        );
  }

     
  
 
}

