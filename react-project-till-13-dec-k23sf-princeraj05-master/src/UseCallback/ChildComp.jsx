


import React from 'react'

const ChildComp = (props) => {
    console.log("Child Component Rendered")
  return (
    <div>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
      
    </div>
  )
}

export default React.memo(ChildComp);
