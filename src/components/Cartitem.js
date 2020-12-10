import React from 'react'

export default function Cartitem({cart, total}) {
    return (
        <div>
           <ul id="item">

            {cart.map((el, index) => {
      return (
        <li className="cartItem" key={index}>
          <p>Producto: {el.id}. <strong>{el.name}</strong> </p>
          <p>Precio/ud: <strong>{el.price}</strong> €</p>
          <p>Cantidad: <strong>{el.added}</strong> ud.</p>
        </li>)
      })}
        </ul>
 
        <p className="cart">Compra total: <strong>{total} €</strong> </p> 
        </div>
    )
}
