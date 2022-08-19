import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Component/App'
import ProductContextProvider from './Store/ProductContext'
import CartContextProvider from './Store/CartContext'
import WishlistProvider from './Store/WishlistContext'
import CheckoutProvider from './Store/CheckoutContext'
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(

    <>
        <ProductContextProvider>
            <CartContextProvider>
                <WishlistProvider>
                    <CheckoutProvider>
                        <App />
                    </CheckoutProvider>
                </WishlistProvider>
            </CartContextProvider>
        </ProductContextProvider>

    </>


)