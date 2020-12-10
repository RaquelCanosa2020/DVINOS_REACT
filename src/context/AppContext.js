import {useState, createContext} from 'react';
import {wines} from "../Api.js";

const AppContext = createContext();

function AppContextProvider({children}){
    const [waiting, setWaiting] = useState(false);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("");
    const [priceSelected, setPrice] = useState(25);
    const [countrySelected, setCountry] = useState("cualquiera");
    

    const handleFilterChange = (event) =>{
        setFilter(event.target.value);
                
    }
    

    const handlePrice = (event) =>{
        setPrice(event.target.value);
          
       
    }

    const handleCountry = (event) =>{
        setCountry(event.target.value);
                      
    }
    

    let filtered = wines.filter((wine)=>{
        return wine.name.toLowerCase().includes(filter.toLocaleLowerCase())
        && wine.price <=priceSelected
        && (wine.country === countrySelected || countrySelected ==="cualquiera")
       
    })

    
    


return <AppContext.Provider value={{
waiting, 
setWaiting, 
error, 
setError,
filter,
setFilter,
handleFilterChange,
filtered,
priceSelected,
handlePrice,
countrySelected,
 handleCountry

}}>
    {children}
</AppContext.Provider>
}
export{AppContext, AppContextProvider};