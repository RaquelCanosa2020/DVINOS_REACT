import React, {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";



export default function GetCart() {
  const {cart, getCart, elementsInCart, getElements, total, getTotal} = useContext(CartContext);
  const [cartSection, toogleSection] = useState("hidden");
  const [word, changeWord] = useState("Ver")
  const [thanks, sayThanks] = useState("hidden");
  
  console.log(cart);
  console.log(elementsInCart);
  
/*const change = () =>{
  toogleSection("") !== toogleSection("hidden");
  cartSection === "" ? changeWord("Ocultar") : changeWord("Ver")

}*/
   

  return(
  
    <>
   
   <section id="cartResume">
   <button onClick={()=>
    toogleSection("")
    }>{word} carro</button>
   <p className="cart"><img src="img/carro.png" alt="carro"/> {elementsInCart} productos</p>
    
 
   </section>
    
    
    <section className={cartSection}>

   <ul id="item">

    {cart.map((el, index) => {
            return (
              <li className="cartItem" key={index}>
                <p>Producto: {el.id}. <strong>{el.name}</strong> </p>
                <p>Cantidad: <strong>{el.added}</strong> ud.</p>
                <p>Precio unidad: <strong>{el.price}</strong> €</p>
              </li>)
            
            })}
    
    
          </ul>
    
    
          <p className="cart">Compra total: <strong>{total} €</strong> </p>
    
    
    <button className="cartButton" onClick={()=>{
    getCart([]);
    getElements(0);
    getTotal(0);
    toogleSection("hidden")}}>Limpiar carrito</button>

    <button className="cartButton" onClick={()=>sayThanks("cart")}>Realizar compra</button>
    <p className={thanks}>¡Gracias por tu compra! </p>
    </section>
    
          </> 
     );
    
  
}
