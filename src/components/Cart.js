import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {CartContext} from "../context/CartContext";
import Cartitem from "./Cartitem";




export default function GetCart() {
  const {cart, getCart, elementsInCart, getElements, total, getTotal} = useContext(CartContext);
  const [cartSection, toogleSection] = useState("hidden");
  const [emptyCart, sayEmptyCart] = useState("hidden");
  const [fullCart, showCart] = useState("")
  const [word, changeWord] = useState("Ver")
  const [thanks, sayThanks] = useState("hidden");
  const [compras] = useState(
    JSON.parse(localStorage.getItem("dvinosPurchases")) || []
  );

  console.log(cart.length);
  
const change = () =>
  {
    if(cartSection === "hidden"){
      toogleSection(""); changeWord("Ocultar");
      
      } else{
      toogleSection("hidden"); changeWord("Ver");
    }

    if(cart.length === 0){
      sayEmptyCart(""); showCart("hidden");
    } else{
      sayEmptyCart("hidden"); showCart("");
    }
  }

const endBuy =()=>{
    let compra = {date:new Date(), elements: cart, total: total}
    compras.push(compra);
    localStorage.setItem("dvinosPurchases", JSON.stringify(compras));
    console.log(compras);
    sayThanks("cart");
    setTimeout(erase, 3000);
    
  }

const erase = ()=>{
  getCart([]);
  getElements(0);
  getTotal(0);
  toogleSection("hidden");
  changeWord("Ver");
  sayThanks("hidden");}


  return(
  
  <div className="cart">
   
    <section id="cartResume">
      <button id="seeCart" onClick={change
      }>{word} carro</button>

      <article>
        <p className="cart"><img src="img/cart.png" alt="carro"/> {elementsInCart} productos</p>
        <Link to="/user"><p className="cart"><img src="img/bags.png" alt="bags"/>Tus compras</p></Link>
      </article>
      
    </section>
    
    
    <section className={cartSection}>

      <p className={emptyCart}>No hay compras en tu carro</p>

      <article className={fullCart}>

      <Cartitem cart = {cart} total={total}/>
       
       <button className="cartButton" onClick={erase}>Limpiar carrito</button>
 
       <button className="cartButton" id="buy" onClick={endBuy}>Realizar compra</button>
 
       <p id="thanks" className={thanks}>¡Gracias por tu compra! </p>

      </article>
      
      
    </section>
    
  </div> 
     );
    
  
}
