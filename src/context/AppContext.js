import {useState, createContext} from 'react';
import wines from "../Api.js";

const AppContext = createContext();

function AppContextProvider({children}){
    const [waiting, setWaiting] = useState(false);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("");
    

    const handleFilterChange = (event) =>{
        console.log(filter);
        setFilter(event.target.value);
                
    }

    let filtered = wines.filter((wine)=>{
        return wine.name.toLowerCase().includes(filter.toLocaleLowerCase())
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

}}>
    {children}
</AppContext.Provider>
}
export{AppContext, AppContextProvider};