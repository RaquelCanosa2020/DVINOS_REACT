import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";
import Input from "./Input";

export default function Login(){
    const{userName, setName, recordName} = useContext(AppContext);
  

    return(
        <>
        <form className="form">

            <h2>Escribe tu nombre</h2>

            <Input 
            type="text"
        label="Nombre"
        id="name"
        onChange={(event) => setName(event.target.value)}></Input>

        <button onClick={
            (event) =>{
                event.preventDefault();
                recordName(userName)
            }}>Guardar</button>

        


        </form>

        </>
    )
}