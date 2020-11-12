import React, {useState, useContext} from "react";
import { CartContext } from "../context/CartContext";
//import Vino1 from "../img/Vino1.jpg";
//import {useParams} from 'react-router-dom';


export default function OneWine({
  id,
  name,
  country,
  image,
  price,
  quantity
}) {
    //const params = useParams(); // es un objeto con el parámetro id:"2", si desestructuramos, ya tenemos el id.
    //const {id} = useParams();
    //console.log(params);

    /***Para recoger parámetros en rutas, podemos usar URLSearchParams(no es react, es JS navegador), le pasamos además .../?fecha=10-10-2020
     * const params = new URLSearchParams(window.location.search);
     * console.log(params.get("fecha"));
     * 
     */
    

    
  const [currentQuantity, setQuantity] = useState(quantity);
  const {cart, getCart, elementsInCart, getElements, total, getTotal} = useContext(CartContext);
  

 
  
  
  return (
    <section id="oneproduct">
      <h1>{id}. {name}</h1>
      <p>País: {country}</p>  
      <img src = {`img/${image}`}/>
      <p>Precio: {price} euros</p>  
      <p>Stock: {currentQuantity}</p> 

      <button onClick = {(element)=>{
                
        if (currentQuantity > 0){

          
          let finded = cart.findIndex((el) => el.id === id);
         
          if(finded !== -1){
            cart[finded].added +=1;
            

          }else{
            element = {id:id, name:name, added:1,price:price};
          cart.push(element);}

          getCart(cart);
          getElements(elementsInCart+1);
          setQuantity(currentQuantity-1);
          getTotal(cart.reduce ((acc, el) => acc + (el.added*el.price),0))
         
          
        }
        else{setQuantity(0)}}}>Comprar</button>      
    </section>
   
  );
  
}
