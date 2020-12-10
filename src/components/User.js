import {useState} from 'react';
import Cartitem from "./Cartitem";
import {format} from "date-fns";


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
            <p>Aún no has realizado ninguna compra en DVINOS</p>

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
            

        </div>
    )
}

}
