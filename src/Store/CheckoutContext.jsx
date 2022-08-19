import React, { createContext, useReducer } from 'react'
import { CheckoutReducer } from './CheckoutReducer'
export const CheckoutContext = createContext()

export default function CheckoutContextProvider(props) {
  let [checkout, checkoutdispatch] = useReducer(CheckoutReducer, {checkout:[]} )
  return (
    <CheckoutContext.Provider value={{ ...checkout, checkoutdispatch }}>
      {props.children}
    </CheckoutContext.Provider>
  )
}