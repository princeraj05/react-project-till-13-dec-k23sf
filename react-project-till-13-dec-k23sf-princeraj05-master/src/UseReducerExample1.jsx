


import React, { useReducer } from 'react'

    

const UseReducerExample1 = () => {

    const initialCartState = {count:0}
    const initialDiscountState = {discountApplied:false}

    const reducerCart = (state,action) =>{
        switch(action.type){
            case 'addcart' :
                return {count:state.count+1};
            case 'removecart':
                return {count:state.count<=0?0:state.count-1};
            case 'resetcart':
                return initialCartState;
            default:
                return state;
        }
    

    }
    const reducerDiscount = (state,action) =>{
        switch(action.type){
            case "applyDiscount":
                return {discountApplied:true};
            case "removeDiscount":
                return {discountApplied:false};
            default:
                return state;
        }
    }

    const [cartState, dispatchCart] = useReducer(reducerCart, initialCartState);
    const [discountState, dispatcherDiscount] = useReducer(reducerDiscount, initialDiscountState)
  return (
    <div>

        <h2>Cart : {cartState.count}</h2><br />
        <h2>Discount: {discountState.discountApplied ? "Discount Applied": "Discount Removed"}</h2>
        <button onClick={() => dispatchCart({type:'addcart'})}>Add to Cart</button>
        <button onClick={()=>dispatchCart({type:'removecart'})}>Remove from Cart</button>
        <button onClick={()=>dispatchCart({type:'resetcart'})}>Reset Cart</button> <br />
        <button onClick={()=>dispatcherDiscount({type: 'applyDiscount'})}>Apply Discount</button> 
        <button onClick={()=>dispatcherDiscount({type: 'removeDiscount'})}>Remove Discount</button>     
    </div>
  )
}

export default UseReducerExample1
