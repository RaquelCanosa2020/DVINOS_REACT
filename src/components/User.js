import {useState} from 'react';
import {Link} from "react-router-dom";
import {format} from "date-fns";
import Cartitem from "./Cartitem";


export default function Purchases() {

const [totalPurchase, setPurchase] = useState(JSON.parse(localStorage.getItem("dvinosPurchases")))


const eraseAll =()=> {
    
if (window.confirm("Confirma que quieres borrar todo. Esta acción es irreversible")){
    setPurchase(null);
    localStorage.removeItem("dvinosPurchases")
    }
}

  
if(!totalPurchase || totalPurchase === []){
    return (
        <div className="user">
            <p>No hay compras</p>
            <Link to="/wines"><span>&#8592;</span> Volver</Link> 
        </div>
    )
} else{
    console.log(totalPurchase);
    return (
        <div className="user">
            <h1>Tus compras en Dvinos</h1>

            <ul className="purchases">
                {totalPurchase.map((purchase, index)=>{
                    return <li key={index}>
                    <p>Fecha: {format(new Date(purchase.date),'d/M/yyyy')}</p>
                    <Cartitem cart={purchase.elements} total={purchase.total}/>
                    </li>
                })}
            </ul>

            <button id="erasePurchase" onClick={eraseAll}>BORRAR COMPRAS</button>
            <Link to="/wines"><span>&#8592;</span> Volver</Link> 

        </div>
    )
}

}
