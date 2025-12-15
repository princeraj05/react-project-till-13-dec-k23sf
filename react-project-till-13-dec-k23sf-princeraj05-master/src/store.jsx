

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './ReduxPractical/CounterSlice'


export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})