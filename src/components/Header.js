import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export default function Header() {

  const [classMenu, setClass] = useState("");
  const [content, setContent] = useState("menu.png");

  const changeMenu = () =>{
    if(classMenu === ""){
      setClass("visibleMenu");
      setContent("close.png");
    } else {
      setClass("");
      setContent("menu.png")
    }
  }
 
return(
<header className="principal">
      <h1 id="title">DVINOS</h1>
      <nav>
        <button className="menuButton" onClick={changeMenu}><img id="menu" src={`img/${content}`} alt="menu"/></button>
        <ul className={classMenu}>
          <li>
            <NavLink exact to="/" activeClassName="active" onClick={changeMenu}>Portada</NavLink>
          </li>
          <li>
            <NavLink to="/wines" activeClassName="active" onClick={changeMenu}>Lista de vinos</NavLink>
          </li>
          <li>
            <NavLink to="/user" activeClassName="active" onClick={changeMenu}>Tu cuenta</NavLink>
          </li>
                   
        </ul> 
        

      </nav>
</header>
  )
}




  



