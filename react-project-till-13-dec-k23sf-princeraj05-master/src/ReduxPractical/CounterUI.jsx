

import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addbyNum, decrement, increment, reset} from './CounterSlice';


const CounterUI = () => {

    const [value1, setvalue1] = useState(0);
    const counterValue = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Count:{counterValue}</h2>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button><br/>
      <input type='number' value={value1} onChange={(e) => setvalue1(e.target.value)} />
      <button onClick={()=>{dispatch(addbyNum(value1))}}>Add by Number</button>
    </div>
  )
}

export default CounterUI
