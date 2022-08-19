export const CheckoutReducer =(state,action)=>{
   let {checkout}=state
    action=action.item

    switch(action.type)
    {
    case "ADD_TO_CHECK":
       const check={
           _id:checkout.length+1,
           userid:1,
           mode:action.mode ,
           status:action.status,
           payment:action.payment,
           total:action.total,
           shipping:action.shipping,
           finalamount:action.finalamount,
           products:action.products
       }
         return{
              checkout:[check,...checkout]

         }
         default : return state
    }

    
 }
