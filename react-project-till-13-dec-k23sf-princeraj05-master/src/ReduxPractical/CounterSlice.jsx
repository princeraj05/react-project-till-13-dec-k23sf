import { createSlice } from "@reduxjs/toolkit";


export const CounterSlice = createSlice({
    name:"CounterExample",
    initialState : {count:0},
    reducers:{
        increment : (state) =>{state.count+=1},
        decrement : (state) =>{state.count-=1},
        reset: (state) =>{state.count=0},
        addbyNum : (state,action)=>{
            state.count+=Number(action.payload)
        }

    }
})
export const {increment,decrement,reset, addbyNum} = CounterSlice.actions;
export default CounterSlice.reducer;