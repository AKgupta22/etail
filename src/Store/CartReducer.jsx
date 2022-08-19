export const CartReducer =(state,action)=>{
var {Shopingcart,qty,total}=state
var product,updatedqty,updatedtotal
    switch(action.type)
 {
    case "ADD_TO_CART":
    product=action.product
    if(Shopingcart.find((item)=>item.id===product.id)!==undefined){
      return state
    }
    else{
         product["qty"]=1
         updatedqty=qty+1
         updatedtotal=total+product.finalprice
         return{
          Shopingcart:[...Shopingcart,product],
          qty:updatedqty,
          total:updatedtotal
         }
    }
    case "INC_CART":
        product=action.product
        product["qty"]=product["qty"]+1
        updatedqty=qty+1
        updatedtotal=total+product.finalprice
        return{
            Shopingcart:[...Shopingcart],
            qty:updatedqty,
            total:updatedtotal
           }
     case "DC_CART":
        product=action.product
        if(product["qty"]===1)
        return state
        else
        product['qty']=product['qty']-1
        updatedqty=qty-1
        updatedtotal=total-product.finalprice
        return{
            Shopingcart:[...Shopingcart],
            qty:updatedqty,
            total:updatedtotal
           }
    case "REMOVE_FROM_CART":
        product=action.product
        Shopingcart=Shopingcart.filter((item)=>item.id!==product.id)
        updatedqty=qty-product["qty"]
        updatedtotal=total-product["qty"]*product.finalprice
        delete product["qty"]
        return{
            Shopingcart:[...Shopingcart],
            qty:updatedqty,
            total:updatedtotal
           }
    default:
        return state
 }
    
}