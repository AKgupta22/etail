import React ,{createContext,useReducer}from 'react'
import { WishlistReducer } from './WishlistReducer'
export const WishlistContext=createContext()

export default function WishlistContextProvider(props){
    let[wishlist,wishlistdispatch]=useReducer(WishlistReducer,{wishlist:[]})
    return(
          <WishlistContext.Provider value={{...wishlist,wishlistdispatch}}>
            {props.children}
          </WishlistContext.Provider>
    )
}