import React ,{createContext,useReducer}from 'react'
import { CartReducer } from './CartReducer'
export const CartContext=createContext()

export default function CartContextProvider(props){
    let[cart,cartdispatch]=useReducer(CartReducer,{Shopingcart:[],qty:0,total:0})
    return(
          <CartContext.Provider value={{...cart,cartdispatch}}>
            {props.children}
          </CartContext.Provider>
    )
}