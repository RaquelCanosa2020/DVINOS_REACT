import {createContext, useState, useEffect} from 'react';

const CartContext = createContext();

function CartContextProvider({children}){
    const [cart, getCart] = useState([]);
    const [elementsInCart, getElements] = useState(0);
    const [total, getTotal] = useState(0);

    let buy = (item) => {cart.reduce ((acc, item) => {return acc + (item.added*item.price)})};      
    

    

    
    return(
        <CartContext.Provider
        value={{
            cart,
            getCart,
            elementsInCart,
            getElements,
            total,
            getTotal,
            buy
            }}>{children}</CartContext.Provider>
    );

}

export {
    CartContext, CartContextProvider
}
