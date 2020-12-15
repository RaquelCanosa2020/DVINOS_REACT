import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export default function Header() {

  const [classMenu, setClass] = useState("");
  const [content, setContent] = useState("boton_menu.png");

  const changeMenu = () =>{
    if(classMenu === ""){
      setClass("visibleMenu");
      setContent("cerrar.png");
    } else {
      setClass("");
      setContent("boton_menu.png")
    }
  }
 
return(
<header className="principal">
      <h1 id="title">DVINOS</h1>
      <nav>
        <button className="menuButton" onClick={changeMenu}><img id="menu" src={`img/${content}`} alt="menu"/></button>
        <ul className={classMenu}>
          <li>
            <NavLink exact to="/" activeClassName="active">Portada</NavLink>
          </li>
          <li>
            <NavLink to="/wines" activeClassName="active">Lista de vinos</NavLink>
          </li>
          <li>
            <NavLink to="/user" activeClassName="active">Tu cuenta</NavLink>
          </li>
                   
        </ul> 
        

      </nav>
</header>
  )
}




  



