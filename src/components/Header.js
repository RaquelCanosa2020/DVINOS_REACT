import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export default function Header() {

return(
<header className="principal">
      <h1 id="title">DVINOS</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">Portada</NavLink>
          </li>
          <li>
            <NavLink to="/wines" activeClassName="active">Lista de vinos</NavLink>
          </li>
        </ul> 


      </nav>
</header>
  )
}




  



