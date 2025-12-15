

import React, { useCallback, useState } from 'react'
import ChildComp from './ChildComp';

const ParentComp = () => {

    const [count, setCount] = useState(0);

    const incre = useCallback(() => {
        setCount(pre => pre+1)
    },[])

    const decre = useCallback(() =>{
        setCount(pre => pre-1)
    },[])

    console.log("Parent Component Rendered")


  return (
    <div>

        <h2>Count : {count}</h2>
        <ChildComp increment = {incre} decrement = {decre} />
    </div>
  )
}

export default ParentComp
